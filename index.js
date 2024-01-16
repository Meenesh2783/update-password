let updatePasswordFormEl = document.getElementById("updatePasswordForm");

let newPasswordEl = document.getElementById("newPassword");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");

let confirmPasswordEl = document.getElementById("confirmPassword");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");

let updateBtnEl = document.getElementById("updateBtn");

let validateNewPassword = function() {
    if (newPasswordEl.value === "") {
        newPasswordErrMsgEl.textContent = "Required*";
    } else {
        newPasswordErrMsgEl.textContent = "";
    }
};
let validateConfirmPassword = function() {
    let newpassword = newPasswordEl.value;
    let confirmpassword = confirmPasswordEl.value;

    if (newpassword !== confirmpassword) {
        confirmPasswordErrMsgEl.textContent = "Password must be same";
    } else {
        confirmPasswordErrMsgEl.textContent = "";
    }
};

newPasswordEl.addEventListener("blur", validateNewPassword);
confirmPasswordEl.addEventListener("blur", validateConfirmPassword);

updatePasswordFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateNewPassword();
    validateConfirmPassword();
});