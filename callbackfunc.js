const callbackExample = (message, callback) => {
    console.log(message);
    callback();
   };
   callbackExample('Hello!', () => console.log('Callback executed'));