let celular = function(){

    this.cor = "prata";

    this.ligar = function(){

        console.log("fazendo uma ligação...");
    }

}

let objeto = new celular();

console.log(objeto.ligar());