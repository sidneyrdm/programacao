let cor = "vermelho";

if (cor === "verde") {
    console.log("Siga");
}else if(cor === "amarelo"){
    console.log("Siga com Atenção");
}else {
    console.log("Pare");
}


let cor = "azul";

switch(cor){
    case "verde" :
        console.log("siga");break
        case "amarelo" :
        console.log("atenção");break
        case "vermelho" :
        console.log("pare");break
    default: 
    console.log("cor fora do padrão");            
}

let n = 7;

for (let i = 0; i <= 10; i++){

 console.log(`${i} X ${n} = ${i * n}`);

}

function calc(x1, x2, operator){

    return eval(`${x1} ${operator} ${x2}`);

}

let resultado = calc(3, 3, "*");

console.log(resultado);

//função anonima
(function (x1, x2, operator){

    return eval(`${x1} ${operator} ${x2}`);

}) (3, 3, "*");


//função anonima
calc = (x1, x2, operator) => {

    return eval(`${x1} ${operator} ${x2}`);

}

let resultado = calc(3, 5, "*");

console.log(resultado);


window.addEventListener('focus', event => {

    console.log('focus');
})

document.addEventListener('click', event => {

    console.log('click');
})

let agora = new Date();

console.log(agora.toLocaleDateString("pt-BR"));


let carros = ["palio 98", "Toro 2021", "Strada 2021"];

carros.forEach(function(value, index){

    console.log(index, value);
});