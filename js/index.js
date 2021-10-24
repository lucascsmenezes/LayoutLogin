function showpassword() {
    var eye = document.getElementById('eye');
    var eyeSlash = document.getElementById('eye-slash');
    var fieldpassword = document.getElementById('field-password');

    if (eye.style.display === 'none'){
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        fieldpassword.type = 'text';
    }else{
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        fieldpassword.type = 'password';
    }
}

let senha = document.getElementById('field-password');
senha.addEventListener('keyup', ()=>{
    if(senha.value.length <= 5){
        senha.style.border = "solid 2px";
        senha.style.borderColor = "red"
        senha.style.color = "black";
    }else{
        senha.style.border = "solid 2px";
        senha.style.borderColor = "green"
        senha.style.color = "black";
    }
})
