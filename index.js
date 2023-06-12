//quest1
function Nprimo (number) {

    for (let i = 1 ; i <= number; i++) {
        if (number % i === 0 ){
            let flag = false;

            for (let n = 2; n < i; n++){
                if (i % n ==0){
                    flag = true;
                    break;
                }
            }
            if ((i > 1 && i <1000) && flag == false)
            console.log(i)
        }
    }
}

//quest2
function validarSenha() {
    var senha = prompt('Digite sua senha:');
    var pMaiuscula = /[A-Z]/.test(senha);
    var pMinuscula = /[a-z]/.test(senha);
    var pNumero = /\d/.test(senha);
    var pTamanhoMinimo = senha.length >= 8;
  
    if (pMaiuscula && pMinuscula && pNumero && pTamanhoMinimo) {
      alert('Sua senha é válida.');
    } else {
      alert('Sua senha não é válida, tente novamente.');
    }
  }

  validarSenha();

//quest3
function fatorialn(num){
    if(num < 0){
        return -1;
    }

    else if(num == 0){
        return 1;
    }

    else{
        return (num * fatorialn(num -1));
    }

}

//quest4
function quadrado(num){
    for(let i = 1; i <= num; i++){
        raiz = Math.sqrt(num);
        if(raiz == Math.floor(raiz)){
            console.log("Este numero é um quadrado perfeito");
        }

        else{
            console.log("Este numero não é um quadrado perfeito");
        }
    }
}