
/**
 * Método verifica se documento informado é valido, Retorna sucesso para CPF, CNPJ ou PIS
 * @param {String} documento - documento a ser verificado. Pode ser uma string '123.321.456-96' ou o numero 12332145696
 * @param  {boolean} umDigitoVerificador - informa se documento possui apenas um digito, como o PIS, interfere na forma de cálculo.
 * @return {boolean}
 */
 function verificarDocumento(documento, umDigitoVerificador){

    var moduloVerificador = {};

    moduloVerificador.verificarDocumento = function verificarDocumentoFn(documento, verificarSegundoDigito, calculoLimiteNove){

        var documento = String(documento);
        var digitoVerificador = (verificarSegundoDigito)?-1:-2;


        // verificar se todos números são iguais
        if (this.todosCaracteresIguais(documento)){ 
            // retornar invalido se sim
            return false; 
        } else {
            //número é valido, continuar validação

            if( this.retornarDigitoCalculado( documento.substring(0, (documento.length + digitoVerificador)) , calculoLimiteNove) == documento.charAt((documento.length + digitoVerificador))){

                if(verificarSegundoDigito){

                    return true;
                } else {

                    return this.verificarDocumento(documento, true);
                }

            } else { 
                return false; 
            }
        }
    };

    moduloVerificador.retornarSoma = function retornarSomaFn (documento, calculoLimiteNove){

        var documento = String(documento);
        var soma = 0;
        var intCalculo = (documento.length > 11 || calculoLimiteNove)?(documento.length - 7 ):(documento.length + 1 );

        for( var idx in documento ){

            if( (intCalculo - idx) < 2 ){
                intCalculo += 8;
            }

            soma += ( documento[idx] * (intCalculo - idx) ); 
        }

        return soma;
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

    moduloVerificador.todosCaracteresIguais = function todosCaracteresIguaisFn(documento){
       return ( (documento.match(new RegExp(documento.charAt(0), "g")) || []).length == documento.length);

   };

   return moduloVerificador.verificarDocumento(String(documento).replace(/[^0-9]/g, ''), umDigitoVerificador, umDigitoVerificador);

};
