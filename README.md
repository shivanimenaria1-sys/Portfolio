# Shivani Menaria Portfolio

Responsive portfolio frontend built with React and Vite.

## Run Locally

```bash
npm install
npm run dev
```

The local dev server starts on `http://localhost:5173` by default.

## Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```text
client/
  public/
    shivani-menaria-resume.pdf
  src/
    data/
      portfolio.js
    App.jsx
    main.jsx
    styles.css
  index.html
  package.json
  vite.config.js
```

## Main Files

- `src/App.jsx`
  Main layout, sections, dark mode toggle, animated stats, and GPA interaction.
- `src/data/portfolio.js`
  Portfolio content, links, skills, projects, education, and profile data.
- `src/styles.css`
  Visual design, responsive layout, light/dark theme styles.
- `public/shivani-menaria-resume.pdf`
  Resume file used by the download button.

## Customization

Update these values in `src/data/portfolio.js`:

- `profile.github`
  Replace the placeholder GitHub URL with the real profile link.
- `profile.linkedin`
  Update if needed.
- `profile.about`, `profile.aboutPoints`, `profile.focusAreas`
  Edit the personal introduction and emphasis areas.
- `projects`
  Add live links, GitHub links, screenshots, or more project details if available.

## Antigravity Use

This is a standard React + Vite app, so it should open directly in Google Antigravity as an existing project.

Typical flow:

1. Open the `client` folder as the project root.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the preview URL.

## Current Status

- Build verified locally with `npm run build`
- Resume download is wired and working
- Dark mode is included
- One placeholder still needs replacement: `profile.github`
