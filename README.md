🧮 Calculadora de IMC

Uma calculadora de IMC simples, moderna e responsiva, criada com HTML, CSS e JavaScript (DOM).
O usuário insere peso e altura, e o sistema calcula o Índice de Massa Corporal, exibindo também a classificação completa, incluindo os graus de obesidade.

🚀 Funcionalidades

✔ Cálculo automático do IMC
✔ Classificação completa:

Abaixo do peso

Peso normal

Sobrepeso

Obesidade Grau I

Obesidade Grau II

Obesidade Grau III (grave)
✔ Cores dinâmicas conforme o resultado
✔ Layout moderno e responsivo
✔ Animações sutis para melhor experiência
✔ Interface limpa utilizando DOM para interação

🖼 Prévia do Projeto

(Caso você tenha uma imagem do projeto, coloque aqui depois assim:)

![Prévia do Projeto](./Captura%20de%20tela%202025-11-28%20004734.png)

📂 Estrutura dos Arquivos
📁 projeto-imc
│-- index.html
│-- style.css
│-- script.js
│-- README.md

🛠 Tecnologias Utilizadas
Tecnologia	Uso
HTML5	Estrutura do projeto
CSS3	Layout, responsividade e animações
JavaScript (DOM)	Interação, cálculo e exibição dinâmica
Google Fonts (Poppins)	Identidade visual moderna
📘 Como funciona o cálculo

A fórmula utilizada:

IMC = peso / (altura * altura)


Exemplo:

Peso: 70 kg
Altura: 1.70 m

IMC = 70 / (1.70²)
IMC = 24.22

📊 Tabela de Classificação
IMC	Classificação	Cor exibida
Menor que 18.5	Abaixo do peso	🟡
18.5 a 24.9	Peso normal	🟢
25.0 a 29.9	Sobrepeso	🟡
30.0 a 34.9	Obesidade Grau I	🔴
35.0 a 39.9	Obesidade Grau II	🔴
40+	Obesidade Grau III	🔴
📜 Código JavaScript (DOM) – Resumo

Captura valores dos inputs usando document.querySelector.

Verifica se os dados estão preenchidos.

Realiza o cálculo do IMC.

Mostra mensagem dinâmica com cor correspondente.

Atualiza o HTML usando innerHTML.

Altera classes CSS para mudar cores automaticamente.

▶ Como usar

Digite o peso em kg.

Digite a altura em metros.

Clique em Calcular.

O sistema exibirá:

Seu IMC

A classificação correspondente

Uma cor indicando a situação