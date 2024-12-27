const express = require('express');
const app = express();
app.get('/', (req, res) => {
 // 1. res.send: Send a response to the client
 res.send('Hello, this is res.send');
 // 2. res.json: Send a JSON response
 // Uncomment the below line to test it
 // res.json({ message: 'Hello, this is res.json' });
 // 3. res.status: Set the HTTP status code
 // res.status(404).send('Page not found');
 // 4. res.set: Set a response header
 // res.set('Custom-Header', 'This is a custom header');
 // 5. res.redirect: Redirect to another URL
 // res.redirect('/new-path');
});
app.listen(3000, () => {
 console.log('Server running on http://localhost:3000');
});