//MÁSCARA DE USUÁRIO
const txtUser = document.querySelector('#txt-user');
txtUser.addEventListener('keypress', ()=>{
    const userValue = txtUser.value.length;
    if(userValue === 0) txtUser.value += '@';
});
//CAPS LOCK
const txtSenha = document.querySelector('#txt-password');
const label = document.querySelector('#lbl-caps');
label.style.display = 'none';
txtSenha.addEventListener('keyup', (e)=>{
    e.getModifierState('CapsLock') ? label.style.display = 'block' : label.style.display = 'none';
});
//MOSTRAR E OCULTAR SENHA
function toggleSenha(type, icon, iconRemove){
    icoToggle.classList.remove(iconRemove);
    icoToggle.classList.add(icon);
    txtSenha.removeAttribute('type');
    txtSenha.type = type;
}
const icoToggle = document.querySelector('#ico-senha');
icoToggle.addEventListener('click', ()=>{
   return icoToggle.className === 'fa-sharp fa-solid fa-eye-slash' ? toggleSenha('password', 'fa-eye', 'fa-eye-slash')
   : toggleSenha('text', 'fa-eye-slash', 'fa-eye');
});
//VERIFICAÇÃO DE USUÁRIO E SENHA
const btnEntrar = document.querySelector('#btn-entrar');
btnEntrar.addEventListener('click', ()=>{
    const userValue = txtUser.value;
    const passValue = txtSenha.value;
    // console.log(userValue);
    //  ((userValue === '@'+'admin')&&(passValue === '123')) ? alert('Login aprovado!') : alert('Verifique o login digitado.');
    if(((!Boolean(userValue)) || (!Boolean(passValue)))){
        alert('Verifique os campos vazios.')
    }else if((userValue !== '@'+'admin')&&(passValue !== '123')){
        alert('Verifique os dados digitados.');
    }else{
        window.location.href = 'https://google.com';
    }
    // console.log(Boolean(userValue));
});




