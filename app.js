import express from "express"
import puppeteer from "puppeteer"
import bodyParser from "body-parser"
import dotenv from "dotenv"

// Load environment variables
dotenv.config()

const app = express()
const port = 3000

// API key (in a real application, use a strong, randomly generated key)
const API_KEY = process.env.API_KEY

// Middleware to parse JSON bodies
app.use(bodyParser.json({ limit: "50mb" }))

// Middleware to check API key
const authenticateApiKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"]

  if (!apiKey || apiKey !== API_KEY) {
    return res.status(401).json({ error: "Unauthorized: Invalid API key" })
  }

  next()
}

// POST endpoint to convert HTML to PDF (now with authentication)
app.post("/convert", authenticateApiKey, async (req, res) => {
  try {
    const { html } = req.body

    if (!html) {
      return res.status(400).send("HTML content is required")
    }

    // Launch a new browser instance
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    // Set the HTML content of the page
    await page.setContent(html, { waitUntil: "networkidle0" })

    // Generate PDF
    const pdfBuffer = await page.pdf({ format: "A4" })

    // Close the browser
    await browser.close()

    // Set headers for PDF download
    res.setHeader("Content-Type", "application/pdf")
    res.setHeader("Content-Disposition", "attachment; filename=output.pdf")

    // Send the PDF buffer
    res.send(pdfBuffer)
  } catch (error) {
    console.error("Error generating PDF:", error)
    res.status(500).send("Error generating PDF")
  }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

