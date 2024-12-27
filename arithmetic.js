const arithmetic = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
   };
   module.exports = arithmetic;
   // Usage in Another Program
   const arithmeticOps = require('./arithmetic');
   console.log(`Add: ${arithmeticOps.add(5, 3)}`);