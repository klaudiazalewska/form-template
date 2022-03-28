function isFilled(input) {
    if(input.login.value == "") {
       alert("źle");
        return false;
    }
    else {
        return true;
    }
}



window.onload = function () {
    document.getElementById("article").onsubmit = function () {
        if (isFilled(this.name)) {
            return false;
        }
        else {
            return true;
        }

    }
}
