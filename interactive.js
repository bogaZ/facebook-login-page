// interactive for visibility password

const passwordInput = document.getElementById(
    "exampleInputPassword1"
);
const iconPassword =
    document.getElementById("iconPassword");
const showPassword =
    document.getElementById("showPassword");

showPassword.addEventListener("click", (event) => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        iconPassword.classList.remove("fa-eye-slash");
        iconPassword.classList.add("fa-eye");
    } else {
        passwordInput.type = "password";
        iconPassword.classList.remove("fa-eye");
        iconPassword.classList.add("fa-eye-slash");
    }
});

passwordInput.addEventListener("input", (event) => {
    updateIconVisibility();
});

function updateIconVisibility() {
    if (passwordInput.value !== "") {
        showPassword.style.display = "block";
    } else {
        showPassword.style.display = "none";
    }
}