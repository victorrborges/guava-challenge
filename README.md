# [Guava To-Do Challenge](http://guava-todo-challenge.herokuapp.com/) 

### Apresentação

Esse projeto foi feito como parte da seleção para a vaga de [Front-end Developer na Guava](https://github.com/frontendbr/vagas/issues/4380). Consiste de uma aplicação de TO-DOs implementada em React a partir deste [guia](https://www.notion.so/Sele-o-Front-End-e5e9165476604a01a6609ee51fcc7650).


### Execução

Para fazer a instalação das dependências do projeto e levantar a aplicação, basta executar:

```sh
npm install
npm start
```

# Observações

### [Cloud Firestore](https://firebase.google.com/docs/firestore)

Os dados da aplicação são salvos no Cloud Firestore. Como não há autenticação, os dados são mapeados para o usuário de acordo com o dispositivo que ele está utilizando (como recomendado pelo guia de implementação). 

Na prática, isso indica que o firebase está realizando [autenticação anônima](https://firebase.google.com/docs/auth/web/anonymous-auth?hl=pt-br). Uma das vantagens dessa abordagem é que, caso o sistema evolua (adicionando uma forma de autenticação), o usuário anônimo poderia vincular seus dados à uma conta realizando o cadastro.

### [Heroku](https://www.heroku.com/)

Foi feito um deploy simples da aplicação no Heroku, que pode ser acessada através [deste link](http://guava-todo-challenge.herokuapp.com/).

### [Styled Components](https://styled-components.com/)

A ferramenta styled-components foi utilizada na aplicação. Esta ferramenta permite a utilização de estilos ao nível de componentes na aplicação, resultando em uma hierarquia visual mais semântica (facilitando a leitura e organização do código). Além disso, algumas outras vantagens são:

- O styled-components extrai, automaticamente, o css que considera crítico para o head, trazendo melhorias para a performance da aplicação
- Geração automática de nomes de classes para os estilos (evitando erros de sobrescrita ou erros ortográficos)
- Possibilidade de trabalhar com valores dinâmicos: o estilo pode adotar diferentes comportamentos com base em propriedades passadas para o componente

### [Sweet Alert](https://sweetalert.js.org/guides/)

Essa ferramenta foi adicionada para implementar o alerta de confirmação ao deletar um to-do. Combinado com um estilo alinhado ao utilizado no resto da aplicação, ficou mais integrado ao sistema comparado ao alerta de confirmação padrão dos navegadores.