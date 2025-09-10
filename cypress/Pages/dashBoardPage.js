class dashBoardPage {
    
    selectorsList() {
        const selectors = {
            newTransaction: "nav-top-new-transaction",
            clickContact: "user-list-item-uBmeaz5pX",
            inputValueAmount: "[name='amount']",
            inputNote: "[name='description']",
            btnPay: "[data-test='transaction-create-submit-payment']",
            
            confirmPasswordInput: "[name='confirmPassword']",
            wrongCredentialsMessage: "[role='alert']",
            btnLogin: "button[type='submit']",
            btnSignUp: "[data-test='signup-submit']",
            btnCreateSignUp: "a[href='/signup']"
        }
        return selectors
    }
    
    LoginInvalid(username, password) {
        cy.get(this.selectorsList().userNameInput).type(username),
        cy.get(this.selectorsList().passwordInput).type(password),
        cy.get(this.selectorsList().btnLogin).click(),
        cy.get(this.selectorsList().wrongCredentialsMessage).should('be.visible'),
        cy.url().should('include', '/signin')
    }

}

export default dashBoardPage