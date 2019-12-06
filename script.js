var username = document.forms['vform']['username'];
var email = document.forms['vform']['email'];
var password = document.forms['vform']['password'];
var confirm = document.forms['vform']['confirm'];

/*ERRORS*/
var name_error = document.getElementById("name_error");
var email_error = document.getElementById("email_error");
var password_error = document.getElementById("password_error");

username.addEventListener('blur', nameVerify, true);
email.addEventListener('blur', emailVerify, true);
password.addEventListener('blur', passwordVerify, true);

function Validate() {
    if (username.value == "") {
        username.style.border = "1px dotted red";
        document.getElementById('username_div').style.color = "red";
        name_error.textContent = "Username is requied";
        username.focus();

        return false;

    }
    if (username.value.length < 3) {
        username.style.border = "1px dotted red";
        document.getElementById('username_div').style.color = "red";
        name_error.textContent = "Username must be at least 3 characters";
        username.focus();
        return false;
    }
    if (email.value == "") {
        email.style.border = "1px dotted red";
        document.getElementById('email_div').style.color = "red";
        email_error.textContent = "Email is requied";
        email.focus();
        return false;
    }
    if (password.value == "") {
        password.style.border = "1px dotted red";
        document.getElementById('password_div');
        password_error.textContent = "Password is requied";
        password.focus();
        return false;
    }
    if (confirm.value == "") {
        confirm.style.border = "1px dotted red";
        document.getElementById('confirm_div');
        confirm_error.textContent = "Confirm the password";
        confirm.focus();
        return false;
    }
    if (confirm.value != password.value) {
        password.style.border = "1px dotted red";
        document.getElementById('password_div');
        password_error.textContent = "Two password don't match";
        password.focus();
        return false;

    }
}

function nameVerify() {
    if (username.value != "") {
        username.style.border = "1px solid green";
        document.getElementById('username_div').style.color = "green";
        name_error.innerHTML = "";
        return true;

    }
}

function emailVerify() {
    if (email.value != "") {
        email.style.border = "1px solid green";
        document.getElementById('username_div').style.color = "green";
        email_error.innerHTML = "";
        return true;
    }
}

function passwordVerify() {
    if (password.value != "") {
        password.style.border = "1px solid green";
        document.getElementById('username_div').style.color = "green";
        password_error.innerHTML = "";
        return true;
    }


    if (password.value === confirm.value) {
        password.style.border = "1px dotted red";
        document.getElementById('password_div').style.color = "red";
        password_error.innerHTML = "";
        return true;
    }
}
