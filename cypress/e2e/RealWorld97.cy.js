import LoginPage from '../Pages/loginPage.js'
import dataUser from '../fixtures/dataUser.json'

const loginPage = new LoginPage()

describe('Testes de login', () => {
    beforeEach(() => {
        loginPage.acessLoginPage()
    })

    it('Login com sucesso', () => {
        
        loginPage.loginValid(dataUser.userValid.userName, dataUser.userValid.userPassword)

    })

})