# Galib Hasan Alvee — Personal Portfolio

A responsive personal portfolio website of **Galib Hasan Alvee**, a **CSE Graduate** and **Junior Software Engineer**. The portfolio is built with clean **HTML, CSS, and JavaScript** and includes all major sections required for a professional developer portfolio.

## Live Demo

Add your deployed link here after deployment:

```txt
https://your-portfolio-link.com
```

## Portfolio Requirements Checklist

| Requirement | Status |
|---|---|
| Fully responsive navbar | Completed |
| Easy access to portfolio sections from navbar | Completed |
| Professional designation and introduction | Completed |
| Professional profile photo | Completed |
| Resume view/download button in hero section | Completed |
| Social links | Completed with GitHub and LinkedIn |
| Detailed About Me section | Completed |
| Skills displayed in categorized graphical format | Completed |
| Educational qualification section | Completed |
| Experience section | Completed |
| At least 3 projects in card format | Completed with 4 projects |
| Project details page | Completed |
| Live project and GitHub client repository links | Completed |
| Challenges and future improvements for projects | Completed |
| Contact information section | Completed |
| Footer | Completed |
| Responsive clean UI for all devices | Completed |
| Dark and light theme support | Completed |

## Features

- Responsive navigation bar with mobile menu
- Dark and light theme toggle
- Hero section with name, designation, introduction, photo, and resume button
- GitHub and LinkedIn social buttons
- Animated technology marquee
- About Me section with programming journey, preferred work style, and personal interests
- Projects section with grid/list view and sorting
- Separate project details page for each project
- Experience timeline
- Skills section categorized by Frontend, Backend, and Tools
- Education section
- Contact form using `mailto:` by default
- Email, phone, WhatsApp, and location information
- Minimal polished dark-teal design
- Fully responsive layout for desktop, laptop, tablet, and mobile

## Technologies Used

- HTML5
- CSS3
- JavaScript
- CSS Grid
- Flexbox
- CSS animations
- SVG assets

## Project Structure

```txt
my-portfolio/
│
├── index.html
├── project-details.html
├── README.md
│
├── css/
│   └── styles.css
│
├── js/
│   ├── data.js
│   ├── main.js
│   └── project-details.js
│
└── public/
    └── assets/
        ├── profile.png
        ├── resume.pdf
        ├── project-codeflow.svg
        ├── project-ecommerce.svg
        ├── project-fintech.svg
        └── project-task.svg
```

## Sections

### 1. Navbar

The navbar is fixed at the top and provides quick access to:

- About
- Projects
- Experience
- Skills
- Education
- Contact

It also includes a theme toggle button and a responsive hamburger menu for smaller screens.

### 2. Hero Section

The hero section includes:

- Name: **Galib Hasan Alvee**
- Designation: **CSE Graduate · Junior Software Engineer**
- Short professional introduction
- Profile image
- Contact button
- View / Download CV button
- Social links

### 3. About Me

The About section explains the programming journey, software development interests, preferred type of work, and personal interests outside programming.

### 4. Projects

The project section contains 4 project cards. Each card includes:

- Project name
- Project image
- Short summary
- Technology stack
- View More / Details button

Clicking **View More / Details** opens the project details page in the same tab.

### 5. Project Details Page

Each project details page includes:

- Main technology stack
- Brief description
- Live project link
- GitHub client repository link
- Challenges faced during development
- Potential improvements and future plans

### 6. Experience

The experience section includes:

**Software Development Intern — Goinnovior Limited**  
Dhaka, Bangladesh  
10/2025 — 03/2026

### 7. Skills

Skills are displayed in categorized cards with graphical progress bars:

- Frontend
- Backend
- Tools

### 8. Education

Education section includes:

- **B.Sc. in Computer Science and Engineering**  
  American International University-Bangladesh (AIUB)

- **Higher Secondary Certificate (Science)**  
  Gurudayal Govt College

### 9. Contact

Contact section includes:

- Email
- Phone
- WhatsApp
- Location
- Contact form

By default, the form opens the user's email app using `mailto:`. You can later connect EmailJS, Formspree, or a backend API to receive messages directly.

## How to Run Locally

1. Download or clone this project.
2. Open the project folder.
3. Open `index.html` in any modern browser.

No package installation is required because this is a static website.

## How to Customize

Most personal and project information is stored in:

```txt
js/data.js
```

### Change Name, Role, Contact, and Social Links

Open `js/data.js` and update the `profile` object:

```js
profile: {
  name: "Galib Hasan Alvee",
  role: "CSE Graduate · Junior Software Engineer",
  email: "your-email@example.com",
  phone: "+880XXXXXXXXXX",
  whatsapp: "+880XXXXXXXXXX",
  socials: [
    { label: "GitHub", url: "https://github.com/your-username", icon: "github" },
    { label: "LinkedIn", url: "https://linkedin.com/in/your-profile", icon: "linkedin" }
  ]
}
```

### Change Resume

Replace this file with your real resume:

```txt
public/assets/resume.pdf
```

Keep the filename as:

```txt
resume.pdf
```

The **View / Download CV** button will continue working automatically.

### Change Profile Photo

Replace this file:

```txt
public/assets/profile.png
```

Keep the filename as `profile.png`, or update the `photo` path inside `js/data.js`.

### Change Project Information

Open:

```txt
js/data.js
```

Find the `projects` array and update each project:

```js
{
  id: "your-project-id",
  rank: 1,
  title: "Your Project Name",
  image: "public/assets/your-project-image.png",
  summary: "Short project summary.",
  description: "Detailed project description.",
  stack: ["React", "TypeScript", "Node.js"],
  live: "https://your-live-project-link.com",
  github: "https://github.com/your-username/your-client-repo",
  challenges: [
    "Challenge one.",
    "Challenge two."
  ],
  improvements: [
    "Future improvement one.",
    "Future improvement two."
  ]
}
```

Do not change the `id` after you create a project unless you also update links using that ID.

## Contact Form Upgrade

The current contact form uses `mailto:`. To receive messages directly without opening the visitor's email app, connect one of these services:

- EmailJS
- Formspree
- A custom backend API

For EmailJS, add your EmailJS script and replace the current `initContactForm()` function inside:

```txt
js/main.js
```

Never put Gmail passwords, SMTP passwords, or private API keys in frontend JavaScript.

## Deployment Options

You can deploy this portfolio using:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

## Author

**Galib Hasan Alvee**

- GitHub: `https://github.com/galibh1`
- LinkedIn: `https://linkedin.com/in/galibh1`
- Email: `galibh233@gmail.com`

## Footer

```txt
© 2026 Galib Hasan Alvee.
```

## License

This project is for personal portfolio use and can be customized as needed.
