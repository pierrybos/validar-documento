'use strict';

var expect = require('chai').expect;
var verificador = require('../verificar-documento');

describe('#verify CPF', function() {
    it('should return true if valid', function() {
        var result = verificador('123.456.789-09');
        expect(result).to.equal(true);
    });

    it('should return false if invalid', function() {
        var result = verificador('123.456.789-00');
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