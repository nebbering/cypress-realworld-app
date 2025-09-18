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
