let tamanho = 12;

const valor = document.getElementById("valor");

function alterarTamanho(numero){

    tamanho += numero;

    if(tamanho < 4)
        tamanho = 4;

    if(tamanho > 30)
        tamanho = 30;

    valor.innerText = tamanho;

    gerarSenha();
}

function gerarSenha(){

    let caracteres="";

    if(document.getElementById("maiusculas").checked)
        caracteres+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(document.getElementById("minusculas").checked)
        caracteres+="abcdefghijklmnopqrstuvwxyz";

    if(document.getElementById("numeros").checked)
        caracteres+="0123456789";

    if(document.getElementById("simbolos").checked)
        caracteres+="!@#$%&*()_+-=[]{}?";

    if(caracteres==""){
        alert("Escolha pelo menos uma opção.");
        return;
    }

    let senha="";

    for(let i=0;i<tamanho;i++){

        let indice=Math.floor(Math.random()*caracteres.length);

        senha+=caracteres[indice];
    }

    document.getElementById("senha").value=senha;

    verificarForca();
}

function verificarForca(){

    let pontos=0;

    if(document.getElementById("maiusculas").checked) pontos++;
    if(document.getElementById("minusculas").checked) pontos++;
    if(document.getElementById("numeros").checked) pontos++;
    if(document.getElementById("simbolos").checked) pontos++;

    if(tamanho>=12) pontos++;

    const barra=document.getElementById("nivel");
    const texto=document.getElementById("textoForca");

    if(pontos<=2){
        barra.style.width="33%";
        barra.style.background="red";
        texto.innerText="Fraca";
    }

    else if(pontos<=4){
        barra.style.width="66%";
        barra.style.background="orange";
        texto.innerText="Média";
    }

    else{
        barra.style.width="100%";
        barra.style.background="lime";
        texto.innerText="Forte";
    }
}

document.querySelectorAll("input[type=checkbox]").forEach(item=>{
    item.addEventListener("change",gerarSenha);
});

gerarSenha();