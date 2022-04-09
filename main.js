const form = document.querySelector('form');
const login = document.getElementById('login');
const loginError = document.getElementById('ilogin');
const password = document.getElementById('password');
const passwordError = document.getElementById('ipassword');

const button = document.querySelector('button');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (login.value.length < 4) {
        loginError.textContent = "Login is too short";
    }
    if (login.value.length > 20) {
        loginError.textContent = "Login is too long";
    }

    if (login.value.length >= 4 && login.value.length <=20) {
        loginError.textContent = "";
    }

    if (password.value.length < 4) {
        passwordError.textContent = "Password is too short";
    }
    if (password.value.length > 20) {
        passwordError.textContent = "Password is too long";
    }
    if (password.value.length >= 4 && password.value.length <= 20) {
        passwordError.textContent = "";
    }

}) 


const getCommentsIds = (comments) => {
    return comments.map((comment) => comment.postId);
};

const incrementCommentsIds = (comments) => {
    let commentsList = comments.map((comment) => comment.postId);
    for (comment of commentsList) {
        for (let i=0; i <= commentsList.length; i++) {
            let newVaule = `${comment} + ${[i]}`;
            return newVaule;
        }
    }
    }


fetch('https://jsonplaceholder.typicode.com/comments')
.then((res) => res.json())
.then(comments => {
    console.log(getCommentsIds(comments));
});


