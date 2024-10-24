const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const button = document.getElementById('btn');
const errorMessage = document.querySelector('error-message');


button.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    if(!email.includes('@gmail.com')) {
        alert('Please add a valid @gmail.com email');
        return;
    }

    if (email === 'malikumair972@gmail.com' && password === 'abcd1234') {
       
        window.location.href='https://github.com/MalikUmair972';
    }  else {
        emailInput.style.color = 'red';
        passwordInput.style.color = 'red';
        passwordInput.style.borderBlockColor = 'red'
        emailInput.style.borderBlockColor = 'red'
    }
    if (password.length < 8) {
        alert('Password must be at least 8 characters long');
    } 

});


