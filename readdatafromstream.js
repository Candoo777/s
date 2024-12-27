const fs = require('fs');  // Import the fs module

// Create a readable stream from the file 'example.txt'
const readable = fs.createReadStream('example.txt');

// Event listener for the 'data' event
readable.on('data', (chunk) => {
  console.log('Data:', chunk.toString());
});

// Event listener for the 'end' event (optional)
readable.on('end', () => {
  console.log('Finished reading the file.');
});

// Event listener for the 'error' event (optional)
readable.on('error', (err) => {
  console.error('Error reading the file:', err);
});
