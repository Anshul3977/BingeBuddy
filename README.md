# BingeBuddy

Welcome to **BingeBuddy**, a modern web application designed to help users discover their next favorite movie, TV show, book, or anime. This project features a professional, minimalist, and visually appealing frontend, with the initial focus on creating an engaging homepage. The project is currently in development, with only the front page completed so far. Future updates will include additional pages, backend integration, and enhanced functionality.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Roadmap](#roadmap)
- [License](#license)
- [Contact](#contact)

## Overview
BingeBuddy aims to provide a seamless experience for entertainment enthusiasts by offering personalized recommendations and an intuitive interface. The homepage showcases a unique design with scattered posters, emojis, and icons, creating a playful yet professional aesthetic. This project is built using modern web technologies and is intended to evolve into a fully functional platform with user authentication, search capabilities, and content exploration features.

## Features
- **Stunning Homepage**: A beautifully designed front page with a centered title, search bar, and scattered decorative elements (posters, icons, and emojis).
- **Responsive Navbar**: A clean navigation bar with options for "Explore", "Sign-up", and "Dashboard".
- **Interactive Search**: A placeholder search bar (to be enhanced with backend integration).
- **Minimalist Design**: Professional and elegant styling with a light gray background and modern typography.

*Note: The project is in an early stage, with only the homepage implemented. Additional features will be added as development progresses.*

## Installation
To set up the project locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Anshul3977/BingeBuddy.git
   cd BingeBuddy
   ```

2. **Install Dependencies**
   Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed. Then run:
   ```bash
   npm install
   ```

3. **Start the Development Server**
   Launch the application with:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` (or the port specified in the output) to view the homepage.

4. **Build for Production**
   To create a production build, run:
   ```bash
   npm run build
   ```

## Usage
- The homepage is currently static and serves as a visual prototype. Explore the layout, navbar, and decorative elements.
- The search bar is non-functional at this stage but will be connected to a backend API in future updates.
- Use the navbar buttons to navigate (placeholder functionality; to be implemented with React Router).

## Project Structure
The project directory is organized as follows:
```
PROJECT 2/
├── .bolt/
│   ├── config.json
│   └── node_modules/
├── src/
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
- **`.bolt/`**: Configuration files and dependencies managed by Bolt.ai.
- **`src/`**: Source code directory (currently contains the homepage implementation).
- **`.gitignore`**: Specifies files to ignore in Git.
- **`eslint.config.js`**: ESLint configuration for code linting.
- **`index.html`**: Entry point for the web application.
- **`package.json`**: Project metadata and dependencies.
- **`postcss.config.js`**: PostCSS configuration for CSS processing.
- **`tailwind.config.js`**: Tailwind CSS configuration.
- **`tsconfig.*.json`**: TypeScript configuration files.
- **`vite.config.ts`**: Vite configuration for the development server.

## Technologies Used
- **React**: For building the user interface.
- **Vite**: As the build tool and development server.
- **TypeScript**: For type safety and scalability.
- **Tailwind CSS**: For utility-first styling.
- **PostCSS**: For CSS processing.
- **ESLint**: For code quality and linting.

## Contributing
We welcome contributions to improve BingeBuddy! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request with a detailed description of your changes.

Please adhere to the project's coding standards and include tests where applicable. For major changes, please open an issue first to discuss the proposed changes.

## Roadmap
- **Completed**: Homepage design and basic layout.
- **In Progress**: 
  - Integration of React Router for navigation.
  - Functional search bar with backend API connection.
- **Planned**:
  - Additional pages (Recommendation, Explore, Item Details, User Profile, About).
  - User authentication and profile management.
  - Dynamic content loading from a Flask backend.
  - Mobile responsiveness and performance optimization.

## License
This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the license terms.


Thank you for your interest in BingeBuddy! Stay tuned for updates as we continue to develop this exciting project.
