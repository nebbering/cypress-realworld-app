## Cenário 03: TRANSAÇÕES

### Caso de Teste 01: TRANSAÇÃO COM SALDO SUFICIENTE

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| C03-CT01 | Fazer transação com saldo suficiente para um contato. |

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| O usuário deve estar logado, ter saldo suficiente na carteira, ter contatos salvos. |

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que estamos na página principal do RealWorldApp              |
| **E** clicamos no botão "$ NEW", selecionamos o contato e Preenchemos os campos "Amount" e "Add a note" com "50" e "Teste" |
| **QUANDO** clicamos no botão "PAY" |
| **ENTÃO** deve aparecer na tela uma mensagem de confirmação com o texto "Transaction Submitted!" |

| **Critérios de aceitação**                                      |
| :-------------------------------------------------------------- |
| A operação deve obter sucesso |

---

### Caso de Teste 02: LOGIN INVÁLIDO

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| C03-CT02 | Tentar fazer transação com saldo INSUFICIENTE para um contato. |

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| O usuário deve estar logado, NÃO ter saldo suficiente na carteira, ter contatos salvos. |

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que estamos na página principal do RealWorldApp              |
| **E** verificamos se o campo "Accpunt Balance" tem valor maior que "$0.00" |
| **QUANDO** clicamos no botão "$ NEW" |
| **ENTÃO** Será exibido uma mensagem de saldo insuficiente. |

| **Critérios de aceitação**                                      |
| :-------------------------------------------------------------- |
| A operação deve ser abortada |

| **Critérios de aceitação**                                      |
| :-------------------------------------------------------------- |
| A operação deve ser abortada |
