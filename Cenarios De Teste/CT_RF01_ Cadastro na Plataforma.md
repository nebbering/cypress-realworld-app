## Cenário 01: CADASTRO DE NOVO USUÁRIO.

### Caso de Teste 01: CADASTRO VÁLIDO.

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| C01-CT01 | O cadastro será realizado com sucesso. |

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| As credenciais fornecidas (First Name, Last Name, Username, Password, Confirm Password) devem ser válidas. |

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que estamos na página de SignUp do RealWorldApp              |
| **E** preenchemos "First Name, Last Name, Username, Password, Confirm Password" no campos devidos |
| **QUANDO** clicarmos no botão "SIGN UP"                             |
| **ENTÃO** seremos redirecionados para a página "SIGN IN"      |

| **Critérios de aceitação**                                      |
| :-------------------------------------------------------------- |
| O redirecionamento para a página "SIGN IN" deve ocorrer corretamente. |

---

### Caso de Teste 02: CADASTRO INVÁLIDO.

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| C01-CT02 | O cadastro falhará quando um ou mais dados necessários não forem informados. |

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| O usuário \"Admin\" deve existir no sistema. |

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que estamos na página SignUp do RealWorldApp             |
| **E** preenchemos "First Name, Last Name, Username, Password, Confirm Password (divergênte de Password)" no campos devidos|
| **QUANDO** clicarmos no botão "SIGN UP" |
| **ENTÃO** uma mensagem de crítica \"Password does not match\" será exibida abaixo do campo "Confirm Password" |

| **Critérios de aceitação**                                      |
| :-------------------------------------------------------------- |
| A mensagem de erro \"Password does not match\" deve ser exibida abaixo do campo "Confirm Password". |