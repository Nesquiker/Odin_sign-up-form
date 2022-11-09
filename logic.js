

function validatePassword() {
    const password = document.querySelector("input[name=password]");
    const confirm = document.querySelector("input[name=confirm_password]");
    const message = document.querySelector("span");
    if (password.value === confirm.value) {
        confirm.setCustomValidity('');
        message.textContent = "";

    } else {
        confirm.setCustomValidity("Passwords do not match");
        message.textContent = "*Passwords do not match";
    }
}

validatePassword();