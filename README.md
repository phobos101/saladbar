# saladbar
A light, clean and fresh web app template for the modern developer.

## Tech Used

* Bootstrap Alpha 4.0.0#2 (modular SCSS)
* SCSS
* Gulp.js - Task runner
* Pleeease - Multiple CSS tools in one!
* Babel - Use ES6 and ES7
* Preprocess - For smarter HTML

## How to run

1) Install gulp if you need to: `npm install gulp -g`
2) Install the packages: `npm install`
3) Run `gulp`

Gulp-watch will automatically update the build directory as you work in `src`.

## Tips

* Enable/disable bootstrap components by commenting them in/out in `src/bootstrap/bootstrap.scss`
* Override bootstrap defaults in `src/scss/_custom.scss`
* Import all of your own SCSS files into `src/scss/base.scss`
* Use partials in your HTML and add them with `<!-- @include partials/<filename>.html -->`
* Make use of ES6 and babel will do the conversion for you automatically.
