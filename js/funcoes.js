function calcular(operacao){
    const n1 = document.getElementById('n1').value
    const n2 = document.getElementById('n2').value

    let resultado
    switch(operacao){
        case '+': resultado = somar(n1, n2); break;
        case '-': resultado = subtrair(n1, n2); break;
        case '*': resultado = multiplicar(n1, n2); break;
        case '/': resultado = dividir(n1, n2); break;
    }

    document.getElementById('resultado').innerHTML =  'Resultado é: ' + resultado   
}

const somar = (n1, n2) => n1 + n2

const subtrair = (n1, n2) => n1 - n2

const multiplicar = (n1, n2) => n1 * n2

function dividir(n1, n2){
    if (n2 == Number(0)) {
     return document.getElementById('resultado').innerHTML = "Não é possível dividir por Zero"
    } else {
        return Number(n1) / Number(n2)
    }
 }