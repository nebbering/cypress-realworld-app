import LoginPage from '../Pages/loginPage.js'
import DashBoardPage from '../Pages/dashBoardPage.js'
import dataUser from '../fixtures/dataUser.json'

const loginPage = new LoginPage()
const dashBoardPage = new DashBoardPage()

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

    it('C02-CT02: Login Inválido', () => {
        
        loginPage.LoginInvalid(dataUser.userInvalid.userName, dataUser.userInvalid.userPassword)

    })

})

describe('C03: ENVIAR DINHEIRO', () => {
    beforeEach(() => {
        loginPage.acessLoginPage()
    })

    it('C03-CT01: Enviar Dinheiro com Saldo Suficiente', () => {
        
        loginPage.loginValid(dataUser.userValid.userName, dataUser.userValid.userPassword),
        dashBoardPage.newTransaction()

    })

    it.only('C03-CT02: Enviar Dinheiro com Saldo Insuficiente', () => {
        
        loginPage.loginValid(dataUser.userValid.userName, dataUser.userValid.userPassword),
        dashBoardPage.newTransactionError()

    })

})