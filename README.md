<h1 align="center" style="color: #000;">
  <img src=".github/logo.svg" alt="Logo" height="70">
</h1>

<h3 align="center">
  Proffy - Your online study platform
</h3>

<p align="center">
  <a href="https://www.linkedin.com/in/diogojhony/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Diogo%20Jhony-%239871F5"></a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/diogojhony/proffy?color=%239871F5">

  <a href="https://github.com/diogojhony/proffy/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/diogojhony/proffy?color=%239871F5"></a>

  <img alt="GitHub" src="https://img.shields.io/github/license/diogojhony/proffy?color=%239871F5">
</p>

<p align="center">
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<img alt="Layout" src=".github/banner.png">

## 🚀 Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

## 💻 Getting started

To clone and run this application, you'll need [Git](https://git-scm.com/), [Node.js v10.16](https://nodejs.org) or higher + [Yarn v1.13](https://yarnpkg.com/) or higher installed on your computer.

**Clone this project and access your folder:**
```bash
$ git clone https://github.com/diogojhony/proffy.git
```

**Follow the steps below**

### Backend

```bash
# Access the server folder
$ cd server

# Install the dependencies
$ yarn install

# Run the migrations
$ yarn knex migrate:latest

# To finish, start backend server
$ yarn dev
```

### Web

> Obs.: Before to continue, be sure to have the backend server is running

```bash
# Access the web folder
$ cd web

# Install the dependencies
$ yarn install

# Start the web client
$ yarn start
```

### Mobile

> Obs.: Before to continue, be sure to have the backend server is running

```bash
# Access the mobile folder
$ cd mobile

# Install the dependencies
$ yarn install

# Start the expo service, open Expo Client on your device and scan the QR code
$ yarn start
```

## 📝 License

This project is under the MIT license. See the [LICENSE](LICENSE.md) file for more information.

Made with ❤️ by **Diogo Jhony** 👋 [Get in touch!](www.linkedin.com/in/diogojhony)
