import autoprefixer from "autoprefixer";
import dedent from "dedent";

const lookup = {
  SUGGESTIONS: [
    "Create TODO App in React",
    "Create Budget Tracker App",
    "Create Gym Management Portal Dashboard",
    "Create Quiz App on History",
    "Create Login/Signup Screen",
    "Create Blog Website in Next.js",
    "Create Portfolio Website with Tailwind",
    "Create Admin Panel Dashboard"
  ],

  HERO_HEADING: "What do you want to build?",
  HERO_DESC: "Prompt, run, edit, and deploy full-stack web apps",
  INPUT_PLACEHOLDER: "What do you want to build?",
  SIGNIN_HEADING: "Welcome to InstaSite!",
  SIGNIN_SUBHEADING: "To use InstaSite, log in or create an account to start building projects instantly.",
  SIGNIN_AGREEMENT_TEXT: "By using InstaSite, you agree to our terms and consent to usage tracking for analytics.",

      DEFAULT_FILE: {
    '/public/index.html': {
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div id="root"></div>
</body>
</html>`
    },
    '/App.css': {
      code:  `
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      `
    },
    '/tailwind.config.js': {
      code:  `
      /** @type {import('tailwindcss').Config} */
      module.exports = {
      content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
      extend: {},
      },
      plugins: [],
      }
      `
    },
    '/postcss.config.js': {
      code: `/** @type {import('postcss-load-config').Config} */
      const config = {
      plugins: {
      tailwindcss: {},
      autoprefixer: {},
      },
      };
      export default config;
      `
    }
  },


  DEPENDANCY: {
    postcss: "^8",
    tailwindcss: "^3.4.1",
    autoprefixer: "^10.0.0",
    uuid4: "^2.0.3",
    "tailwind-merge": "^2.4.0",
    "lucide-react": "latest",
    "react-router-dom": "latest",
    firebase: "^11.1.0",
    "@google/generative-ai": "^0.21.0",
  },

};

export default lookup;



// import autoprefixer from "autoprefixer";
// import dedent from "dedent";

// const lookup = {
//   SUGGESTIONS: [
//     "Create TODO App in React",
//     "Create Budget Tracker App",
//     "Create Gym Management Portal Dashboard",
//     "Create Quiz App on History",
//     "Create Login/Signup Screen",
//     "Create Blog Website in Next.js",
//     "Create Portfolio Website with Tailwind",
//     "Create Admin Panel Dashboard",
//   ],
//   HERO_HEADING: 'What do you want to build?',
//   HERO_DESC: 'Prompt, run, edit, and deploy full-stack web apps',
//   INPUT_PLACEHOLDER: "What do you want to build?",
//   SIGNIN_HEADING: "Welcome to InstaSite!",
//   SIGNIN_SUBHEADING:
//     "To use InstaSite, log in or create an account to start building projects instantly.",
//   SIGNIN_AGREEMENT_TEXT:
//     "By using InstaSite, you agree to our terms and consent to usage tracking for analytics.",

//     DEFAULT_FILE: {
//     '/public/index.html': {
//       code: `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <script src="https://cdn.tailwindcss.com"></script>
// </head>
// <body>
//     <div id="root"></div>
// </body>
// </html>`
//     },
//     '/App.css': {
//       code:  `
//       @tailwind base
//       @tailwind components;
//       @tailwind utilities;
//       `
//     },
//     '/tailwind.config.js': {
//       code:  `
//       /** @type {import('tailwindcss').Config} */
//       module.exports = {
//       content: [
//       "./src/**/*.{js,jsx,ts,tsx},
//       ],
//       theme: {
//       extend: {},
//       },
//       plugins: [],
//       }
//       `
//     },
//     '/postcss.config.js': {
//       code: `/** @type {import('postcss-load-config').Config} */
//       const config = {
//       plugins: {
//       tailwindcss: {},
//       },
//       };
//       export default config;
//       `
//     }
//   },
//   DEPENDANCY: {
//     "postcss": "^8",
//     "tailwindcss": "^3.4.1",
//     autoprefixer: "^10.0.0",
//     "uuid4": "^2.0.3",
//     "tailwind-merge": "^2.4.0",
//     "lucide-react": "latest",
//     "react-router-dom": "latest",
//     "firebase": "^11.1.0",
//     "@google/generative-ai":"^0.21.0",
//   }

//   // DEMO: {
//   //   projectTitle: "React ToDo App",
//   //   description: "A basic ToDo App in React with Tailwind CSS.",
//   //   generatedFiles: [
//   //     "src/App.js",
//   //     "src/components/TodoList.js",
//   //     "src/components/TodoForm.js",
//   //     "src/components/TodoItem.js",
//   //     "src/index.css",
//   //   ],
//   //   instructions: dedent`
//   //     Follow these steps to run your project locally:

//   //     1. Navigate to the project directory:
//   //        cd your-project-name

//   //     2. Install the dependencies:
//   //        npm install

//   //     3. Start the development server:
//   //        npm run dev

//   //     4. Open the app in your browser:
//   //        http://localhost:3000
//   //   `,
//   //   previewCode: dedent`
//   //     import React, { useState } from 'react';
//   //     import TodoList from './components/TodoList';

//   //     function App() {
//   //       return (
//   //         <div className="min-h-screen bg-gray-100 p-6">
//   //           <h1 className="text-3xl font-bold mb-4">My ToDo App</h1>
//   //           <TodoList />
//   //         </div>
//   //       );
//   //     }

//   //     export default App;
//   //   `,
//   // },
  
// };



// export default lookup;
