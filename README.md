# React + TypeScript + Vite

This is a static landing page, created with react typescript and tailwind.

## Setup

1.Create vite project

```
npm create vite
```

2.Install dependencies

```
@heroicons/react
framer-motion
react-anchor-link-smooth-scroll
```

3.Install dev dependencies

```
npm i -D @types/react-anchor-link-smooth-scroll
npm i -D @types/node
```

4.Config paths
4.1 Do not use relative import: vite.config.ts

```
resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
```

4.2 Config paths: tsconfig.json

```
"compilerOptions": {
  ...
"paths": {
      "@/*":["./src/*"]
    }
},
...
```

5.Install and config tailwind, prettier plugins for tailwind

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

6.This app's youtube and github

```
https://www.youtube.com/watch?v=I2NNxr3WPDo
https://github.com/ed-roh/gym-typescript/tree/master
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
