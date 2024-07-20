const resultado = document.querySelector("#resultado");
const altura = document.querySelector("#altura");
const peso = document.querySelector("#peso");

const calcIMC = () => {
    if (altura.value === '' || peso.value === '') {
        resultado.innerHTML = "Preencha os Campos.";
    } else {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2);
        let classification = '';
        
        if (imc < 18.5) {
            classification = "Abaixo do Peso";
        } else if (imc < 25) {
            classification = "Peso Normal";
        } else if (imc < 30) {
            classification = "Acima do Peso";
        } else if (imc < 36) {
            classification = "Obesidade Grau I";
        } else if (imc < 41) {
            classification = "Obesidade Grau II";
        } else {
            classification = "Obesidade Grau III";
        }
        
        resultado.innerHTML = `IMC: ${imc} (${classification})`;
    }
};