# Dark Teal Personal Portfolio

A complete responsive personal portfolio website updated for Galib Hasan Alvee with editable project placeholders. The design follows the dark teal/glassmorphism style shown in the provided reference images and includes a white/light theme option.

## Included Requirements

- Fully responsive sticky navbar with mobile hamburger menu
- Hero section with designation, introduction, professional dummy photo, social links, and CV button that opens in a new tab
- Dark and light theme toggle with localStorage saving
- About Me section with journey, work style, hobbies/interests, and personality-focused copy
- Graphical categorized skills section
- Educational qualification section
- Professional experience timeline
- Projects section with at least 3 project cards
- Dynamic project details page with:
  - Main technology stack
  - Brief description
  - Live project link
  - GitHub client repository link
  - Development challenges
  - Future improvements and plans
- Contact information with email, phone, WhatsApp, and contact form using `mailto:`
- Elegant footer
- Clean, responsive UI for desktop, laptop, tablet, and mobile

## How to Run

You can open `index.html` directly in a browser.

For the best local experience, run a simple local server from the project folder:

```bash
python3 -m http.server 5173
```

Then open:

```text
http://localhost:5173
```

## How to Customize

Most dummy content is inside:

```text
js/data.js
```

Replace the following with your real details:

- Name, designation, introduction, email, phone, WhatsApp, and location
- Social profile links
- Skills and education
- Experience timeline
- Project data and project links

Replace the dummy professional photo here:

```text
public/assets/profile.svg
```

Replace the resume PDF here:

```text
public/assets/resume.pdf
```

## Project Structure

```text
dark-teal-dev-portfolio/
├── index.html
├── project-details.html
├── css/
│   └── styles.css
├── js/
│   ├── data.js
│   ├── main.js
│   └── project-details.js
└── public/
    ├── resume.pdf
    └── assets/
        ├── profile.svg
        ├── project-fintech.svg
        ├── project-ecommerce.svg
        ├── project-codeflow.svg
        └── project-task.svg
```

## Notes

The resume, contact details, social URLs, and project links are placeholders. Replace them with your final content before publishing.
