import LoginPage from '../Pages/loginPage.js'
import dataUser from '../fixtures/dataUser.json'

const loginPage = new LoginPage()

describe('C01: CADASTRO DE NOVO USUÁRIO', () => {
    beforeEach(() => {
        loginPage.acessLoginPage()
    })

    it('C01-CT01: CADASTRO VÁLIDO', () => {

        loginPage.acessSignUpPage()
        loginPage.acessSignUpValid()

    })
    it('C01-CT02: CADASTRO INVÁLIDO', () => {

        loginPage.acessSignUpPage()
        loginPage.acessSignUpInvalid()

    })

})

describe('Feature - LOGIN', () => {
    beforeEach(() => {
        loginPage.acessLoginPage()
    })

    it('Deve fazer login com um usuário válido', () => {
        
        loginPage.loginValid(dataUser.userValid.userName, dataUser.userValid.userPassword)

    })

})

describe('Tentar fazer login com credenciais inválidas', () => {
    beforeEach(() => {
        loginPage.acessLoginPage()
    })

    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
        
        loginPage.LoginInvalid(dataUser.userInvalid.userName, dataUser.userInvalid.userPassword)

    })

})