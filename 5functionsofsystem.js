fs.rename('example.txt', 'newExample.txt', (err) => {
  if (err) throw err;
  console.log('File renamed');
 });
 fs.unlink('newExample.txt', (err) => {
  if (err) throw err;
  console.log('File deleted');
 });
 fs.mkdir('testDir', (err) => {
  if (err) throw err;
  console.log('Directory created');
 });
 fs.rmdir('testDir', (err) => {
  if (err) throw err;
  console.log('Directory removed');
 });
 fs.stat('example.txt', (err, stats) => {
  if (err) throw err;
  console.log(stats);
 });