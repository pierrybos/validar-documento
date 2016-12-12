'use strict';


var validatorMdl = {};

    /**
     * [fnBolValidateDocument]
     * @param  {String} strDocument            [document for check]
     * @param  {bool}   verificarSegundoDigito [check if is second number]
     * @param  {bool}   bolAllowNineBaseCalc   [if has one character on verify number]
     * @return {bool}                          [return if all documet is validy]
     */
     validatorMdl.fnBolValidateDocument = function fnBolValidateDocumentDef(strDocument, bolOneNumberInChecker){

        var self = this;

        function _fnBolValidateDocument(strDocument, bolOneNumberInChecker, bolAllowNineBaseCalc){

            var strDoc = String(strDocument);
            var numChecker = (bolOneNumberInChecker)?-1:-2;

            // verificar se todos números são iguais
            if (self.fnBolAllCharactersEqual(strDoc)){ 
                // retornar invalido se sim
                return false; 
            } else {

                //número é valido, continuar validação
                if( self.fnNumReturnCheckerNumber( strDoc.substring(0, (strDoc.length + numChecker)) , bolAllowNineBaseCalc) == strDoc.charAt((strDoc.length + numChecker))){

                    if(bolOneNumberInChecker){

                        return true;
                    } else {

                        return self.fnBolValidateDocument(strDoc, true);
                    }

                } else { 
                    return false; 
                }
            }
        };

        return _fnBolValidateDocument(String(strDocument).replace(/[^0-9]/g, ''), bolOneNumberInChecker, bolOneNumberInChecker); 
    };  

    /**
     * [fnNumReturnSum return sum based lenght number or other defined calcule (second parameter)]
     * @param  {String} strDocument         [document]
     * @param  {bool}   bolAllowNineBaseCalc [set other calc - for PIS]
     * @return {number}                     [number]
     */
     validatorMdl.fnNumReturnSum = function fnNumReturnSumDef (strDocument, bolUseCalcBaseNime){

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

    validatorMdl.fnNumReturnCheckerNumber = function fnNumReturnCheckerNumberDef(strDocument, bolAllowNineBaseCalc){

        var strDocument = String(strDocument);
        var numCalc = ( this.fnNumReturnSum(strDocument, bolAllowNineBaseCalc) % 11 );

        if(numCalc < 2){
            numCalc = 0;
        }
        else {
            numCalc = 11-numCalc;
        }

        if( numCalc == 11 || numCalc == 10){
            return 0;
        } 

        return numCalc;
    };

    /**
     * [fnBolAllCharactersEqual check if all string has the same character]
     * @param  {string}  document [string for check]
     * @return {boolean}          [return]
     */
     validatorMdl.fnBolAllCharactersEqual = function bolAllCharactersEqualDef(strDocument){
        // verifica se todos caracteres são iguais
        return ( (strDocument.match(new RegExp(strDocument.charAt(0), "g")) || []).length == strDocument.length);

    };

    module.exports = validatorMdl;