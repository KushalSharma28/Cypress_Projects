import register from '../pages/register.cy';
import login from '../pages/login.cy';
import navigatehomepage from '../pages/navigatehomepage.cy';

describe('Tricentis Demo Test Suite', () => {
    const register = new register();
    const login = new login();

  it('Registration Flow', () => {
        navigation.visit();
        
        // Navigate to Register and register user
        navigation.clickRegister();
        register.registerUser ('Kushal', 'Sharma', 'kushalsharmatester@gmail.com', 'kushal@123', 'kushal@123');
        
        // Navigate to Login and login user
        navigation.visit(); // revisit home page before login
        navigation.clickLogin();
        login.login('kushalsharmatester@gmail.com', 'kushal@123');
        
        // Logout
        cy.get('.ico-logout').click();

    // cy.visit('https://demowebshop.tricentis.com');
    // RegisterPage.navigate();
    // RegisterPage.fillForm({
    //   firstName: 'Kushal',
    //   lastName: 'Sharma',
    //   email: 'kushalsharmatester@gmail.com',
    //   password: 'kushal@123'
    });
    // Continue with LoginPage and more actions
  });