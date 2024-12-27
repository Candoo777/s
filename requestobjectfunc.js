const express = require('express');
const app = express();
// Middleware to parse JSON data from the request body
app.use(express.json());
app.get('/', (req, res) => {
 // 1. req.url: Get the URL of the request
 console.log(`URL: ${req.url}`);
 // 2. req.method: Get the HTTP method of the request
 console.log(`Method: ${req.method}`);
 // 3. req.query: Access query parameters
 console.log(`Query Parameters: ${JSON.stringify(req.query)}`);
 // 4. req.headers: Access headers from the request
 console.log(`Headers: ${JSON.stringify(req.headers)}`);
 // 5. req.ip: Get the IP address of the client
 console.log(`IP Address: ${req.ip}`);
 res.send('Request object functions demonstrated in the console.');
});
app.listen(3000, () => {
 console.log('Server running on http://localhost:3000');
});
