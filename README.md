# Peoject created with React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

`npm install`  
Install all dependencies.

`npm run dev`  
This command will start the development server and show the React app on localhost.

`npm run build`  
Bundles the app into static files for production inside a **dist** folder.

`npm run preview`  
Let's you preview the bundled files from the **dist** folder on the local server.

## .env variables and files

**Vite** environment variables have to start with `VITE_`.

To import a variable inside the code use syntax:  
`import.meta.env.VITE_NAME_OF_VARIABLE`

By default **git** ignores any file that ends with _.local_ in **vite** apps.  
_.env.development.local_: file used in development.  
_.env.production.local_: file used in production.
