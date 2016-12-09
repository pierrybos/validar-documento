[![Coverage Status](https://coveralls.io/repos/github/pierrybos/validar-documento/badge.svg?branch=master)](https://coveralls.io/github/pierrybos/validar-documento?branch=master)
[![Build Status](https://travis-ci.org/pierrybos/validar-documento.svg?branch=master)](https://travis-ci.org/pierrybos/validar-documento)


Brazilian Document Validator
=========

## Synopsis

This code just checks if a brazilian document (CPF, CNPJ or PIS) is valid or not based on your verify code. 
For the PIS there is the need of a extra parameter, a boolean, to inform that the verify code has one character.

## Usage


CPF:

    verificarDocumento('123.456.789-00'); // will return false
    verificarDocumento('12345678900'); // will return false
    verificarDocumento(12345678900); // will return false

    verificarDocumento('123.456.789-09'); // will return true
    verificarDocumento('12345678909'); // will return true
    verificarDocumento(123.456.789-09); // will return true

CNPJ:

    verificarDocumento('12.345.678/0001-00'); // will return false
    verificarDocumento('12345678000100'); // will return false
    verificarDocumento(12345678000100); // will return false

    verificarDocumento('12.345.678/0001-95'); // will return true
    verificarDocumento('12345678000195'); // will return true
    verificarDocumento(12345678000195); // will return true


PIS:

    verificarDocumento('123.4567.890-1', true); // will return false
    verificarDocumento('12345678901', true); // will return false
    verificarDocumento(12345678901, true); // will return false
    verificarDocumento('123.4567.890-0', true); // will return true
    verificarDocumento('12345678900', true); // will return true
    verificarDocumento(12345678900, true); // will return true

    // Second parameter boolean identifies if verify number has just one digit. Calculate changes.


## Installation

  `npm install @pierrybos/verifica-documento`

## Tests

  `npm test`
    
## License

MIT


## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.