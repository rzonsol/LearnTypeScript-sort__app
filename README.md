# LearnTypeScript-sort\_\_app

## basic setup

- tsc --init -> created tsconfig.json
- in tsconfig set up
  - "outDir": "./build"
  - "rootDir": "./src"

## compile

- tsc -> compile ts files from src folder to build
- tsc -w -> watch and automatic compile all changed files
- node build/index.js -> build and run code in index.js file
- npm init -y -> generate package.json file
- npm install nodemon concurrently -> instal module
- in package.json in section scripts we add
  - "start:build": "tsc -w"
  - "start:run": "nodemon build/index.js"
  - "start": "concurrently npm:start:\*"
- npm start -> run tsc - w and nodemon build/index.js and watch for changes
