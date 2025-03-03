//  REGISTRAR GENERADORES DE CÓDIGO

//  Generador para "saludar"
Blockly.JavaScript['saludar'] = function(block) {
    var nombre = Blockly.JavaScript.valueToCode(block, 'NOMBRE', Blockly.JavaScript.ORDER_ATOMIC) || '""';
    return `alert("¡Hola, " + ${nombre} + "!");\n`;
};

//  Generador para "preguntar"
Blockly.JavaScript['preguntar'] = function(block) {
    var pregunta = Blockly.JavaScript.valueToCode(block, 'PREGUNTA', Blockly.JavaScript.ORDER_ATOMIC) || '""';
    return [`prompt(${pregunta})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

//  Generador para "sumar"
Blockly.JavaScript['sumar'] = function(block) {
    var num1 = Blockly.JavaScript.valueToCode(block, 'NUM1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var num2 = Blockly.JavaScript.valueToCode(block, 'NUM2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    return `var resultado = ${num1} + ${num2};\nalert("El resultado de tu suma es: " + resultado);\n`;
};
