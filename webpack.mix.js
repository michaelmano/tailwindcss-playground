const mix = require('laravel-mix');
require('mix-tailwindcss');

mix.js('src/app.js', 'public')
   .sass('src/app.scss', 'public')
   .tailwind();