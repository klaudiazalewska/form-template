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


login.addEventListener('click', checkLogin);
password.addEventListener('click', checkPassword);

const getCommentsIds = (comments) => {
    return comments.map((comment) => comment.postId);
};

const incrementCommentsIds = (comments) => {
    
}

fetch('https://jsonplaceholder.typicode.com/comments')
.then((res) => res.json())
.then(comments => {
    console.log(getCommentsIds(comments));
});


