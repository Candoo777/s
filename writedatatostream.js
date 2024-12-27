// Import the fs (file system) module
const fs = require('fs');

// Create a writable stream to the file 'example.txt'
const writable = fs.createWriteStream('example.txt');

// Write data to the stream
writable.write('Stream data written!');

// End the stream
writable.end();

// Optional: Listen for the finish event to confirm the data has been written
writable.on('finish', () => {
  console.log('Data has been written to the file successfully!');
});
