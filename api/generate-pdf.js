const chromium = require('@sparticuz/chromium');
const puppeteer = require('puppeteer-core');
const { createHash } = require('crypto');

module.exports = async (req, res) => {
  // Validate password
  const incomingHash = createHash('sha256')
    .update(req.headers.authorization || '')
    .digest('hex');

  if (incomingHash !== process.env.API_PASSWORD_HASH) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // PDF generation
  try {
    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: process.env.CHROMIUM_PATH || await chromium.executablePath(),
      headless: true
    });

    const page = await browser.newPage();
    await page.setContent(req.body.html, {
      waitUntil: 'networkidle0'
    });

    const pdf = await page.pdf({
      format: req.body.options?.format || 'A4',
      printBackground: true,
      margin: req.body.options?.margin || undefined
    });

    await browser.close();

    res.setHeader('Content-Type', 'application/pdf');
    res.send(pdf);

  } catch (error) {
    console.error('PDF Error:', error);
    res.status(500).json({ error: 'PDF generation failed' });
  }
};
