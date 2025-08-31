# Cypress Projects
All Cypress Automation Web Projects

Cypress Commands to run the Automation Code
-------------------------------------------------------------------------------
Step 1) Open VS(Visual Studio) Code terminal and run command = "npm init -y"

Step 2) Install cypress = "npm install cypress" 

Step 3) Check cypress version = "npx cypress -v"

Step 4) Check cypress verify = "npx cypress verify"

Step 5) Open cypress = "npx cypress open"

Cypress Other Commands 
------------------------------------------------------------------------------

Run a Single File 
npx cypress run --spec "cypress/e2e/my-spec.cy.js"

Run Multiple or Specific Files

# Run all files matching a pattern
npx cypress run --spec "cypress/e2e/auth/*.cy.js"

# Run multiple files using comma separation
npx cypress run --spec "cypress/e2e/login.cy.js,cypress/e2e/register.cy.js"

Run in a Specific Browser
npx cypress run --browser chrome

Run in Headless Browser
npx cypress run --headless

# to run a specific spec in headless Chrome
npx cypress run --spec "cypress/e2e/my-spec.cy.js" --browser chrome --headless

Command	Description
npx cypress run --spec "file"	Run a single file 
npx cypress run --spec "pattern/*.js"	Run matching files 
npx cypress run --spec "file1,file2"	Run multiple specific files 
npx cypress run --browser chrome	Run in Chrome browser 
npx cypress run --headless	Headless mode 

Environment Setup
-----------------------
1) Download & install nodejs  

2) Download & install visual studio code (VSCode)

3) create a new folder for project & open in VSCode

4) open cmd/terminal then execute below command(this will create package.json)
  npm -i init     

5) to install cypress 
  npm install cypress --save -dev

6) start cypress
 npx cypress open     (or)
 node_modules/.bin/cypress open
