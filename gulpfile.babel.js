'use strict';

// General

import gulp 						from 'gulp';
import data 						from 'gulp-data';
import install 					from 'gulp-install';
import notify 					from 'gulp-notify';
import fs 							from 'fs';

// BrowserSync
import browserSync 			from 'browser-sync';
const server = browserSync.create();

function reload(done) {
	server.reload();
	done();
}
function serve(done) {
	// Shows that run "watch" mode
	global.watch = true;
	
	server.init({
		server: {
			baseDir: './app',
			notify: true
		}
	});
	done();
}

// PUG

import gulpif 					from 'gulp-if';
import pug 							from 'gulp-pug';
const emitty 			= require('emitty').setup('app', 'pug');


// Sass

import sass 						from 'gulp-sass';
import sassGlob 				from 'gulp-sass-glob';
import autoprefixer 		from 'gulp-autoprefixer';
import csscomb 					from 'gulp-csscomb';
import sassdoc 					from 'sassdoc';


// JS

import babel 						from 'gulp-babel';
import browserify 			from 'browserify';
import source 					from 'vinyl-source-stream';
import babelify 				from "babelify";


//- Install packages
gulp.src(['./package.json'])
	.pipe(install())


// SASS
gulp.task('sass', () =>
	gulp.src("app/sass/**/*.scss")
		.pipe(sassdoc({
			dest: 'sassdoc',
			verbose: true,
			display: {
				access: ['public', 'private'],
				alias: true,
				watermark: true,
			},
			groups: {
				undefined: 'All'
			}
		}))
		.pipe(sassGlob())
		.pipe(sass({
			outputStyle: 'expanded'
		}).on('error', sass.logError))
		.pipe(csscomb())
		.pipe(autoprefixer({
			browsers: ['last 15 versions'],
			cascade: false
		}))
		.pipe(gulp.dest("app/css"))
);
gulp.task('sass:watch', () => {
	gulp.watch("app/sass/**/*.scss", gulp.series('sass', reload));
});


// PUG
gulp.task('templates', () =>
	gulp.src('app/**/*.pug')
		.pipe(gulpif(global.watch, emitty.stream(global.emittyChangedFile)))
		.pipe(
			pug({
				pretty: true
			})
		)
		.on('error', notify.onError({
				title: 'PUG Error',
				message: '<%= error.message %>'
		}))
		.pipe(gulp.dest('app'))
);

gulp.task('templates:watch', () => {
	gulp.watch('app/**/*.pug', gulp.series('templates', reload))
		.on('all', (event, filepath) => {
			global.emittyChangedFile = filepath;
		});
});

// JS

gulp.task('scripts', () =>
	browserify({
		entries: './app/babel/app.js',
		debug: true
	})
	.transform(babelify)
	.on('error', notify.onError({
			title: 'babelify Error',
			message: '<%= error.message %>'
	}))
	.bundle()
	.on('error', notify.onError({
			title: 'Bundle Error',
			message: '<%= error.message %>'
	}))
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('app/js'))
);

gulp.task('scripts:watch', () => {
	gulp.watch("app/babel/**/*.js", gulp.series('scripts', reload));
});


// Your "watch" task
gulp.task(
	'watch', 
	gulp.parallel(
		serve,
		'sass:watch',
		'scripts:watch',
		'templates:watch'
	)
);

gulp.task('default', gulp.series('watch'));