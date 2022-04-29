/*const name require('readline').createInterface({
    input: ProcessingInstruction.stdin,
    ouput: ProcessingInstruction.stdout,
});

name question("Cual es tu nombre", name => {
    console.log('Bienvenido ${name}');

})
  */

//const operation =  require('./functions.js');
const { sum, colors } = require('./functions.js');
const result = sum(5,8);

console.log("El resultado de la suma es: ", result);

colors.forEach((color)=> {
    console.count(color);
});