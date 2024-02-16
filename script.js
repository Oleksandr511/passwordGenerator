const field = document.querySelector('.password_field');
const button = document.querySelector('.btn');
const numb = document.querySelector('.numb_checkbox');
const symb = document.querySelector('.symb_checkbox');
const lengthItem = document.querySelector('.length_item');
const lengthRange = document.querySelector('.length_range');
const charsNumbers = '1234567890';
const charsSymbols = '!@#$%^&*()_{}[]';
const charsLetters = 'QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm'
let text = '';

lengthRange.addEventListener('input', function () {
    lengthItem.value = lengthRange.value;
});

lengthItem.addEventListener('input', function () {
    lengthRange.value = lengthItem.value;
});

button.addEventListener('click', () => {
    let password = '';

    text = charsLetters;
    if (numb.checked) {
        text += charsNumbers;
    }
    if (symb.checked) {
        text += charsSymbols;
    }

    for (let i = 0; i < lengthItem.value; i++) {
        password += text[Math.floor(Math.random() * text.length)];
    }
    field.innerHTML = password;
})

function copuFunc() {
    let copyText = document.querySelector('.password_field');
    let tempInput = document.createElement('input');
    tempInput.value = copyText.textContent;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(tempInput.value);
    alert('text copied: ' + tempInput.value);
    document.body.removeChild(tempInput);
}





