function inicializarBlockly() {
    var workspace = Blockly.inject('blocklyDiv', {
        toolbox: `
            <xml>
                <block type="saludar"></block>
                <block type="preguntar"></block>
                <block type="sumar"></block>
                <block type="text"></block>
                <block type="math_number"></block>
            </xml>
        `
    });

    //  BOTÓN PARA EJECUTAR EL CÓDIGO
    document.getElementById('runCode').addEventListener('click', function() {
        var code = Blockly.JavaScript.workspaceToCode(workspace);
        document.getElementById('output').textContent = code;
        try {
            eval(code);
        } catch (error) {
            alert("Error al ejecutar el código: " + error.message);
        }
    });
}

// ESPERAR A QUE SE CARGUE LA PÁGINA ANTES DE INICIAR BLOCKLY
window.onload = inicializarBlockly;
