# Feed Reader Testing

In this project a web-based application is given, that reads RSS feeds, and I had to complete a serie of tests, to guarantee its quality, using [Jasmine](http://jasmine.github.io/) testing framework. This test suite was developed as a project for the Advanced Front-End Nanodegree of Udacity.

-----

Neste projeto, uma aplicação web que lê feeds RSS é fornecida e eu tive que completar uma série de testes para garantir sua qualidade, usando o framework de testes Jasmine (link). Esta suíte de testes foi desenvolvida como um projeto para o Nanodegree Front-End Avançado de Udacity.

##  Tests

The tests cover the follow cases:

RSS Feeds Test
  -make sure that the allFeeds variable has been defined and that it is not empty
  -make sure that each feed in the allFeeds object has an url defined and not empty
  -make sure that each feed in the allFeeds object has a name defined and not empty
The menu Test
  -make sure that the menu is hidden by default
  -make sure that the menu changes visibility when the menu icon is clicked
Initial Entries Test
  -make sure that when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container
New Feed Selection Test
  -make sure that when a new feed is loaded the content changes

## To run

1. Download or clone this repository
```
git clone https://github.com/camilalopes/feed-reader-tests.git
```
2. Open the index.html file in your browser.

-----

Faça download ou clone este repositório e abra o arquivo index.html no seu navegador.

## Why testing?

Testing is an important part of the development process. Writing effective tests requires analyzing multiple aspects of an application. Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.

-----

Testar é uma parte importante do processo de desenvolvimento. Escrever testes eficazes requer a análise de vários aspectos de uma aplicação. Bons testes permitem analisar rapidamente se um novo código produz falha em alguma implementação já existente, sem ter que testar manualmente todas as funcionalidades.

## Note

This tests suite is a personal project but feel free to send me suggestions and corrections. :hearts:

-----

Esta suíte de testes é um projeto pessoal mas sinta-se livre para me mandar sugestões e correções. :hearts:
