# 🚀 Cypress Projects

All Cypress Automation Web Projects.

---

## 📦 Environment Setup

1. **Download & Install:**
   - [Node.js](https://nodejs.org/)
   - [Visual Studio Code (VSCode)](https://code.visualstudio.com/)

2. **Create Your Project Folder:**
   - Open the folder in VSCode.
   - Open the terminal and initialize a Node.js project:

     ```bash
     npm init -y
     ```

3. **Install Cypress:**

   ```bash
    npm install cypress --save-dev
  ```

4. **Verify Cypress Installation:**

  ```bash
    npx cypress -v          # Check Cypress version
    npx cypress verify      # Verify installation
  ```  

5. **Open Cypress with command line:**

  ```bash  
    npx cypress open
  ```

6. **Open Cypress with GUI:**
  - Open the folder node_modules/.bin/cypress open

Cypress Other Commands 

---

1. **Run a Single File** 
  ```bash
    npx cypress run --spec "cypress/e2e/my-spec.cy.js"
  ```

2. **Run Multiple or Specific Files:**
  - Run all files matching a pattern
  ```bash
    npx cypress run --spec "cypress/e2e/auth/*.cy.js"
  ```
  - Run multiple files using comma separation
  ```bash
    npx cypress run --spec "cypress/e2e/login.cy.js,cypress/e2e/register.cy.js"
  ```  

3. **Run in a Specific Browser**
  ```bash
    npx cypress run --browser chrome
  ```

4. **Run in Headless Browser**
  ```bash
    npx cypress run --headless
  ```

5. **to run a specific spec in headless Chrome**
  ```bash
  npx cypress run --spec "cypress/e2e/my-spec.cy.js" --browser chrome --headless
  ```

Command	Description
| Command                                 | Description                      |
| --------------------------------------- | -------------------------------- |
| `npx cypress run --spec "file"`         | Run a single test file           |
| `npx cypress run --spec "pattern/*.js"` | Run multiple files using pattern |
| `npx cypress run --spec "file1,file2"`  | Run multiple specific files      |
| `npx cypress run --browser chrome`      | Run tests in Chrome browser      |
| `npx cypress run --headless`            | Run tests in headless mode       |

