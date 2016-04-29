# Ang2

This is a barebone Angular2 app setup for people who prefer step by step documented seed project rather than pre-defined ones provided by great programmers

Steps followed to setup this project in the current state:

1.  Setup a new repository on github
2.  Clone repo into local folder
3.  Navigate to directory and run command: "npm init"
4.  Copy tsconfig.json from "https://angular.io/docs/ts/latest/quickstart.html#!#tsconfig"
5.  Copy typings.json from "https://angular.io/docs/ts/latest/quickstart.html#!#tsconfig"
6.  Run command: "npm install browser-sync -g"
7.  Update package.json with scripts,dependencies, dev-dependencies
8.  Run command: "npm install"
9.  Update main.ts to import from app.ts
10. Create folder structure to store components
11. Add navbar component in masterpage folder
12. Create masterpage.html and call navbar element from it.
13. Add masterpage class as directive to app.ts
14. Add navbar class as directive to masterpage.ts
15. Update tsconfig.json compiler options with following: "outDir": "build" (remove currently existing .js, .map files in app folder and compiler tsc again)
16. Edit index.html : Change definition of packages from app to build to load transpiled js files (Read more -> http://stackoverflow.com/questions/34878830/cannot-import-a-custom-component-angular2-and-typescript)
17. npm install materialize-css --save to add into dependencies.
18. Update index.html file to add links for materializecss.css file and js file
19. Update navbar.html with materialize mobile-responsive layout.
20. Added modal to navbar on click of button in reportCatalog.html
21. Run command: "npm install --save ng2-material" for using modals
22. Run command: "npm install es6-promise --save-dev for meeting ng2-material dependency
23. Run command: "npm install angular2-materialize --save" to use materialize modals instead of ng2-material
24. Updated index.html System.Config -> Added packages definition and their corresponding mappings
25. Updated main.ts with import for angular2-materialize
26. 