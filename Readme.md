# Github Search Karlo Biscan

## Table of contents
- [Introduction](#introduction)
- [Technologies used](#technologies-used)
    - [Webpack](#webpack)
    - [Babel](#babel)
    - [Node Version Manager](#node-version-manager)
    - [React](#react)
    - [Next.JS](#next-js)
    - [Apollo](#apollo-client)
- [Code hygiene](#code-hygiene)
    - [ESLint](#eslint)
    - [Stylelint](#stylelint)
    - [EditorConfig](#editorconfig)
- [Getting started](#getting-started)
    - [Requirements](#requirements)
        - [Environment](#environment)
    - [Environment setup](#environment-setup)
        - [Mac](#mac)
        - [OS agnostic](#os-agnostic)
    - [Project setup](#project-setup)
        - [Clone the repository](#clone-the-repository)
        - [Install dependencies](#install-dependencies)
        - [Use scripts to run or build the project](#use-scripts-to-run-or-build-the-project)
        - [Insert Personal Access token](#insert-personal-access-token)

---

## Introduction
This is Github search app that uses Githubs GraphQL API. The main purpose of the app is to do basic search of registered users and their repositories.
 
---

## Technologies used
### Webpack
[Webpack](https://webpack.js.org/) is an open-source JavaScript module bundler. It is a module bundler primarily for JavaScript, but it can transform front-end assets like HTML, CSS, and images if the corresponding loaders are included.[7] Webpack takes modules with dependencies and generates static assets representing those modules.

Webpack takes the dependencies and generates a dependency graph allowing us to use a modular approach for our application development purposes.

[Node.js](https://nodejs.org/en/) is required for using Webpack.


### Node Version Manager
[Node Version Manager](https://github.com/nvm-sh/nvm), or NVM for short, is a bash script and it lets us manage multiple versions of Node.js and even split them per directory.
A version manager helps to test applications under different versions of the related software.

Active Node versions are declared within [`.nvmrc`](.nvmrc) files.

### React
[React](https://reactjs.org/) React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

---
### Next JS
[Next.JS](https://nextjs.org/) With Next.js, server rendering React applications has never been easier, no matter where your data is coming from.

---

### Apollo Client
[Apollo](https://www.apollographql.com/docs/react/) Apollo Client is a complete state management library for JavaScript apps. Simply write a GraphQL query, and Apollo Client will take care of requesting and caching your data, as well as updating your UI.

Fetching data with Apollo Client guides you to structure your code in a predictable, declarative way consistent with modern React best practices. With Apollo, you can build high-quality features faster without the hassle of writing data plumbing boilerplate.

---

## Code hygiene
### ESLint
[ESLint](https://github.com/eslint/eslint) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. In many ways, it is similar to JSLint and JSHint with a few exceptions:

It is highyl recommend that you setup your IDE's and code editors to automatically consume ESLint.

### Stylelint
Just like ESLint takes care of our JavaScript, [Stylelint](https://github.com/stylelint/stylelint) is another mighty, modern linter that helps us avoid errors and enforce conventions in our styles.

It favours flexibility over strictness for things like multi-line lists and single-line rulesets, and tries to avoid potentially divisive rules.

To see the rules that this config uses, please read the [config itself](.stylelintrc).
    
### EditorConfig
EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. EditorConfig files are easily readable and they work nicely with version control systems.

## Getting started

#### Environment

#### Mac
**Terminal**
Terminal already comes with  the OS.

**Node.js**
Install Node.js for Mac by going to the [download page](https://nodejs.org/en/). Download the LTS release `.pkg` file somewhere on your system, and then run it and follow the instructions.

**NPM**
You will get NPM by default when you install Node.js. 

**Git**
The easiest is way install Git is to install the Xcode Command Line Tools. On Mavericks (10.9) or above you can do this simply by trying to run git from the Terminal the very first time.
`git --version`

If you don’t have it installed already, it will prompt you to install it.

You can also install it as part of the GitHub for macOS install. Their GUI Git tool has an option to install command line tools as well. You can download that tool from the GitHub for macOS website, at https://desktop.github.com.

#### OS agnostic
**Github access**
Well since you are reading this you probably have access to Github.

### Project setup
#### Clone the repository

`git clone REPOSITORY`

#### Install dependencies
`cd REPOSITORY && npm install`

#### Use scripts to run or build the project
`dev` - Runs local development environment.
`build` - Builds the app for production.
`start` - Runs the server, used when wanting to make a custom server for testing custom routs.

#### Insert Personal Access token
When you run the app on `localhost:3000` the app will redirect you to `/login` route where you can enter your token, once you enter the token the app will go to the homepage where you can start searching for users.


---
