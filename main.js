const login = document.getElementById('login');
const loginError = document.getElementById('ilogin');
const password = document.getElementById('password');
const passwordError = document.getElementById('ipassword');

const button = document.querySelector('button');

const checkLogin = () => {
     if(login.value.length < 4) {
        alert("Login is too short");    
        button.disabled = true; 
    } if(login.value.length > 20) {
        alert("Login is too long");    
        button.disabled = true;     
    } else {
        loginError.textContent = "";    
        button.disabled = false; 
    }
}

const checkPassword = () => {
    if(password.value.lenght = 0) {
        loginError.textContent="Fill out the form";
    } if(password.value.length < 4) {
        alert("Password is too short");
        button.disabled = true;
    } if(password.value.length > 20) {
        alert("Password is too long");    
        button.disabled = true;    
    } else {
        passwordError.textContent = "";
    }
}

const checkForm = () => {
    checkLogin();
    checkPassword();
}

button.addEventListener('click', checkForm);








// const loginInput = document.getElementById('login');
// const passwordInput = document.getElementById('password');

// loginInput.addEventListener('submit', e => {
//     e.preventDefault();

//     if(loginInput.value.length <= 0) {
//         alert('Uzupelnij login');
//     }
//     else {
//         e.target.submit();
//     }
// })

// function isFilled(input) {
//     if(loginInput.value == "") {
//        document.getElementById("ilogin").innerHTML = "uzupełnij";
//         return false;
//     }
//     else {
//         return true;
//     }
// }



// window.onload = function () {
//     document.getElementById("article").onsubmit = function () {
//         if (isFilled(this.name)) {
//             return false;
//         }
//         else {
//             return true;
//         }

//     }

