console.log(`Process ID: ${process.pid}`);
console.log(`Node Version: ${process.version}`);
console.log(`Platform: ${process.platform}`);
console.log(`Current Directory: ${process.cwd()}`);
process.on('exit', () => console.log('Process exiting'));