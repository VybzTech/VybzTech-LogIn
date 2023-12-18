# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

<!-- OTF: Stupid Meeting (Regular, Eroded, & Outlines)
By Sharkshock 2018 all rights reserved
Designed by Dennis Ludlow
dennis@sharkshock.net


Thank you for your support!

visit www.sharkshock.net for more and take a bite out of BORING design!

tags: retail, kids, children, loose, sans, sans serif, messy, scribble, eroded, outline, block, sketchy, office, publishing, books, logo, magazine, freehand, handwriting, European, French, German, Portuguese, Latin, Carson, line, weight, stroke, art, artistic, distorted, distressed, graphic, design, style, comic, cartoon, funny, sloppy, messy

NOTE: Due to glyph complexity of the Eroded version PC users may experience slowdown if viewed in Windows Font Viewer. Please right click file and choose install.  -->