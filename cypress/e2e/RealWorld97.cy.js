import LoginPage from '../Pages/loginPage.js'
import dataUser from '../fixtures/dataUser.json'

const loginPage = new LoginPage()

describe('Registro de novo usuário com sucesso', () => {
    beforeEach(() => {
        loginPage.acessLoginPage()
    })

    it.only('Deve registrar um novo usuário com informações válidas', () => {
    
        loginPage.acessSignUp()

    })

})

describe('Login com sucesso', () => {
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