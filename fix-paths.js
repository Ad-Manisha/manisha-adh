// const fs = require('fs');
import fs from 'fs';
const path = './dist/index.html';

// Replace '/assets/' with '/manisha-adh/assets/' for GitHub Pages repo URL
let html = fs.readFileSync(path, 'utf8');
html = html.replace(/\/assets\//g, '/manisha-adh/assets/');
fs.writeFileSync(path, html, 'utf8');
console.log('Paths fixed!');
