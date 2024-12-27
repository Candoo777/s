const express = require('express');
const app = express();
// Middleware to log request details
app.use((req, res, next) => {
 console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
 next();
});
app.get('/', (req, res) => {
 res.send('Middleware demonstrated with app.use()');
});
app.listen(3000, () => {
 console.log('Server running on http://localhost:3000');
});
