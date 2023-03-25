# Carbonara

Este projeto foi criado para estudo da API [ChatGPT](https://platform.openai.com/), foi utilizado o [Angular](https://angular.io/) para o desenvolvimento do front-end com o [Angular Material](https://material.angular.io/) para a estilização dos componentes. O projeto foi gerado através do [Angular CLI](https://github.com/angular/angular-cli) versão 15.2.2.

## Objetivo

O objetivo do projeto é criar uma aplicação que permita ao usuário inserir os ingredientes disponíveis e solicitar uma lista de receitas com base nos ingredientes inseridos. A partir da lista de receitas, o usuário poderá selecionar uma receita e gerar a receita selecionada, mostrando os ingredientes, modo de preparo e uma imagem da receita.

## Funcionalidades

- [x] Inserir os ingredientes disponíveis
- [x] Solicitar uma lista de receitas com base nos ingredientes inseridos
- [x] Selecionar uma receita

## Demonstração

https://user-images.githubusercontent.com/62509668/227730524-a026dd65-6b5e-4faa-896f-659972982d31.mp4

![screencapture-localhost-4200-2023-03-25-12_35_04](https://user-images.githubusercontent.com/62509668/227730578-e4514677-bfe3-42f3-8972-f3ebc72cec83.png)

## Configuração da chave de API do ChatGPT

- Antes de rodar o projeto, é necessário criar uma chave de API no [ChatGPT](https://platform.openai.com/account/api-keys).
- Adicione a chave no arquivo `src/environments/environment.ts` na variável `token`.

## Intruções para rodar o projeto

- Para rodar o projeto, é necessário ter o [Node.js](https://nodejs.org/en/) instalado na máquina.
- Após a instalação, é necessário instalar o [Angular CLI](https://angular.io/cli) com o comando `npm install -g @angular/cli`.
- Com o Angular CLI instalado, é necessário instalar as dependências do projeto com o comando `npm install`.
- Após a instalação das dependências, é necessário rodar o comando `ng serve` para iniciar o servidor de desenvolvimento.
- Acesse `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

## Autor

- [Lucas Renó](https://www.linkedin.com/in/lucas-ren%C3%B3-50023924/)
