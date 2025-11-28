// Selecionando elementos do DOM
const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const btn = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");

btn.addEventListener("click", function () {

    const p = Number(peso.value);
    const a = Number(altura.value);

    if (!p || !a) {
        resultado.innerHTML = "Por favor, preencha os campos!";
        resultado.className = "result-bad";
        return;
    }

    const imc = (p / (a * a)).toFixed(2);
    let msg = "";
    let classe = "";

    if (imc < 18.5) {
        msg = "Abaixo do peso";
        classe = "result-warn";
    } else if (imc <= 24.9) {
        msg = "Peso normal";
        classe = "result-ok";
    } else if (imc <= 29.9) {
        msg = "Sobrepeso";
        classe = "result-warn";
    } else if (imc <= 34.9) {
        msg = "Obesidade Grau I";
        classe = "result-bad";
    } else if (imc <= 39.9) {
        msg = "Obesidade Grau II";
        classe = "result-bad";
    } else {
        msg = "Obesidade Grau III (grave)";
        classe = "result-bad";
    }

    resultado.className = classe;
    resultado.innerHTML = `Seu IMC é <strong>${imc}</strong> — ${msg}`;
});
