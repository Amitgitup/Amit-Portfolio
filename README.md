![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)&nbsp;
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)&nbsp;
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)&nbsp;
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)&nbsp;
![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)&nbsp;
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)&nbsp;
![Visitors](https://visitor-badge.laobi.icu/badge?page_id=sufiinamulhassan.inamulhassan.ai.engineer.portfolio)

# 🚀 Professional Portfolio Website

A stunning, highly interactive portfolio website built with **React**, **Three.js**, **GSAP**, and **Framer Motion**. This project features a unique interactive character, smooth scrolling, and modern aesthetics.

---

## 🛠️ Tech Stack

- **Core:** React, TypeScript, Vite
- **3D Graphics:** Three.js, @react-three/fiber, @react-three/drei
- **Animations:** GSAP (GreenSock), Framer Motion
- **Styling:** CSS3 (Vanilla)
- **Deployment:** Vercel

---

## 📂 Folder Structure

Understanding the project structure will help you navigate and customize the code effectively.

```text
├── public/                 # Static assets
│   ├── draco/              # Draco compression libraries for 3D models
│   ├── images/             # Images and project thumbnails
│   ├── models/             # 3D character and environment models
│   ├── CV.pdf              # Your resume/CV file
│   └── favicon.ico         # Browser tab icon
├── src/
│   ├── assets/             # Global assets
│   ├── components/         # React components
│   │   ├── Character/      # 3D Character logic, rigging, and animations
│   │   ├── styles/         # CSS modules for each component
│   │   ├── utils/          # Utility scripts (e.g., splitText.ts)
│   │   ├── Navbar.tsx      # Interactive navigation
│   │   ├── Landing.tsx     # Hero section with 3D elements
│   │   ├── About.tsx       # Personal biography
│   │   ├── TechStack.tsx   # Skill visualization grid
│   │   ├── Work.tsx        # Project showcase gallery
│   │   └── Contact.tsx     # Social links and contact info
│   ├── context/            # React Context for global state (e.g., Theme)
│   ├── data/
│   │   └── boneData.ts     # Character bone configuration
│   ├── App.tsx             # Main routing and layout
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global typography and base styles
├── package.json            # Scripts and dependencies
├── vite.config.ts          # Vite build configuration
└── tsconfig.json           # TypeScript configuration
```

---

## ⚡ Getting Started

Follow these steps to set up your own version of this portfolio.

### 1. Fork the Repository
First, click the **Fork** button at the top right of this page to create a copy of the project in your own GitHub account.

### 2. Rename Your Repository (Optional)
Once forked, go to **Settings** in your repository and change the name to something like `my-portfolio`.

### 3. Clone Your Forked Repository
Open your terminal and run the following command (replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your details):
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

### 4. Install Dependencies
Navigate into the project folder and install the required packages:
```bash
cd YOUR_REPO_NAME
npm install
```

### 5. Run Locally
Start the development server:
```bash
npm run dev
```
The site will be available at `http://localhost:5173`.

---

## ✍️ How to Add Your Own Data

Customize the following files to reflect your professional identity:

1.  **Resume/CV:** Replace `public/CV.pdf` with your own file.
2.  **Branding:** Update the site title in `index.html` and the favicon in `public/`.
3.  **Content:** Edit component files in `src/components/` to update text, project descriptions, and links.
4.  **Icons:** Add your custom tech icons to `public/images/`.

---

## 🚀 Deployment on Vercel

1. Log in to [Vercel](https://vercel.com/).
2. Click **New Project** and select your forked repository.
3. Ensure the Framework is set to **Vite**.
4. Click **Deploy**. Vercel will handle the rest!

---

## 🔗 Follow Me

Let's connect! You can find me on these platforms:

- **LinkedIn:** [sufiinamulhassan](https://www.linkedin.com/in/sufiinamulhassan/)
- **Facebook:** [sufiinamulhassan](https://www.facebook.com/sufiinamulhassan/)
- **Kaggle:** [sufiinamulhassan](https://www.kaggle.com/sufiinamulhassan)
- **Instagram:** [sufi_inam_ul_hassan](https://www.instagram.com/sufi_inam_ul_hassan/)
- **X (Twitter):** [sufi_inam001](https://x.com/sufi_inam001)
- **LeetCode:** [sufiinamulhassan](https://leetcode.com/u/sufiinamulhassan)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---
**Made with ❤️ by Sufi Inam Ul Hassan**
