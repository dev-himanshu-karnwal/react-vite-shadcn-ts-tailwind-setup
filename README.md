# React + Vite + TypeScript + Shadcn UI + Tailwind CSS Boilerplate

This repository provides a boilerplate setup for a modern web application using **React**, **Vite**, **TypeScript**, **Shadcn UI**, and **Tailwind CSS**. It is designed to be a starting point for building scalable and maintainable web applications with a focus on developer experience and performance.

---

## 🚀 Features

- **React 18**: The latest version of React for building user interfaces.
- **Vite**: A fast and modern build tool for frontend development.
- **TypeScript**: Static typing for JavaScript to improve code quality and developer productivity.
- **Shadcn UI**: A collection of beautifully designed, accessible, and customizable UI components.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Pre-configured ESLint and Prettier**: For consistent code formatting and linting.

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.x or higher)
- **npm** (v9.x or higher) or **yarn** (v1.22.x or higher)
- **Git** (for version control)

---

## 🛠️ Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/dev-himanshu-karnwal/react-vite-shadcn-ts-tailwind-setup.git
   cd react-vite-shadcn-ts-tailwind-setup
   ```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Using yarn:

   ```bash
   yarn install
   ```

3. **Start the development server:**

   Using npm:

   ```bash
   npm run dev
   ```

   Using yarn:

   ```bash
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3456` to view the application.

---

## 🧩 Technologies and Libraries

This project uses the following technologies and libraries, all of which are compatible with each other:

| Dependency          | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `react`             | A JavaScript library for building user interfaces.                         |
| `react-dom`         | React package for working with the DOM.                                    |
| `vite`              | A fast and modern build tool for frontend development.                     |
| `typescript`        | A typed superset of JavaScript that compiles to plain JavaScript.          |
| `shadcn-ui`         | A collection of customizable and accessible UI components.                 |
| `tailwindcss`       | A utility-first CSS framework for building custom designs.                 |
| `postcss`           | A tool for transforming CSS with JavaScript.                               |
| `autoprefixer`      | A PostCSS plugin to parse CSS and add vendor prefixes.                     |
| `eslint`            | A pluggable linting utility for JavaScript and TypeScript.                 |

---

## 🛠️ Configuration

### Tailwind CSS

Tailwind CSS is configured in the `tailwind.config.js` file. You can customize the theme, colors, and other settings here.

```javascript
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Shadcn UI

Shadcn UI components are pre-configured and can be imported directly into your project. You can customize the theme and styles by modifying the `shadcn-ui` configuration.

### ESLint and Prettier

ESLint and Prettier are configured to enforce consistent code formatting and linting rules. You can modify the rules in `.eslintrc.js` and `.prettierrc.js` respectively.

---

## 🧪 Testing

This project does not include a testing setup by default. However, you can easily add testing libraries like **Jest** and **React Testing Library** if needed.

---

## 🚀 Deployment

To build the project for production, run:

Using npm:

```bash
npm run build
```

Using yarn:

```bash
yarn build
```

The production-ready files will be generated in the `dist/` directory.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the blazing-fast development experience.
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework.
- [Shadcn UI](https://ui.shadcn.com/) for the beautiful and customizable UI components.
- [React](https://reactjs.org/) for the JavaScript library for building user interfaces.

---

## 📧 Contact

If you have any questions or suggestions, feel free to reach out:

- **Himanshu** - [himanshukar1810@gmail.com](mailto:himanshukar1810@gmail.com)
- **GitHub** - [dev-himanshu-karnwal](https://github.com/dev-himanshu-karnwal)

---

Happy coding! 🚀
