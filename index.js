'use strict';

/**
 * You can call directy on node `node index.js 123456789` or `node index.js '123.321.123.96'`
 */
var verificador = require('./verificar-documento.js');
console.log(verificador(process.argv[2]));
// if(var args = process.argv.slice(2);)