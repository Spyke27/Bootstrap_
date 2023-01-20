let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let btn = document.querySelector('.botao');
let erroNome = document.querySelector('#erroNome');
let erroEmail = document.querySelector('#erroEmail');

let nomeOk = false;
let emailOk = false;

//Função para validar o nome do usuario
function validaNome(){
    if(nome.value.length < 3){
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
        erroEmail.innerHTML = 'Email Inválido'
    }
    else{
        erroEmail.innerHTML = ''
        emailOk = true
    }
}
//Eventos 
btn.addEventListener("click", function() {
    if(emailOk == true && nomeOk == true){
        alert('Email enviado com sucesso!')
    }
    else{
        alert('Preencha os campos corretamente!')
    }
});




