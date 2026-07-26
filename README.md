# Akan Name Generator

## Project Description

The **Akan Name Generator** is a web application that reveals a user's traditional Akan day name based on their date of birth and gender. In Akan culture (Ghana and parts of Côte d'Ivoire), every person is traditionally given a name corresponding to the day of the week on which they were born, alongside their given name.

The app lets a visitor enter their birth date (day, month, year) and gender, validates the input, calculates the day of the week they were born on, and displays the matching male or female Akan day name. The site also includes background information on Akan history and culture.

## Author(s)

- **[Clara Kaari]** – [rizikiclara60@gmail.com(mailto:rizikiclara60@gmail)] – [GitHub profile link]

## Setup Instructions

This is a static website with no build tools or dependencies required.

1. **Clone or download** the project files:
   ```bash
   git clone https://github.com/[rizikiclara60@gmail.com]/akan-name-generator.git
   cd akan-name-generator
   ```
2. **Ensure the following files are in the same folder:**
   - `index.html`
   - `styles.css`
   - `script.js`
   - Image assets (`akan 2.jpg`, `akan 3.jpg`, `akan 4.jpg`, etc.)
3. **Open the app** by double-clicking `index.html`, or serve it locally for the best experience:
   ```bash
   # Using VS Code Live Server extension, or:
   npx serve .
   ```
4. No API keys, build steps, or package installs are needed — it runs entirely in the browser.

## BDD (Behavior-Driven Development)

Below are the core behaviors of the application, written as Given/When/Then scenarios.

### Feature: Generate an Akan day name from a birth date

**Scenario: Successful name generation**
- **Given** the user is on the Akan Name Generator page
- **When** they enter a valid day, month, year, and select a gender
- **And** they click "Generate name"
- **Then** the application calculates the correct day of the week for that date
- **And** displays the matching Akan day name for the selected gender

**Scenario: Missing or invalid month**
- **Given** the user has entered a date
- **When** the month value is less than 1 or greater than 12
- **Then** the application displays an error message
- **And** does not attempt to calculate a name

**Scenario: Day exceeds days in the selected month**
- **Given** the user has entered a valid month and year
- **When** the day entered is greater than the actual number of days in that month (e.g., 30 February, or 31 April)
- **Then** the application displays an error stating the valid day range for that month
- **And** correctly allows 29 February only in leap years

**Scenario: No gender selected**
- **Given** the user has entered a valid date
- **When** no gender is selected
- **Then** the application displays an error asking the user to select a gender

**Scenario: Clearing the form**
- **Given** the user has generated a result or triggered an error
- **When** they click the "Clear" button
- **Then** all input fields are reset
- **And** the result and error messages are removed from the page

## Technologies Used

- **HTML5** – page structure and semantic markup
- **CSS3** – layout, styling, and animations
- **JavaScript (Vanilla ES6+)** – form validation, date calculation logic, and DOM manipulation
- **Font Awesome** (via CDN) – social media icons in the footer

## Contact Information

For questions, feedback, or issues, please reach out:

- **Email:** [rizikiclara60@gmail.com](mailto:rizikiclara60@gmail)
- **GitHub:** [github.com/rizikiclara60@gmail](https://github.com/rizikiclara60@gmail)
- **Issues:** Please open an issue on the project's GitHub repository

## License and Copyright

© 2026 Akan Heritage. All Rights Reserved.

This project is licensed under the **MIT License** — you are free to use, copy, modify, and distribute this software, provided the original copyright notice and license are included in any copies or substantial portions of the software.

```
MIT License

Copyright (c) 2026 [Your Name / Akan Heritage]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```