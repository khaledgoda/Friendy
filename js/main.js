// Remember Me Toggle //

let rememberDiv = document.querySelector(`.togg`);
let rememberMe = document.querySelector(`.togg .circle`);

rememberDiv.addEventListener(`click`, ()=> {
    rememberDiv.classList.toggle(`active`);
    rememberMe.classList.toggle(`active-s`);
});

// Validation //

let form = document.getElementById('form-login');
let email = document.getElementById('email');
let password = document.getElementById('password');
let errors = document.querySelectorAll('.input-error');

function showError(index, message) {
    errors[index].textContent = message;
    errors[index].style.display = 'block';
}

function hideError(index) {
    errors[index].style.display = 'none';
}

function checkInputField(input, index, errorMessage) {
    input.addEventListener('blur', function() {
        if (input.value === '') {
            showError(index, errorMessage);
        } else {
            hideError(index);
        }
    });

    input.addEventListener('focus', function() {
        hideError(index);
    });
}

errors.forEach(error => error.style.display = 'none');

checkInputField(email, 0, 'Please enter your email');
checkInputField(password, 1, 'Please enter your Password and must be more than 8 characters');

form.addEventListener('submit', (event)=> {
    event.preventDefault();

    let hasError = false;

    if (email.value === '') {
        showError(0, 'Please enter your email');
        hasError = true;
    }

    if (password.value.length < 8) {
        showError(1, 'Password must be more than 8 characters');
        hasError = true;
    }

    if (!hasError && email.value === 'khaled@creativa.me' && password.value === 'lovecreativa') {
        window.location.href = 'home.html';
        return;
    }

    if (!hasError) {
        showError(1, 'Invalid email or password');
    }
});
