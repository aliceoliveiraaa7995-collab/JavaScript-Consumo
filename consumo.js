document.getElementById("classificar").onclick = function() { //[cite: 1]
    let consumo = Number(document.getElementById("consumo").value); //[cite: 1]

    if (consumo <= 100) { //[cite: 1]
        document.getElementById("resultado").innerHTML = "Classificação: Consumo baixo"; //[cite: 1]
    } else if (consumo >= 101 && consumo <= 200) { //[cite: 1]
        document.getElementById("resultado").innerHTML = "Classificação: Consumo moderado"; //[cite: 1]
    } else if (consumo > 200) { //[cite: 1]
        document.getElementById("resultado").innerHTML = "Classificação: Consumo alto"; //[cite: 1]
    } else {
        document.getElementById("resultado").innerHTML = "Valor inválido!";
    }
}