// Import the 'fs' module to interact with the file system
const fs = require('fs');

// Use fs.writeFile to write data to 'example.txt'
fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
    if (err) {
        // If an error occurs, throw it
        throw err;
    }
    // If successful, log a success message
    console.log('File written successfully');
});
