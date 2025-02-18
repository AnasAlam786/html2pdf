const express = require('express');
const chromium = require('@sparticuz/chromium');
const puppeteer = require('puppeteer-core');
const { createHash } = require('crypto');
const app = express();

// Middleware
app.use(express.json());

// Password validation middleware
const authMiddleware = (req, res, next) => {
  const clientHash = createHash('sha256')
    .update(req.headers.authorization || '')
    .digest('hex');
  
  if (clientHash !== process.env.API_PASSWORD_HASH) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

// PDF generation endpoint
app.post('/generate-pdf', authMiddleware, async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: process.env.CHROMIUM_PATH || await chromium.executablePath(),
      headless: true
    });

    const page = await browser.newPage();
    await page.setContent(req.body.html, { waitUntil: 'networkidle0' });
    
    const pdf = await page.pdf({
      format: req.body.options?.format || 'A4',
      printBackground: true
    });

    await browser.close();

    res
      .set('Content-Type', 'application/pdf')
      .set('Content-Disposition', 'attachment; filename="document.pdf"')
      .send(pdf);

  } catch (error) {
    console.error('PDF Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Vercel serverless adapter
module.exports = app;
