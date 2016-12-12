'use strict';

var expect = require('chai').expect;
var validateDocument = require('../index');

var verificador = require('../verificar-documento');
var validatorMdl = require('../src/validator-mdl');


describe('#verify CPF', function() {
    it('should return true if valid', function() {
        var result = validateDocument('123.456.789-00');
        expect(result).to.equal(true);
    });

    it('should return false if invalid', function() {
        var result = validateDocument('123.456.789-09');
        expect(result).to.equal(false);
    });
});
describe('#verify CNPJ', function() {
    it('should return true if valid', function() {
        var result = validateDocument('12.345.678/0001-95');
        expect(result).to.equal(true);
    });

    it('should return false if invalid', function() {
        var result = validateDocument('12.345.678/0001-00');
        expect(result).to.equal(false);
    });
});
describe('#verify PIS', function() {
    it('should return true if valid', function() {
        var result = validateDocument('123.4567.890-0', true);
        expect(result).to.equal(true);
    });

    it('should return false if invalid', function() {
        var result = validateDocument('123.4567.890-1', true);
        expect(result).to.equal(false);
    });
});


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



describe('#validatorMdl', function(){

    describe('#validatorMdl.fnBolValidateDocument', function(){

        describe('#verify CPF', function() {
            it('should return true if valid', function() {
                var result = validatorMdl.fnBolValidateDocument('123.456.789-00');
                expect(result).to.equal(true);
            });

            it('should return false if invalid', function() {
                var result = validatorMdl.fnBolValidateDocument('123.456.789-09');
                expect(result).to.equal(false);
            });
        });
        describe('#verify CNPJ', function() {
            it('should return true if valid', function() {
                var result = validatorMdl.fnBolValidateDocument('12.345.678/0001-95');
                expect(result).to.equal(true);
            });

            it('should return false if invalid', function() {
                var result = validatorMdl.fnBolValidateDocument('12.345.678/0001-00');
                expect(result).to.equal(false);
            });
        });
        describe('#verify PIS', function() {
            it('should return true if valid', function() {
                var result = validatorMdl.fnBolValidateDocument('123.4567.890-0', true);
                expect(result).to.equal(true);
            });

            it('should return false if invalid', function() {
                var result = validatorMdl.fnBolValidateDocument('123.4567.890-1', true);
                expect(result).to.equal(false);
            });
        });

    });

    describe('#validatorMdl.fnNumReturnSum', function(){
        it('shoud return 210 for sequence "123456789"', function(){
            var result = validatorMdl.fnNumReturnSum('123456789');
            expect(result).to.equal(210); 
        });
        it('shoud return 255 for sequence "1234567890"', function(){
            var result = validatorMdl.fnNumReturnSum('1234567890');
            expect(result).to.equal(255); 
        });
        it('shoud return 231 for sequence "1234567890 and true parameter"', function(){
            var result = validatorMdl.fnNumReturnSum('1234567890', true);
            expect(result).to.equal(231); 
        });
    });




    describe('#validatorMdl.fnNumReturnCheckerNumber', function(){
        it('shoud return 0 for sequence "123456789"', function(){
            var result = validatorMdl.fnNumReturnCheckerNumber('123456789');
            expect(result).to.equal(0); 
        });
        it('shoud return 7 for sequence "123456789" and true parameter', function(){
            var result = validatorMdl.fnNumReturnCheckerNumber('123456789', true);
            expect(result).to.equal(7); 
        });
        it('shoud return 9 for sequence "1234567890"', function(){
            var result = validatorMdl.fnNumReturnCheckerNumber('1234567890');
            expect(result).to.equal(9); 
        });
        it('shoud return 0 for sequence "1234567890 and true parameter"', function(){
            var result = validatorMdl.fnNumReturnCheckerNumber('1234567890', true);
            expect(result).to.equal(0); 
        });
    });






    describe('#validatorMdl.fnBolAllCharactersEqual', function(){
        it('shoud return true for sequence "0000"', function(){
            var result = validatorMdl.fnBolAllCharactersEqual("0000");
            expect(result).to.equal(true);
        });
        it('shoud return false for sequence "0001"', function(){
            var result = validatorMdl.fnBolAllCharactersEqual("0001");
            expect(result).to.equal(false);
        });
        it('shoud return false for sequence "0010"', function(){
            var result = validatorMdl.fnBolAllCharactersEqual("0010");
            expect(result).to.equal(false);
        });
        it('shoud return false for sequence "0100"', function(){
            var result = validatorMdl.fnBolAllCharactersEqual("0100");
            expect(result).to.equal(false);
        });
        it('shoud return false for sequence "1000"', function(){
            var result = validatorMdl.fnBolAllCharactersEqual("1000");
            expect(result).to.equal(false);
        });
    });


    

});