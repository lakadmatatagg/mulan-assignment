# Welcome to Asrul's Assignment Repository 👋

This is the repo that I use for doing this assignment with all my heart content 😉, packed with : -
- CI/CD functionalities 🚀
- My authentic source code for your reference 👩‍💻

## Tools selection

* [![angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
* [![bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com)
* [![aws](https://img.shields.io/badge/Amazon%20EC2-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)](https://aws.amazon.com/pm/ec2)
* [![docker](https://img.shields.io/badge/Docker-0db7ed?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
* [![traefik](https://img.shields.io/badge/Traefik-24a1c1?style=for-the-badge&logo=traefikproxy&logoColor=white)](https://traefik.io/)
* [![authelia](https://img.shields.io/badge/Authelia-000?style=for-the-badge&logo=authelia&logoColor=white)](https://www.authelia.com/)

## Table of Contents

1. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Git How To](#git-how-to)
    - [Conventional Commit Syntax](#conventional-commit-syntax)
2. [Roadmap](#roadmap)
3. [Standard Project Initiation](#standard-project-initiation)
4. [License](#license)
5. [Contact](#contact)
6. [Acknowledgments](#acknowledgments)

<!-- GETTING STARTED -->
## Getting Started
To get a local copy up and running follow these simple example steps.

### Prerequisites
Before you start, make sure to update node js, npm to latest version.
* npm
  ```sh
  npm install npm@latest -g
  ```

Or if you have a problem doing so, download [node.js](https://nodejs.org/) and re-run the script again

### Installation
_Checkout the project to your local machine :_

1. Run command below to avoid long filename error in for Windows if you haven't done before
   ```sh
    git config --system core.longpaths true
    ```
2. Clone the repo
   ```sh
   git clone https://github.com/lakadmatatagg/resume.git
   ```
   * After finished, navigate to the project directory: `cd resume`
3. Create a separate branch from [main branch](https://github.com/lakadmatatagg/resume/branches)
   ```sh
   git checkout -B your_name/staging main
   ```
4. Install dependencies using following script
    ```sh
   npm ci
   ```
   * If you hit a deps error, you can run force by following script

   **Note**: This workaround will always working, so please keep in mind that this script will only run due to inevitable reason, e.g. a dependencies is depricated but a component is using this feature and the system is not break. Otherwise, please update the dependencies to latest version without force

    ```sh
   npm ci --force
   ```

### Git How To
Git is a better way to do code subversioning rather than SVN. If you familiar with git before, just skip these step and move on to 



### Conventional Commit Syntax
Conventional Commit Messages is a standardized format for writing commit messages that helps maintain consistency and clarity across projects. These messages follow a specific structure, making it easier to understand the changes introduced by each commit.

Read the explanation if you have trouble understanding those syntax.

In short, before committing, just wrote these syntax before your explanation:

1. **feat**: for FEATURE
    - This is used when introducing a new feature or functionality to the project. It signifies that the commit is adding something new to the codebase, such as a new component, module, or capability.
    - Example: `feat: Add select component extending ng-select`

2. **fix**: for BUGS FIX
    - This is utilized when addressing a bug or an issue in the codebase. It indicates that the commit is focused on resolving a problem or bug to improve the stability and reliability of the software.
    - Example: `fix: looping issues for product list`

3. **chore**: for CHORES
    - This is used for miscellaneous tasks or chores that are necessary for the project but do not fit into the categories of features, fixes, or other specific types of changes. It can include tasks like updating dependencies, cleaning up code, or refactoring without changing external behavior.
    - Example: `chore: Update dependencies`

4. **docs**: for DOCUMENTATION
    - This is employed when making changes or additions to documentation. It signifies that the commit is updating or creating documentation, such as README files, API documentation, or inline code comments, to improve clarity and understanding for developers and users.
    - Example: `docs: Updated README`

5. **style**: for STYLING
    - This is used for changes related to code formatting, styling, or aesthetics. It indicates that the commit is purely cosmetic and does not affect the functionality or behavior of the code but improves its readability or adherence to style guidelines.
    - Example: `style: Format code according to style guide`

6. **refactor**: for REFRACTOR
    - This is utilized when restructuring or reorganizing existing code without changing its external behavior. It signifies that the commit is improving the structure, design, or maintainability of the codebase without adding new features or fixing bugs.
    - Example: `refactor: Reorganize folder structure`

7. **perf**: for PERFORMANCE
    - This is employed when optimizing code or improving performance. It indicates that the commit is focused on enhancing the efficiency, speed, or resource usage of the software, such as by optimizing algorithms, database queries, or resource management.
    - Example: `perf: Optimize database queries for faster response times`
   


<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).


## Standard Project Initiation

Init Angular

```bash
  ng new [project name]
```

Add Basic Packages

```bash
  ng add @ng-bootstrap/ng-bootstrap
```
```bash
  ng add ngx-bootstrap
```  
```bash
  ng add ngx-toastr
```  
```bash
  npm install release-it @release-it/conventional-changelog @commitlint/config-conventional @commitlint/cli
```  
```bash
  npm install husky
```  


If github token already added to local environment, skip this step. This is important for automatic release in github page.

1. Go to your profile setting. Note: not repo setting
2. Navigate to Developer Setting
3. Get yourself a key, for release-it we just need to tick repo.
4. Copy the key to somewhere (it wont be shown again), paste it in environment variables (for windows), create new and name it GITHUB_TOKEN
5. Restart your computer, open Powershell (cmd will not work), run echo $Env:GITHUB_TOKEN check
6. If the inserted key shows then you good to go, otherwise the automatic release will not work on github

Add below release-it config in package.json, change accordingly

```json
  "release-it": {
    "git": {
      "commitMessage": "chore: release v${version}"
    },
    "github": {
      "release": true
    },
    "npm": {
      "publish": false
    },
    "plugins": {
      "@release-it/conventional-changelog": {
        "infile": "CHANGELOG.md",
        "preset": {
          "name": "conventionalcommits",
          "types": [
            {
              "type": "feat",
              "section": "Features"
            },
            {
              "type": "fix",
              "section": "Bug Fixes"
            },
            {
              "type": "chore",
              "hidden": true
            },
            {
              "type": "docs",
              "hidden": true
            },
            {
              "type": "style",
              "hidden": "Cosmetics Changes"
            },
            {
              "type": "refactor",
              "hidden": true
            },
            {
              "type": "performance",
              "section": "Performance Improvements"
            }
          ]
        }
      }
    }
  }
```

## License
Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact
Asrul Aiman bin Daod

[![gmail](https://img.shields.io/badge/gmail-BB001B?style=for-the-badge&logo=gmail&logoColor=white)](mailto:asrulaimandaod@gmail.com)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/asrul-aiman-daod-9474601b2/)

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)