const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const button = document.getElementById('btn');
const errorMessage = document.querySelector('error-message');


button.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    if (email === 'malikumair972' && password === 'abc123') {
       
        window.location.href='https://github.com/MalikUmair972';
    }  else {
        emailInput.style.color = 'red';
        passwordInput.style.color = 'red';
        passwordInput.style.borderBlockColor = 'red'
        emailInput.style.borderBlockColor = 'red'
    }
});


