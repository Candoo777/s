const path = require('path');
console.log(`Basename: ${path.basename('/test/example.txt')}`);
console.log(`Directory Name: ${path.dirname('/test/example.txt')}`);
console.log(`Extension: ${path.extname('/test/example.txt')}`);
console.log(`Join Path: ${path.join('/test', 'example.txt')}`);
console.log(`Absolute Path: ${path.resolve('example.txt')}`);