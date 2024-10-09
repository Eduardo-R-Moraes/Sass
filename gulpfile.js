// Arquivo usado para configurar a compilação do sass

const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

// Função responsável por compilar o Sass em css
function buildStyles() {
    return src('index.scss')  // Define o arquivo de início para compilar
        .pipe(sass())         // Chama a função sass() para compilar o arquivo
        .pipe(dest('css'))    // Pasta de destino para o onde o arquivo compilado vai
}

// Função para compilar em tempo real se houver alguma mudança no sass
function watchTask() {
    watch(['index.scss'], buildStyles)
}

// Exporta usando a função series para rodar as funções em sequência
exports.default = series(buildStyles, watchTask)