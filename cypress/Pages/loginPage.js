class LoginPage {
    
    selectorsList() {
        const selectors = {
            firstNameInput: "[name='firstName']",
            lastNameInput: "[name='lastName']",
            nameInput: "[name='username']",
            userNameInput: "[name='username']",
            passwordInput: "[name='password']",
            confirmPasswordInput: "[name='confirmPassword']",
            wrongCredentialsMessage: "[role='alert']",
            btnLogin: "button[type='submit']",
            btnSignUp: "[data-test='signup-submit']",
            btnCreateSignUp: "a[href='/signup']"
        }
        return selectors
    }

    acessLoginPage() {
        cy.visit('/signin')
    }

    acessSignUpPage() {
        cy.get(this.selectorsList().btnCreateSignUp).click()
        cy.url().should('include', '/signup')
    }

    acessSignUpValid() {

        cy.get(this.selectorsList().firstNameInput).type('Kyouma'),
        cy.get(this.selectorsList().lastNameInput).type('Rintarou'),
        cy.get(this.selectorsList().userNameInput).type('kyouma97'),
        cy.get(this.selectorsList().passwordInput).type('admin123'),
        cy.get(this.selectorsList().confirmPasswordInput).type('admin123'),
        cy.get(this.selectorsList().btnSignUp).click()
        
        //cy.url().should('include', '/signin')
    }

    acessSignUpInvalid() {

        cy.get(this.selectorsList().firstNameInput).type('Kyouma'),
        cy.get(this.selectorsList().lastNameInput).type('Rintarou'),
        cy.get(this.selectorsList().userNameInput).type('kyouma97'),
        cy.get(this.selectorsList().passwordInput).type('admin123'),
        cy.get(this.selectorsList().confirmPasswordInput).type('admin12'),
        cy.get(this.selectorsList().btnSignUp).click()
        
        //cy.url().should('include', '/signin')
    }

    loginValid(username, password) {
        cy.get(this.selectorsList().loginInput).type(username),
        cy.get(this.selectorsList().passwordInput).type(password),
        cy.get(this.selectorsList().btnLogin).click()
    }
    
    LoginInvalid(username, password) {
        cy.get(this.selectorsList().loginInput).type(username),
        cy.get(this.selectorsList().passwordInput).type(password),
        cy.get(this.selectorsList().btnLogin).click(),
        cy.get(this.selectorsList().wrongCredentialsMessage).should('be.visible')
    }

}

export default LoginPage