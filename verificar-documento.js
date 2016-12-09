'use strict';

var moduloVerificador = require('./src/modulo-verificador.js')
/**
 * Método verifica se documento informado é valido, Retorna sucesso para CPF, CNPJ ou PIS
 * @param {String} documento - documento a ser verificado. Pode ser uma string '123.321.456-96' ou o numero 12332145696
 * @param  {boolean} umDigitoVerificador - informa se documento possui apenas um digito, como o PIS, interfere na forma de cálculo.
 * @return {boolean}
 */
 function verificarDocumento(documento, umDigitoVerificador){


   return moduloVerificador.verificarDocumento(documento, umDigitoVerificador);

};


module.exports = verificarDocumento;