# Study Notes - CaputiDev

[![pt-br](https://img.shields.io/badge/lang-pt_br-green.svg)](./README.md)

This repository contains my "Digital Garden" — a public place where I collect notes about programming, algorithms, book summaries and general software engineering.

The site is powered by Docusaurus and published to GitHub Pages.

 **WebSite:** [https://CaputiDev.github.io/study-notes/](https://CaputiDev.github.io/study-notes/)

---

## How to use this project

Install dependencies (run once or after deleting node_modules):

```bash
npm install
```

Start the local development server:

```bash
npm start
```

>Open http://localhost:3000 in your browser. Docusaurus will live-reload when you edit any file.

---

## My workflow

## 1. Create and test

   Write notes inside the `docs/` folder and preview them with `npm start`.

## 2. Save the code

```bash
git add .
git commit -m "docs: add new section to study notes"
git push
```

## 3. Publish (deploy)

```powershell
$env:GIT_USER = "GIT_USERNAME"  # Example: 'CaputiDev'
npm run deploy
```

---

## Important folders

* `docs/` — notes and study materials (.md files)
* `src/pages/` — homepage and custom components/styles
* `static/img/` — static images (logos, diagrams, backgrounds)
* `docusaurus.config.js` — global site configuration (navbar, title, links)

---

## License

This project is licensed under the MIT License — see `LICENSE` for details.

Built with Docusaurus (Meta Platforms, Inc.).

>Feel free to fork this project and build your own Digital Garden just remember to give proper credit.😉
