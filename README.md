# Projeto Agenda de Contatos

> Uma aplicação web full-stack para gerenciamento de contatos, desenvolvida com Node.js, Express, MongoDB e EJS.

Este projeto é uma agenda de contatos online que permite aos usuários se registrarem, fazerem login e gerenciarem sua lista de contatos pessoais de forma segura. A aplicação foi construída seguindo as melhores práticas de desenvolvimento web, incluindo o padrão MVC (Model-View-Controller), middlewares de segurança e validação de dados no front-end e no back-end.

---

## ✨ Principais Funcionalidades

-   **Autenticação de Usuários:** Sistema completo de registro e login com sessões persistentes.
-   **Segurança:** Implementação de proteção contra ataques CSRF (Cross-Site Request Forgery) e uso do Helmet.js para definir cabeçalhos de segurança HTTP.
-   **Gerenciamento de Contatos (CRUD):** Usuários autenticados podem criar, visualizar, editar e deletar seus próprios contatos.
-   **Validação de Formulários:**
-   **Front-end:** Validação em tempo real com JavaScript puro para dar feedback instantâneo ao usuário (ex: formato de e-mail, complexidade da senha).
-   **Back-end:** Validação robusta no servidor para garantir a integridade dos dados antes de salvá-los no banco.
-   **Banco de Dados NoSQL:** Utilização do MongoDB com Mongoose para modelagem e persistência dos dados.
-   **Front-end Moderno:** As views são renderizadas com EJS e o front-end é empacotado com Webpack e Babel para compatibilidade com navegadores mais antigos.

---

## 💻 Tecnologias Utilizadas

-   **Back-end:** Node.js, Express.js
-   **Banco de Dados:** MongoDB com Mongoose ODM
-   **Front-end:** EJS (Embedded JavaScript templates), JavaScript (ES6+), Webpack, Babel
-   **Segurança:** Helmet.js, csurf
-   **Sessões:** express-session, connect-mongo
-   **Validação:** validator.js

---

## 🚀 Instalação e Execução

Para rodar este projeto em sua máquina local, siga os passos abaixo.

**1. Pré-requisitos**
-   [Node.js](https://nodejs.org/en/) (versão 14 ou superior)
-   [MongoDB](https://www.mongodb.com/try/download/community) (servidor rodando localmente ou uma string de conexão para um serviço como o MongoDB Atlas)
-   npm (geralmente instalado com o Node.js)

**2. Clone o Repositório**
```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd <NOME_DA_PASTA_DO_PROJETO> 
```

**3. Instale as Dependências**
Execute o comando abaixo para instalar todos os pacotes listados no package.json:
code
```bash
npm install
```

**4. Configure as Variáveis de Ambiente**
Este projeto usa um arquivo .env para gerenciar a string de conexão do banco de dados.
Crie um arquivo chamado .env na raiz do projeto.
Adicione a seguinte linha, substituindo pelo endereço do seu banco de dados MongoDB:
```bash
CONNECTIONSTRING=mongodb://localhost:27017/agenda
```

**5. Compile os Assets do Front-end**
O projeto usa Webpack para empacotar os arquivos de CSS e JavaScript. Execute o comando de build:

```bash
npm run build
```

**6. Inicie o Servidor**
Para iniciar o servidor de desenvolvimento (que reinicia automaticamente com as mudanças), use:
```bash
npm run dev
```

A aplicação estará rodando em http://localhost:3000.

---

## 🎨 Estrutura do Projeto
O projeto segue o padrão de arquitetura MVC:
src/models: Define os Schemas do Mongoose para os dados (ex: ContatoModel.js).
src/views: Contém os arquivos de template .ejs que são renderizados e enviados para o navegador.
src/controllers: Contém a lógica de negócio que conecta os modelos e as views.
src/middlewares: Contém funções de middleware, como as de segurança e validação de sessão.
routes.js: Define todas as rotas da aplicação.
frontend/: Contém os arquivos-fonte do front-end (JavaScript ES6+, CSS) antes de serem compilados pelo Webpack.
public/: Contém os arquivos estáticos finais, prontos para serem servidos ao navegador.


### 📜 Licença