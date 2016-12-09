## Synopsis

This code just return if a brazilian document (CPF, CNPJ or PIS) has valid or not based on your verify code.
For PIS need a extra parameter, a boolean, to informe that verify code has one character.

## Code Example

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

    // Second parameter boolean identify if verify number has just one digite. Calcule changes.


## License

MIT