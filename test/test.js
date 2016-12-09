'use strict';

var expect = require('chai').expect;
var verificador = require('../verificar-documento');

var moduloVerificador = require('../src/modulo-verificador');


describe('#verify CPF', function() {
    it('should return true if valid', function() {
        var result = verificador('123.456.789-00');
        expect(result).to.equal(true);
    });

    it('should return false if invalid', function() {
        var result = verificador('123.456.789-09');
        expect(result).to.equal(false);
    });
});
describe('#verify CNPJ', function() {
    it('should return true if valid', function() {
        var result = verificador('12.345.678/0001-95');
        expect(result).to.equal(true);
    });

    it('should return false if invalid', function() {
        var result = verificador('12.345.678/0001-00');
        expect(result).to.equal(false);
    });
});
describe('#verify PIS', function() {
    it('should return true if valid', function() {
        var result = verificador('123.4567.890-0', true);
        expect(result).to.equal(true);
    });

    it('should return false if invalid', function() {
        var result = verificador('123.4567.890-1', true);
        expect(result).to.equal(false);
    });
});



describe('#moduloVerificador', function(){

    describe('#moduloVerificador.verificarDocumento', function(){

        describe('#verify CPF', function() {
            it('should return true if valid', function() {
                var result = moduloVerificador.verificarDocumento('123.456.789-00');
                expect(result).to.equal(true);
            });

            it('should return false if invalid', function() {
                var result = moduloVerificador.verificarDocumento('123.456.789-09');
                expect(result).to.equal(false);
            });
        });
        describe('#verify CNPJ', function() {
            it('should return true if valid', function() {
                var result = moduloVerificador.verificarDocumento('12.345.678/0001-95');
                expect(result).to.equal(true);
            });

            it('should return false if invalid', function() {
                var result = moduloVerificador.verificarDocumento('12.345.678/0001-00');
                expect(result).to.equal(false);
            });
        });
        describe('#verify PIS', function() {
            it('should return true if valid', function() {
                var result = moduloVerificador.verificarDocumento('123.4567.890-0', true);
                expect(result).to.equal(true);
            });

            it('should return false if invalid', function() {
                var result = moduloVerificador.verificarDocumento('123.4567.890-1', true);
                expect(result).to.equal(false);
            });
        });

    });

    describe('#moduloVerificador.retornarSoma', function(){
        it('shoud return 210 for sequence "123456789"', function(){
            var result = moduloVerificador.retornarSoma('123456789');
            expect(result).to.equal(210); 
        });
        it('shoud return 255 for sequence "1234567890"', function(){
            var result = moduloVerificador.retornarSoma('1234567890');
            expect(result).to.equal(255); 
        });
        it('shoud return 231 for sequence "1234567890 and true parameter"', function(){
            var result = moduloVerificador.retornarSoma('1234567890', true);
            expect(result).to.equal(231); 
        });
    });

    describe('#moduloVerificador.todosCaracteresIguais', function(){
        it('shoud return true for sequence "0000"', function(){
            var result = moduloVerificador.todosCaracteresIguais("0000");
            expect(result).to.equal(true);
        });
        it('shoud return false for sequence "0001"', function(){
            var result = moduloVerificador.todosCaracteresIguais("0001");
            expect(result).to.equal(false);
        });
        it('shoud return false for sequence "0010"', function(){
            var result = moduloVerificador.todosCaracteresIguais("0010");
            expect(result).to.equal(false);
        });
        it('shoud return false for sequence "0100"', function(){
            var result = moduloVerificador.todosCaracteresIguais("0100");
            expect(result).to.equal(false);
        });
        it('shoud return false for sequence "1000"', function(){
            var result = moduloVerificador.todosCaracteresIguais("1000");
            expect(result).to.equal(false);
        });
    });


    describe('#moduloVerificador.retornarDigitoCalculado', function(){
        it('shoud return ')
    });

    

});