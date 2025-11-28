// Seleciona os elementos do DOM
const inputPeso = document.querySelector("#peso");
const inputAltura = document.querySelector("#altura");
const btnCalcular = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");

// Função para calcular IMC
btnCalcular.addEventListener("click", function () {
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso || !altura) {
        resultado.innerHTML = "Por favor, insira valores válidos!";
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);
    let classificacao = "";

    // Classificações completas
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        classificacao = "Obesidade Grau I";
    } else if (imc >= 35 && imc <= 39.9) {
        classificacao = "Obesidade Grau II";
    } else if (imc >= 40) {
        classificacao = "Obesidade Grau III (grave)";
    }

    resultado.innerHTML = `Seu IMC é <strong>${imc}</strong> — ${classificacao}.`;
});
