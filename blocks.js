// 🔹 DEFINIR BLOQUES PERSONALIZADOS EN BLOCKLY
Blockly.defineBlocksWithJsonArray([
    {
        "type": "saludar",
        "message0": "saludar a %1",
        "args0": [
            {
                "type": "input_value",
                "name": "NOMBRE",
                "check": "String"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 160
    },
    {
        "type": "preguntar",
        "message0": "preguntar %1",
        "args0": [
            {
                "type": "input_value",
                "name": "PREGUNTA",
                "check": "String"
            }
        ],
        "output": "String",
        "colour": 230
    },
    {
        "type": "sumar",
        "message0": "sumar %1 con %2",
        "args0": [
            {
                "type": "input_value",
                "name": "NUM1",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "NUM2",
                "check": "Number"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 210
    }
]);
