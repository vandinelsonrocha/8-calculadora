let resultado = document.getElementById('res');

//A função insert() faz com que qd clicar em qualquer botão, o número ou o símbolo apareça na calculadora
function insert(numA)  {
    let numB = resultado.innerHTML; //insrir cada número por vez
    resultado.innerHTML = numB + numA; //vai armazenando todos os números que forem inseridos
}

//A função clean() faz com que qd clicar no botão DEL, limpe tudo/de uma vez o que estiver armazenado na calculadora
function clean()  {
    resultado.innerHTML = "";
}

//A função back() faz com que qd clicar no botão <, apaque o que estiver armazenado na calculadora um por um
function back()  {
    resultado = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = resultado.substring(0, resultado.length -1); //apagar um por um
}

function calcular()  {
    resultado = document.getElementById('res').innerHTML;

    //Ao clicar no botão de igual se tiver resultado/se tiver armazenado alguma coisa:
    if(resultado)  {
        document.getElementById('res').style.backgroundColor = "rgb(98, 223, 25)";
        document.getElementById('res').innerHTML = eval(resultado);  //efetua os cálculos
    } else  {
        //Se clicar no botão de igual e não tiver nada armazenado, receberá uma mensagem de aviso
        document.getElementById('res').innerHTML = "<p>Nada para calcular!</p>";
    }
}