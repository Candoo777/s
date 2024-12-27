const fs = require('fs'); // Import the 'fs' (filesystem) module

// Reading the contents of the current directory ('.')
fs.readdir('.', (err, files) => {
    if (err) throw err; // If an error occurs, throw it
    console.log(files); // Log the list of files and directories in the current directory
});
