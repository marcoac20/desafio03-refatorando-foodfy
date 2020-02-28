# [Curso LaunchBase # Desafio 3: Refatorando Foodfy](https://github.com/Rocketseat/bootcamp-launchbase-desafios-03/blob/master/desafios/03-refatorando-foodfy.md)



## Sobre o desafio 
Nesse desafio você irá refatorar, ou seja, reescrever algumas partes, do seu código do desafio anterior, o Foodfy.
Até esse módulo não conhecíamos sobre back-end, ou seja, todos dados da nossa página ficavam no próprio front-end (arquivos HTML).
Agora que conhecemos sobre Node.js vamos tornar a exibição dos dados mais dinâmica 🚀

### Instalação
Para executar, abra o terminal na pasta do repositório e digite o comando:
`npm install`

Após a intalação, execute o comando:
`npm start`

Abra o navegador e digite no endereço [localhost:5000](localhost:5000)


### Regras
Crie um arquivo data.js na raiz do seu projeto.

![data](https://user-images.githubusercontent.com/57117820/75499421-af617900-59a8-11ea-9977-110ee6d2db47.PNG)

#### Alterações no projeto
Use os dados das receitas contidos no arquivo data.js para a página de listagem de receitas e para a home.
Na home, liste as 6 primeiras receitas, não é necessário agora sabermos sobre as receitas mais acessadas.
Na listagem, liste todas receitas do arquivo.
Obs.: Você precisará converter seu projeto em um projeto Node.js usando Nunjucks para mostrar cada página.

![nodejs](https://user-images.githubusercontent.com/57117820/75500055-b25d6900-59aa-11ea-90dc-297b2122a110.PNG)

![home](https://user-images.githubusercontent.com/57117820/75500057-b5585980-59aa-11ea-8e5d-5f12f63265c7.PNG)

#### Detalhe da receita
*Ao clicar em uma receita agora o usuário deve ser redirecionado para uma nova página contendo todas informações da receita como ingredientes, modo de preparo e informações adicionais (todas essas informações estão contidas no arquivo data.js).
*Na página de listagem não é mais necessário abrir o modal como tínhamos no desafio anterior do Foodfy.

![Capturar3](https://user-images.githubusercontent.com/57117820/75500417-a3c38180-59ab-11ea-81e4-4930044fe710.PNG)

#### Ação de mostrar/esconder
Dentro da página do detalhe da receita, em cada seção "Ingredientes", "Modo de preparo" e "Informações adicionais" há um botão Mostrar ou Esconder que ao ser clicado deve mostrar ou esconder o texto abaixo do título baseado em seu estado de visibilidade.

![Capturar4](https://user-images.githubusercontent.com/57117820/75500580-2b10f500-59ac-11ea-8114-941da0e3316a.PNG)
