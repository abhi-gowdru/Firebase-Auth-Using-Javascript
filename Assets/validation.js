const usr_email = document.getElementById('user_email');
const usr_passwd = document.getElementById('user_passwd');

export function validEmail() {
    var uemail = document.getElementById('user_email');
    var emailerr = document.getElementById('email_err');
    if (uemail.value == "" || uemail.value == null) {
        uemail.classList.remove("is-valid");
        uemail.classList.add("is-invalid");
        emailerr.innerHTML = "E-mail Address is required";
        return false;
    } else {
        uemail.classList.remove("is-invalid");
        uemail.classList.add("is-valid");
        emailerr.innerHTML = "";
        return true;
    }
}

export function validPasswd() {
    var upaaswd = document.getElementById('user_passwd');
    var passwderr = document.getElementById('passwd_err');
    if (upaaswd.value == "" || upaaswd.value == null) {
        upaaswd.classList.remove("is-valid");
        upaaswd.classList.add("is-invalid");
        passwderr.innerHTML = "Password is required";
        return false;
    } else {
        upaaswd.classList.remove("is-invalid");
        upaaswd.classList.add("is-valid");
        passwderr.innerHTML = "";
        return true;
    }
}

export function validConfPasswd() {
    var uconfpaaswd = document.getElementById('user_confpasswd');
    var upaaswd = document.getElementById('user_passwd');
    var confpasswderr = document.getElementById('confpasswd_err');
    if (uconfpaaswd.value == "" || uconfpaaswd.value == null) {
        uconfpaaswd.classList.remove("is-valid");
        uconfpaaswd.classList.add("is-invalid");
        confpasswderr.innerHTML = "Confirm Password is required";
        return false;
    } else if (uconfpaaswd.value != upaaswd.value) {
        uconfpaaswd.classList.remove("is-valid");
        uconfpaaswd.classList.add("is-invalid");
        confpasswderr.innerHTML = "Confirm Password is mismatched";
        return false;
    }
    else {
        uconfpaaswd.classList.remove("is-invalid");
        uconfpaaswd.classList.add("is-valid");
        confpasswderr.innerHTML = "";
        return true;
    }
}