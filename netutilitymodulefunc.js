const net = require('net');
const server = net.createServer((socket) => {
 console.log('Client connected');
 socket.write('Hello Client');
 socket.end();
});
server.listen(4000, () => console.log('Server running on port 4000'));
console.log(`Server Address: ${server.address().port}`);
console.log(`Server Listening: ${server.listening}`);