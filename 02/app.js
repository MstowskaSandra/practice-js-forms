const labelEmail = document.querySelector('label[for="formLogin"]');
const labelPassFirst = document.querySelector('label[for="formPass1"]');
const labelPassSecond = document.querySelector('label[for="formPass2"]');
const inputEmail = document.querySelector('input[name="login"]');

inputEmail.addEventListener('input', checkEmail);

function checkEmail(e) {
    const self = e.target;
    const email = self.value;
    if (!email.includes('@')) {
        labelEmail.style.border = "1px solid red";
    } else {
        labelEmail.style.border = '1px solid green';
    }
}

const inputFirstPass = document.querySelector('input[name="pass1"]');
const inputSecondPass = document.querySelector('input[name="pass2"]');

inputFirstPass.addEventListener('input', checkPass);
inputSecondPass.addEventListener('input', checkPass);

function checkPass() {
    const firstPass = inputFirstPass.value;
    const secondPass = inputSecondPass.value;
    if (firstPass !== secondPass || firstPass.length < 6) {
        labelPassFirst.style.border = '1px solid red';
        labelPassSecond.style.border = '1px solid red';
    } else {
        labelPassFirst.style.border ='1px solid green';
        labelPassSecond.style.border ='1px solid green';
    }
}