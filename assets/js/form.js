
const btnSend  = document.querySelector('#sent');
const form = document.querySelector('#contact');

// variable for fields
const inputName = document.querySelector('#nameInput');
const inputMail = document.querySelector('#emailInput');
const messageInput = document.querySelector('#messageInput');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners()
function eventListeners() {
    document.addEventListener('DOMContentLoaded', startApp);
    // form fields
    inputName.addEventListener('blur', validateForm);
    inputMail.addEventListener('blur', validateForm);
    messageInput.addEventListener('blur', validateForm);

    form.addEventListener('submit', sendEmail);
}

function startApp(){
    btnSend.disabled = true;
    btnSend.classList.add('contact__button-notAllowed');
}

function validateForm(e){
   
    if(e.target.value.length > 0) {
        const error = document.querySelector('p.contact__form-mError');
        if(error){
            error.remove();
        }
    }else{
        showError('All fields are required');
    }
    if( e.target.type === 'email') {
        // we use a regular expression
        if(er.test(inputMail.value)){
            const error = document.querySelector('p.contact__form-mError');

            if(error){
                error.remove();
            }
        }else {
            showError('Invalid email')
        }
    }
    if( inputName.value != '' && er.test(inputMail.value) && messageInput.value != ''){
        console.log('hola')
        btnSend.disabled = false;
        btnSend.classList.remove('contact__button-notAllowed');
    }else{
        btnSend.disabled = true;
        btnSend.classList.add('contact__button-notAllowed');
    }
}

function showError(message){
    const messageError = document.createElement('p');
    messageError.textContent = message;
    messageError.classList.add('contact__form-mError');
    const errores = document.querySelectorAll('.contact__form-mError');
    
    if(errores.length === 0) {
        form.appendChild(messageError);
    }
    // Remove message
    setTimeout(() => {
        messageError.remove();
    }, 5000);
}

// Send the email
function sendEmail(e){
    e.preventDefault();
    // message saying that it was sent correctly
    const paragraph = document.createElement('p');
    paragraph.textContent = 'The message was sent correctly';
    paragraph.classList.add('contact__form-mSent');

    form.appendChild(paragraph);
    setTimeout(() => {
        paragraph.remove(); // remove the success message
        resetform();
    }, 3000);

}

// 
function resetform(){
    form.reset();
    startApp()
}
