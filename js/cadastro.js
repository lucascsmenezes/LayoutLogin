function mostrarsenha() {
    const olho = document.getElementById('eye-open');
    const olhofechado = document.getElementById('eye-slash-close');
    const campassword = document.getElementById('password');

    if (olho.style.display === 'none'){
        olho.style.display = 'block';
        olhofechado.style.display = 'none';
        campassword.type = 'text'
    }else{
        olho.style.display = 'none';
        olhofechado.style.display = 'block';
        campassword.type = 'password'
    }
};

let btn_enter = document.querySelector('.entrar');
btn_enter.addEventListener('click', ()=>{
    window.location.href = "coisas.html"
})

let campoNome = document.getElementById('nome');
campoNome.addEventListener('keyup', ()=>{
    if(campoNome.value.length <= 5){
        campoNome.style.color = "black";
        campoNome.style.border = "solid";
        campoNome.style.borderColor = "red"
    }else{
        campoNome.style.color = "black";
        campoNome.style.border = "solid";
        campoNome.style.borderColor = "green";
    }
})

let campoEmail = document.getElementById('email');
campoEmail.addEventListener('keyup', ()=>{
    if(campoEmail.value.length <= 5){
        campoEmail.style.color = "black";
        campoEmail.style.border = "solid";
        campoEmail.style.borderColor = "red";
    }else{
        campoEmail.style.color = "black";
        campoEmail.style.border = "solid";
        campoEmail.style.borderColor = "green";
    }
})

let campoTel = document.getElementById('tel');
campoTel.addEventListener('keyup', ()=>{
    if(campoTel.value.length <= 5 && campoTel.value == "()"){
        campoTel.style.color = "black";
        campoTel.style.border = "solid";
        campoTel.style.borderColor = "red";
    }else{
        campoTel.style.color = "black";
        campoTel.style.border = "solid";
        campoTel.style.borderColor = "green";
    }
})

let campoUsuario = document.getElementById('user');
campoUsuario.addEventListener('keyup', ()=>{
    if(campoUsuario.value.length <= 5){
        campoUsuario.style.color = "black";
        campoUsuario.style.border = "solid";
        campoUsuario.style.borderColor = "red";
    }else{
        campoUsuario.style.color = "black";
        campoUsuario.style.border = "solid";
        campoUsuario.style.borderColor = "green";
    }
})

let campoSenha = document.getElementById('field-password');
campoSenha.addEventListener('keyup', ()=>{
    if(campoSenha.value.length <= 5){
        campoSenha.style.color = "black";
        campoSenha.style.border = "solid";
        campoSenha.style.borderColor = "red";
    }else{
        campoSenha.style.color = "black";
        campoSenha.style.border = "solid";
        campoSenha.style.borderColor = "green";
    }
})

let campoConfirm = document.getElementById('password');
campoConfirm.addEventListener('keyup', ()=>{
    if(campoConfirm.value.length <= 5){
        campoConfirm.style.color = "black";
        campoConfirm.style.border = "solid";
        campoConfirm.style.borderColor = "red";
    }else{
        campoConfirm.style.color = "black";
        campoConfirm.style.border = "solid";
        campoConfirm.style.borderColor = "green";
    }
})

let user = {
    nome : document.querySelector("#nome").value,
    email : document.querySelector("#email").value,
    tel : document.querySelector("#tel").value,
    usuario : document.querySelector("#user").value,
    senha : document.querySelector("#field-password").value,
    confSenha : document.querySelector("password")
}

let botao = document.getElementById("btn-cad");
botao.addEventListener("click", ()=>{

    let userString = JSON.stringify(user);
    localStorage.setItem("usuario",userString);
    alert("Usuario cadastrado com sucesso!!");
})
