const dns = require('dns');
dns.lookup('example.com', (err, address) => {
 if (err) throw err;
 console.log(`IP Address: ${address}`);
});
dns.resolve('example.com', 'MX', (err, addresses) => {
 if (err) throw err;
 console.log('MX Records:', addresses);
});
dns.reverse('8.8.8.8', (err, hostnames) => {
 if (err) throw err;
 console.log('Hostnames:', hostnames);
});