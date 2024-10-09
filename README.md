# Aula
Nesta aula foi feito a criação do arquivo scss e a compilação.

## Sobre o SASS
- É possível escrever css normal nele;
- Para o navegador entender o scss, é necessário compilá-lo;

## Necessário
- NPM: [link de instalação](https://nodejs.org/en/download/prebuilt-installer)
- Live Sass compiler: extensão do vscode para ver as mudanças do sass ao vivo
- Compilador usado: gulp

## Fazendo as instalações
Inicializando o NPM <br/>
`npm init -y`

Baixando o gulp (compilador), gulp-sass (plugin) e sass (biblioteca usada pelo plugin)<br/>
`npm install gulp gulp-sass sass --save-dev`

## Passo a Passo
- Crie o arquivo index.html
- Crie o arquivo index.scss
- No arquivo package.json, dentro de scripts crie: "gulp": "gulp",
- Crie o arquivo gulpfile.js, onde será feita a configuração de compilação
- Configura o arquivo gulpfile.js
- Roda o gulp no terminal: <br/> `npm run gulp`