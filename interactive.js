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

// Interaktive invalid register input
const firstName = document.getElementById("firstName");
const endName = document.getElementById("endName");
const emailInput = document.getElementById("emailInput");
const password = document.getElementById("password");

// Firstname
firstName.addEventListener("focus", (event) => {
    firstName.classList.remove("is-invalid")
})

firstName.addEventListener("blur", (event) => {
    if (firstName.value === "") {
        firstName.classList.add("is-invalid")
    } else {
        firstName.classList.remove("is-invalid")
    }
})

// Endname
endName.addEventListener("focus", (event) => {
    endName.classList.remove("is-invalid")
})

endName.addEventListener("blur", (event) => {
    if (endName.value === "") {
        endName.classList.add("is-invalid")
    } else {
        endName.classList.remove("is-invalid")
    }
})

// Email
emailInput.addEventListener("focus", (event) => {
    emailInput.classList.remove("is-invalid")
})

emailInput.addEventListener("blur", (event) => {
    if (emailInput.value === "") {
        emailInput.classList.add("is-invalid")
    } else {
        emailInput.classList.remove("is-invalid")
    }
})

// Password
password.addEventListener("focus", (event) => {
    password.classList.remove("is-invalid")
})

password.addEventListener("blur", (event) => {
    if (password.value === "") {
        password.classList.add("is-invalid")
    } else {
        password.classList.remove("is-invalid")
    }
})

