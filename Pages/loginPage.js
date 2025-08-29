class LoginPage {
    
    selectorsList() {
        const selectors = {
            loginInput: "[name='username']",
            passwordInput: "[name='password']",
            btnLogin: "button[type='submit']",
            wrongCredentialsMessage: "[role='alert']"
        }
        return selectors
    }

    acessLoginPage() {
        cy.visit('/signin')
    }

    loginValid(username, password) {
        cy.get(this.selectorsList().loginInput).type(username),
        cy.get(this.selectorsList().passwordInput).type(password),
        cy.get(this.selectorsList().btnLogin).click()
    }
}