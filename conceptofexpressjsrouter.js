const express = require('express');
const app = express();
const router = express.Router();
router.get('/', (req, res) => {
 res.send('Router GET request');
});
router.post('/', (req, res) => {
 res.send('Router POST request');
});
app.use('/api', router);
app.listen(3000, () => {
 console.log('Server running on http://localhost:3000/api');
});