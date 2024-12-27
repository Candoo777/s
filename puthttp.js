const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON
app.put('/', (req, res) => {
 res.json({ message: 'This is a PUT request', data: req.body });
});
app.listen(3000, () => {
 console.log('Server running on http://localhost:3000');
});
