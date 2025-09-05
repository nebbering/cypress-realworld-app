import LoginPage from '../Pages/loginPage.js'
import dataUser from '../fixtures/dataUser.json'

const loginPage = new LoginPage()

describe('C01: REGISTRO DE USUÁRIO', () => {
    beforeEach(() => {
        loginPage.acessLoginPage()
    })

    it('C01-CT01: REGISTRO VÁLIDO', () => {

        loginPage.acessSignUpPage()
        loginPage.acessSignUpValid()

    })
    it('C01-CT02: REGISTRO INVÁLIDO', () => {

        loginPage.acessSignUpPage()
        loginPage.acessSignUpInvalid()

    })

})

describe('C02: LOGIN', () => {
    beforeEach(() => {
        loginPage.acessLoginPage()
    })

    it('C02-CT01: Login com Sucesso', () => {
        
        loginPage.loginValid(dataUser.userValid.userName, dataUser.userValid.userPassword)

    })

    it.only('C02-CT02: Login Inválido', () => {
        
        loginPage.LoginInvalid(dataUser.userInvalid.userName, dataUser.userInvalid.userPassword)

    })

})