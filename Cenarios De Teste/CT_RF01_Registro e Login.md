## Cenário 01: REGISTRO DE USUÁRIO

### Caso de Teste 01: REGISTRO VÁLIDO

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| C01-CT01 | O registro será realizado com sucesso. |

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| As credenciais fornecidas (First Name, Last Name, Username, Password, Confirm Password) devem ser válidas. |

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que estamos na página de SignUp do RealWorldApp              |
| **E** preenchemos os campos |
| *First Name* => Kyouma |
| *Last Name* => Rintarou |
| *Username* => okarin97 |
| *Password* => admin123 |
| *Confirm Password* => admin123 |
| **QUANDO** clicamos no botão "SIGN UP" |
| **ENTÃO** a URL deve conter "/signin" |

| **Critérios de aceitação**                                      |
| :-------------------------------------------------------------- |
| O redirecionamento para a URL "/signin" deve ocorrer corretamente. |

---

### Caso de Teste 02: CADASTRO INVÁLIDO.

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| C01-CT02 | O cadastro falhará e apresentará mensagem de erro quando um ou mais dados necessários não forem informados. |

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| As credenciais fornecidas (First Name, Last Name, Username, Password) devem estar corretamente preenchidas, mas o campo |
| ‘Confirm Password’ deve estar inválido/diferente do campo Password. |

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que estamos na página de SignUp do RealWorldApp          |
| **E**  preenchemos todos os campos, com excessão do campo ‘Confirm Password’ |
| **QUANDO** clicarmos no botão "SIGN UP" |
| **ENTÃO** uma mensagem de crítica \"Password does not match\" deve ser exibida abaixo do campo ‘Confirm Password’ |

| **Critérios de aceitação**                                      |
| :-------------------------------------------------------------- |
| A mensagem de erro \"Password does not match\" deve ser exibida abaixo do campo ‘Confirm Password’. |