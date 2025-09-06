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

### Caso de Teste 02: CADASTRO INVÁLIDO

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

---

## Cenário 02: LOGIN

### Caso de Teste 01: LOGIN COM SUCESSO

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| C02-CT01 | O login será realizado com sucesso com usuário e senha válidos. |

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| As credenciais fornecidas (Username e Password) devem existir no sistema. |

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que estamos na página de SignIn do RealWorldApp              |
| **E** preenchemos os campos |
| *Username* => okarin97 |
| *Password* => admin123 |
| **QUANDO** clicamos no botão "SIGN IN" |
| **ENTÃO** a URL deve conter "/home" |

| **Critérios de aceitação**                                      |
| :-------------------------------------------------------------- |
| O redirecionamento para a URL "/home" deve ocorrer corretamente. |

---

### Caso de Teste 02: LOGIN INVÁLIDO

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| C02-CT02 | Falha no login por credenciais inválidas. |

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| As credenciais fornecidas (Username e Password) devem existir no sistema. O password informado deve ser diferente do existente. |

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que estamos na página de SignIn do RealWorldApp              |
| **E** preenchemos os campos |
| *Username* => okarin97 |
| *Password* => 123invalido |
| **QUANDO** clicamos no botão "SIGN IN" |
| **ENTÃO** uma mensagem de crítica "Username or password is invalid" deve ser exibida no topo da página |

| **Critérios de aceitação**                                      |
| :-------------------------------------------------------------- |
| Uma mensagem de crítica "Username or password is invalid" deve ser exibida no topo da página. |
