var gulp    = require('gulp');
var $       = require('gulp-load-plugins')();
var browser = require('browser-sync');
var rimraf  = require('rimraf');
var yaml    = require('js-yaml');
var yargs   = require('yargs');
var fs      = require('fs');

// Check for --production flag
var PRODUCTION = !!(yargs.argv.production);

// Load settings from settings.yml
var COMPATIBILITY = loadConfig().COMPATIBILITY;
var PORT = loadConfig().PORT;
var UNCSS_OPTIONS = loadConfig().UNCSS_OPTIONS;
var PATHS = loadConfig().PATHS;


function loadConfig() {
    var ymlFile = fs.readFileSync('config.yml', 'utf8');
    return yaml.load(ymlFile);
}

// Build the "dist" folder by running all of the below tasks
gulp.task('build', gulp.series(gulp.parallel(sass, javascript)));

// Dev task
gulp.task('dev',
    gulp.series(gulp.parallel(sass)));

// Build the site, run the server, and watch for file changes
gulp.task('default',
    gulp.series('dev', server, watch));

gulp.task('clean', clean);

gulp.task('javascript', javascript);

gulp.task('copy', copy);

gulp.task('cleanDevCode', cleanDevCode);

// Delete the "dist" folder
// This happens every time a build starts
function clean(done) {
    rimraf(PATHS.dist, done);
}

// Copy files out of the assets folder
// This task skips over the "js", and "scss" folders, which are parsed separately
function copy() {
    return gulp.src(PATHS.assets)
        .pipe(gulp.dest(PATHS.dist));
}

// Compile Sass into CSS
// In production, the CSS is compressed
function sass() {
    return gulp.src('www/assets/scss/screen.scss')
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            includePaths: PATHS.sass
        }).on('error', $.sass.logError))
        .pipe($.autoprefixer({
            browsers: COMPATIBILITY
        }))
        // Comment in the pipe below to not run UnCSS in production
        .pipe($.if(PRODUCTION, $.cssnano()))
        .pipe($.if(!PRODUCTION, $.sourcemaps.write('./')))
        .pipe($.if(!PRODUCTION, gulp.dest('www/assets/css')))
        .pipe($.if(PRODUCTION, gulp.dest(PATHS.dist + '/assets/css')))
        .pipe(browser.reload({ stream: true }));
}

// Combine JavaScript into one file
// In production, the file is minified
function javascript() {
    return gulp.src(PATHS.javascript)
        .pipe($.sourcemaps.init())
        .pipe($.concat('app.js'))
        .pipe($.uglify()
            .on('error', function (e) { console.log(e); })
        )
        .pipe(gulp.dest(PATHS.dist + '/assets/js'));
}

function cleanDevCode() {
    return gulp.src(PATHS.cleanup)
        .pipe($.removeCode({production: true}))
        .pipe(gulp.dest(PATHS.dist));
}

// Start a server with BrowserSync to preview the site in
function server(done) {
    browser.init({
        server: PATHS.dev, port: PORT
    });
    done();
}

// Reload the browser with BrowserSync
function reload(done) {
    browser.reload();
    done();
}

// Watch for changes to static assets, pages, Sass, and JavaScript
function watch() {
    gulp.watch('www/assets/scss/**/*.scss', sass);
    gulp.watch('www/assets/js/**/*.js').on('change', gulp.series(browser.reload));
    gulp.watch('www/assets/img/**/*').on('change', gulp.series(browser.reload));
}

gulp.task(cleanDevCode);