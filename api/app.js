const chromium = require('@sparticuz/chromium');
const puppeteer = require('puppeteer-core');
const { createHash } = require('crypto');

module.exports = async (req, res) => {
  // Authentication
  const authHash = createHash('sha256')
    .update(req.headers.authorization || '')
    .digest('hex');
  
  if (authHash !== process.env.API_PASSWORD_HASH) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');

  // Handle OPTIONS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Main logic
  try {
    const { html, options = {} } = req.body;
    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: process.env.CHROMIUM_EXECUTABLE_PATH || await chromium.executablePath(),
      headless: true,
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      ...options
    });

    await browser.close();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="document.pdf"');
    return res.send(pdf);

  } catch (error) {
    console.error('PDF Error:', error);
    return res.status(500).json({ error: error.message });
  }
};
