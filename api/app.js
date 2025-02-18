import puppeteer from 'puppeteer-core';
import { fileURLToPath } from 'url';
import path from 'path';

// Path to Brave executable
const bravePath = 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe'; // Use double backslashes

(async () => {
  // Launch Brave
  const browser = await puppeteer.launch({
    executablePath: bravePath,
    headless: true, // Run in headless mode (no GUI)
  });

  // Open a new page
  const page = await browser.newPage();

  // Set HTML and CSS content
  const html = `<div id="a4PDF" class="a4-paper mt-6">
<div style="text-align: center; border-bottom: 1px solid #464646;">
<p style="font-size: 1.5em; font-weight: bold; margin: 0;">FALAK PUBLIC SCHOOL, MORADABAD</p>
<p style="font-size: 1.25em; font-weight: bold; margin: 0;">Summative Assessment - I</p>
<p style="font-size: 1em; font-weight: bold; margin: 0;">Subject - English</p>
<div style="display: flex; justify-content: space-between; margin: 0;">
<p style="font-weight: bold; margin: 0;">Time: 45 Hrs</p>
<p style="font-size: 1em; font-weight: bold; margin: 0;">Class - I</p>
<p style="font-weight: bold; margin: 0;">M.M: 20</p>
</div>
</div>
<div style="width: 100%; padding: 5px;">
<div style="display: flex; justify-content: space-between; margin-bottom: 0; width: 100%;">
<p style="margin: 0;"><strong>Q1. Define the following:</strong></p>
<span style="font-weight: bold;">10</span>
</div>
<div style="display: flex; flex-wrap: wrap; justify-content: center;">
<p style="margin-right: 20px; margin-bottom: 0;">A: India</p>
<p style="margin-right: 20px; margin-bottom: 0;">B: France</p>
<p style="margin-right: 20px; margin-bottom: 0;">C: Japan</p>
<p style="margin-right: 20px; margin-bottom: 0;">D: Germany</p>
<p style="margin-right: 20px; margin-bottom: 0;">E: Brazil</p>
<p style="margin-right: 20px; margin-bottom: 0;">F: Canada</p>
</div>
<div style="display: flex; justify-content: space-between; margin-bottom: 0; width: 100%;">
<p style="margin: 0;"><strong>Q2. Match the following countries with their capitals:</strong></p>
<span style="font-weight: bold;">10</span>
</div>
<div style="display: flex; justify-content: flex-start; padding-left: 20px; margin-bottom: 5;">
<ul style="list-style-type: none; padding-right: 100px; margin: 0;">
<li>
                    a.) India
                </li>
<li>
                    b.) France
                </li>
<li>
                    c.) Japan
                </li>
<li>
                    d.) Germany
                </li>
<li>
                    e.) Brazil
                </li>
<li>
                    f.) Canada
                </li>
</ul>
<ul style="list-style-type: none; margin: 0;">
<li>
                    New Delhi
                </li>
<li>
                    Paris
                </li>
<li>
                    Tokyo
                </li>
<li>
                    Berlin
                </li>
<li>
                    Brasília
                </li>
<li>
                    Ottawa
                </li>
</ul>
</div>
<div style="display: flex; justify-content: space-between; margin-bottom: 0; width: 100%;">
<p style="margin: 0;"><strong>Q3. Answer the following general knowledge questions:</strong></p>
<span style="font-weight: bold;">10</span>
</div>
<div style="margin-bottom: 5px; padding-left: 15px;">
<p style="margin: 0;">A: Who is known as the Father of the Nation in India?</p>
<p style="margin: 0;">B: What is the chemical symbol for water?</p>
<p style="margin: 0;">C: Who wrote 'Pride and Prejudice'?</p>
<p style="margin: 0;">D: What is the highest mountain in the world?</p>
<p style="margin: 0;">E: Which planet is known as the Red Planet?</p>
</div>
<div style="display: flex; justify-content: space-between; margin-bottom: 0; width: 100%;">
<p style="margin: 0;"><strong>Q4. Fill in the blanks:</strong></p>
<span style="font-weight: bold;">10</span>
</div>
<div style="margin-bottom: 5px; padding-left: 15px;">
<p style="margin: 0;">A: The Great Wall of _____ is visible from space.</p>
<p style="margin: 0;">B: The boiling point of water is _____ degrees Celsius.</p>
<p style="margin: 0;">C: Albert Einstein developed the theory of _____</p>
<p style="margin: 0;">D: The largest desert in the world is the _____ Desert.</p>
<p style="margin: 0;">E: Light travels at approximately _____ km/s.</p>
</div>
<div style="display: flex; justify-content: space-between; margin-bottom: 0; width: 100%;">
<p style="margin: 0;"><strong>Q5. State whether the following statements are True or False:</strong></p>
<span style="font-weight: bold;">10</span>
</div>
<div style="margin-bottom: 5px; padding-left: 15px;">
<p style="margin: 0;">A: The Great Pyramid of Giza is one of the Seven Wonders of the Ancient World.</p>
<p style="margin: 0;">B: The Pacific Ocean is the smallest ocean in the world.</p>
<p style="margin: 0;">C: Mount Everest is in the Himalayas.</p>
<p style="margin: 0;">D: Venus is the hottest planet in the solar system.</p>
<p style="margin: 0;">E: The human body has 206 bones.</p>
</div>
<div style="display: flex; justify-content: space-between; margin-bottom: 0; width: 100%;">
<p style="margin: 0;"><strong>Q6. Choose the correct options:</strong></p>
<span style="font-weight: bold;">10</span>
</div>
<div style="padding-left: 15px; margin-bottom: 5px;">
<p style="margin: 0;">A: Which is the largest mammal on Earth?</p>
<div style="padding-left: 30px; line-height: 1; display: flex; flex-wrap: wrap">
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">a. Elephant</p>
</div>
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">b. Blue Whale</p>
</div>
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">c. Giraffe</p>
</div>
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">d. Hippopotamus</p>
</div>
</div>
<p style="margin: 0;">B: Which is the closest star to Earth?</p>
<div style="padding-left: 30px; line-height: 1; display: flex; flex-wrap: wrap">
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">a. Proxima Centauri</p>
</div>
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">b. Sirius</p>
</div>
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">c. Betelgeuse</p>
</div>
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">d. Alpha Centauri</p>
</div>
</div>
<p style="margin: 0;">C: Which is the longest river in the world?</p>
<div style="padding-left: 30px; line-height: 1; display: flex; flex-wrap: wrap">
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">a. Amazon</p>
</div>
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">b. Nile</p>
</div>
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">c. Yangtze</p>
</div>
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">d. Mississippi</p>
</div>
</div>
<p style="margin: 0;">D: Which of the following is a primary color?</p>
<div style="padding-left: 30px; line-height: 1; display: flex; flex-wrap: wrap">
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">a. Red</p>
</div>
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">b. Green</p>
</div>
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">c. Blue</p>
</div>
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">d. Yellow</p>
</div>
</div>
</div>
<div style="display: flex; justify-content: space-between; margin-bottom: 0; width: 100%;">
<p style="margin: 0;"><strong>Q7. Science and Technology Questions:</strong></p>
<span style="font-weight: bold;"></span>
</div>
<div style="padding-left: 15px; margin-bottom: 5px;">
<p style="margin: 0;">A: Who invented the light bulb?</p>
<div style="padding-left: 30px; line-height: 1; display: flex; flex-wrap: wrap">
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">a. Thomas Edison</p>
</div>
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">b. Nikola Tesla</p>
</div>
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">c. Alexander Graham Bell</p>
</div>
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">d. Isaac Newton</p>
</div>
</div>
<p style="margin: 0;">B: Which planet has the most moons?</p>
<div style="padding-left: 30px; line-height: 1; display: flex; flex-wrap: wrap">
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">a. Jupiter</p>
</div>
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">b. Saturn</p>
</div>
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">c. Mars</p>
</div>
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">d. Uranus</p>
</div>
</div>
<p style="margin: 0;">C: What does CPU stand for?</p>
<div style="padding-left: 30px; line-height: 1; display: flex; flex-wrap: wrap">
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">a. Central Processing Unit</p>
</div>
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">b. Computer Power Unit</p>
</div>
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">c. Control Panel Unit</p>
</div>
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">d. Central Program Unit</p>
</div>
</div>
<p style="margin: 0;">D: What is the chemical formula for carbon dioxide?</p>
<div style="padding-left: 30px; line-height: 1; display: flex; flex-wrap: wrap">
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">a. CO2</p>
</div>
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">b. H2O</p>
</div>
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">c. O2</p>
</div>
<div style="width: calc(50% - 10px);">
<p style="margin: 2px 0;">d. C2O</p>
</div>
</div>
</div>
</div>
</div>`;
  const css = `.a4-paper {
        color: black;
        background: white;
        line-height: 1.2;
        font-size: 20px;
        }`;

  await page.setContent(`<style>${css}</style>${html}`, {
    waitUntil: 'networkidle0',
  });

  // Generate PDF
  await page.pdf({
    path: 'output.pdf', // Save the PDF to a file
    format: 'A4',
    printBackground: true,
  });

  // Close the browser
  await browser.close();

  console.log('PDF generated successfully!');
})();
