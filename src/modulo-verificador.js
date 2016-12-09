'use strict';


var moduloVerificador = {};

    /**
     * [verificaDocumento]
     * @param  {String} documento              [document for check]
     * @param  {bool}   verificarSegundoDigito [check if is second number]
     * @param  {bool}   calculoLimiteNove      [if has one character on verify number]
     * @return {bool}                          [return if all documet is validy]
     */
     moduloVerificador.verificarDocumento = function verificarDocumentoFn(documento, umDigitoVerificador){

        var self = this;

        function _verificarDocumentoFn(documento, verificarSegundoDigito, calculoLimiteNove){

            var documento = String(documento);
            var digitoVerificador = (verificarSegundoDigito)?-1:-2;

            // verificar se todos números são iguais
            if (self.todosCaracteresIguais(documento)){ 
                // retornar invalido se sim
                return false; 
            } else {

                //número é valido, continuar validação
                if( self.retornarDigitoCalculado( documento.substring(0, (documento.length + digitoVerificador)) , calculoLimiteNove) == documento.charAt((documento.length + digitoVerificador))){

                    if(verificarSegundoDigito){

                        return true;
                    } else {

                        return self.verificarDocumento(documento, true);
                    }

                } else { 
                    return false; 
                }
            }
        };

        return _verificarDocumentoFn(String(documento).replace(/[^0-9]/g, ''), umDigitoVerificador, umDigitoVerificador); 
    };  

    /**
     * [retornarSoma return sum based lenght number or other defined calcule (second parameter)]
     * @param  {String} documento         [document]
     * @param  {bool}   calculoLimiteNove [set other calc - for PIS]
     * @return {number}                     [number]
     */
     moduloVerificador.retornarSoma = function returnSumFn (strDocument, bolUseCalcBaseNime){

        var strDocument = String(strDocument);
        var intSum = 0;
        var intCalc = (strDocument.length > 11 || bolUseCalcBaseNime)?(strDocument.length - 7 ):(strDocument.length + 1 );

        for( var intIndex in strDocument ){

            if( (intCalc - intIndex) < 2 ){
                intCalc += 8;
            }

            intSum += ( strDocument[intIndex] * (intCalc - intIndex) ); 
        }

        return intSum;
    };

    moduloVerificador.retornarDigitoCalculado = function retornarDigitoCalculadoFn(documento, calculoLimiteNove){

        var documento = String(documento);
        var resto = ( this.retornarSoma(documento, calculoLimiteNove) % 11 );

        if(resto < 2){
            resto = 0;
        }
        else {
            resto = 11-resto;
        }

        if( resto == 11 || resto == 10){
            return 0;
        } 

        return resto;
    };

    /**
     * [todosCaracteresIguais check if all string has the same character]
     * @param  {string}  document [string for check]
     * @return {boolean}          [return]
     */
     moduloVerificador.todosCaracteresIguais = function bolAllCharactersEqual(document){
        // verifica se todos caracteres são iguais
        return ( (document.match(new RegExp(document.charAt(0), "g")) || []).length == document.length);

    };

    module.exports = moduloVerificador;