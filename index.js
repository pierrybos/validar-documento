'use strict';

var validatorMdl = require('./src/validator-mdl')
/**
 * Método verifica se documento informado é valido, Retorna sucesso para CPF, CNPJ ou PIS
 * @param {String} documento - documento a ser verificado. Pode ser uma string '123.321.456-96' ou o numero 12332145696
 * @param  {boolean} umDigitoVerificador - informa se documento possui apenas um digito, como o PIS, interfere na forma de cálculo.
 * @return {boolean}
 */
 function validateDocument(strDocument, numOneNumberInChecker){


   return validatorMdl.fnBolValidateDocument(strDocument, numOneNumberInChecker);

};


module.exports = validateDocument;