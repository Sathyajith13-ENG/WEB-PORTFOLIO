# Sathyajith K - Developer Portfolio

A responsive, modern personal portfolio website built with **React**, **Tailwind CSS**, and **React Icons**, personalized for **Sathyajith K** — Python Developer specializing in Machine Learning, Natural Language Processing, Flask, and Streamlit.

---

## 🚀 Live Demo & Repository
- **GitHub Repository:** [https://github.com/Sathyajith13-ENG/WEB-PORTFOLIO](https://github.com/Sathyajith13-ENG/WEB-PORTFOLIO)
- **Deployment Platform:** Vercel

---

## 🛠️ Tech Stack & Architecture
- **Frontend:** React 18, Tailwind CSS 3.4
- **Iconography:** React Icons (`react-icons/fa`, `react-icons/si`, `react-icons/tb`, `react-icons/vsc`)
- **Styling:** Dark mode slate/lime theme with responsive grids, animated tech marquee ticker, and interactive category tabs
- **Fonts:** Plus Jakarta Sans, Inter, JetBrains Mono

---

## 📁 Project Structure
```text
my-portfolio/
├── README.md               # Root documentation & setup guide
└── my-portfolio/           # React application directory
    ├── public/
    │   ├── index.html      # SEO metadata & fonts
    │   ├── favicon.ico
    │   └── manifest.json
    ├── src/
    │   ├── components/
    │   │   ├── Header.jsx           # Hero, profile summary & skill filter tabs
    │   │   ├── TechBadgeToggle.jsx  # Animated marquee ticker & grid toggle
    │   │   ├── Projects.jsx         # Featured projects with GitHub links
    │   │   ├── Certifications.jsx   # Kaggle certifications & core competencies
    │   │   ├── Education.jsx        # Academic background & degrees
    │   │   └── Footer.jsx           # Quick contact links & copyright
    │   ├── data/
    │   │   ├── qaData.js            # Filterable technical skill categories
    │   │   └── projectsData.js      # Project details, descriptions & tags
    │   ├── images/
    │   │   └── IMG_20261031_124406.png # Profile photo
    │   ├── resume/
    │   │   └── my resume.pdf        # Downloadable resume PDF
    │   ├── App.js
    │   ├── index.js
    │   └── index.css
    ├── package.json
    ├── tailwind.config.js
    └── vercel.json
```

---

## 💻 Running Locally

To run the project on your machine:

1. **Navigate into the React project directory:**
   ```bash
   cd my-portfolio
   ```

2. **Install dependencies (if not already installed):**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm start
   ```

4. Open your browser at [http://localhost:3000](http://localhost:3000) to view the live site.

---

## ⚡ Production Build

To generate an optimized production bundle:
```bash
cd my-portfolio
npm run build
```
The output will be placed in `my-portfolio/build`.

---

## 🌐 Deploying to Vercel

1. Log in to [Vercel](https://vercel.com) and click **"Add New" > "Project"**.
2. Connect and import your GitHub repository: `Sathyajith13-ENG/WEB-PORTFOLIO`.
3. Under **Build and Output Settings**:
   - **Root Directory:** Click "Edit" and select `my-portfolio` (since the React app resides in the `my-portfolio` folder).
   - **Framework Preset:** `Create React App`
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
4. Click **Deploy**. Vercel will build and assign you a live production URL!
