let nome = document.querySelector('#nome');
let email = document.querySelector('#exampleInputEmail1');
let btn = document.querySelector('.botao');
let erroNome = document.querySelector('#erroNome');
let erroEmail = document.querySelector('#erroEmail');
let emailHelp = document.querySelector('#emailHelp');
let check = document.querySelector('#exampleCheck1');

let nomeOk = false;
let emailOk = false;

//Função para validar o nome do usuario
function validaNome(){
    if(nome.value.length < 3 && nome.value.length > 0){
        erroNome.innerHTML = 'Nome Inválido'
    }
    else {
        erroNome.innerHTML = ''
        nomeOk = true
    }
}


//Função para validar o email
function validaEmail(){
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        erroEmail.innerHTML = 'Email Inválido';
        emailHelp.style.display = 'none';
    }
    else{
        erroEmail.innerHTML = ''
        emailHelp.style.display = '';
        emailOk = true
    }
}

btn.addEventListener("click", function() {
    if(emailOk == true && nomeOk == true){
        alert('Email enviado com sucesso!')
    }
    else{
        alert('Preencha os campos corretamente!')
    }
});