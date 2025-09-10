class dashBoardPage {
    
    selectorsList() {
        const selectors = {
            balanceAmount: "[data-test='sidenav-user-balance']",
            clickContact: "[data-test='user-list-item-uBmeaz5pX']",
            inputValueAmount: "[name='amount']",
            inputNote: "[placeholder='Add a note']",
            btnNewTransaction: "[data-test='nav-top-new-transaction']",
            btnPay: "[data-test='transaction-create-submit-payment']"            

        }
        return selectors
    }
    
    newTransaction() {
        cy.get(this.selectorsList().btnNewTransaction).click()
        cy.get(this.selectorsList().clickContact).click()
        cy.get(this.selectorsList().inputValueAmount).type('50')
        cy.get(this.selectorsList().inputNote).type('Dinheiro para o café')
        cy.get(this.selectorsList().btnPay).click()
        cy.contains('Transaction Submitted!').should('be.visible')
        
    }
}

export default dashBoardPage