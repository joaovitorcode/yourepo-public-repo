## Projeto YouRepo
Este projeto tem por objetivo testar as tecnologias Typescript e Tailwind por meio do desenvolvimento de um site que permite ao usuário autenticado criar uma lista privada de repositórios.

## Tecnologias utilizadas
- HTML5
- CSS3
- Javascript (ES6+)
- Git
- ReactJS
- Tailwind
- Typescript

## Serviços utilizados
- Firebase (authentication e firestore)

## Setup
- Para instalar o projeto:
```
git clone git@github.com:joaovitorcode/yourepo-public-repo.git
npm i
// ou
yarn
```
- Crie um projeto no firebase
- Dentro desse projeto crie um app para a web
- Obtenha a Configuração do SDK do app para a web
- Cole essa configuração dentro do arquivo *firebaseClient.jsx* localizado na raíz do projeto
- Habilite o serviço *authentication* utilizando o provedor do *Google*
- Habilite o serviço *firestore* em modo de teste
- OBS: a coleção que utilizaremos no serviço *firestore* será criada implicitamente pelo firebase
- Execute no terminal o comando *npm run dev* ou *yarn dev*

##  Como funciona
Qualquer usuário autenticado poderá adicionar seus repositórios favoritos, pesquisá-los ou até mesmo removê-los.

## Versão
0.1.0

## Autor
- **J Vitor F**: [@joaovitorcode](https://github.com/joaovitorcode)
