const { src, dest, watch } = require("gulp");
const sass = require('gulp-sass')(require('sass'));

function css(done) {    
    src('src/scss/app.scss') // Identificar el archivo de SASS
        .pipe( sass() ) // Compilarlo
        .pipe( dest('build/css')); // Almacenarla en el disco duro    

    done(); // Callback
}

function dev(done) {
    watch("src/scss",css);
    done();
}



exports.dev = dev;
exports.css = css;