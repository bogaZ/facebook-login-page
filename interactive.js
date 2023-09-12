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


// Interactive Opsional Gender
const khusus = document.getElementById("khusus");
const pria = document.getElementById('pria')
const perempuan = document.getElementById('perempuan')
const opsional = document.getElementById('opsional');

function toggleOpsional() {
    if (khusus.checked) {
        opsional.style.display = 'block'
    } else if (pria.checked) {
        opsional.style.display = 'none'
    } else if (perempuan.checked) {
        opsional.style.display = 'none'
    } else {
        opsional.style.display = 'none'
    }
}

khusus.addEventListener("change", toggleOpsional);
pria.addEventListener("change", toggleOpsional);
perempuan.addEventListener("change", toggleOpsional);

// Dropdown tanggal lahir
var tangalLahir = document.getElementById('tanggal-lahir')
var today = new Date();
var selectedDate = today.getDate();

for (var a = 1; a <= 31; a++) {
    var newOption = document.createElement("option"); // Membuat elemen <option> baru di setiap iterasi
    newOption.value = a;
    newOption.textContent = a;
    tangalLahir.appendChild(newOption);
    if (a === selectedDate) {
        newOption.selected = true
    }
}

// Dropdown Bulan Lahir
var thisMonth = today.getMonth()
var monthNamesShort = [
    "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
    "Jul", "Agu", "Sep", "Okt", "Nov", "Des"
];
var bulanLahir = document.getElementById('bulan-lahir')

for (var a = 1; a <= 12; a++) {
    var newOption = document.createElement("option")
    newOption.value = a
    newOption.textContent = monthNamesShort[a - 1]
    bulanLahir.appendChild(newOption)
    if (a === (thisMonth + 1)) {
        newOption.selected = true
    }
}

// Dropdown Tahun Lahir
var thisYear = today.getFullYear()
var tahunLahir = document.getElementById('tahun-lahir')

for (var a = 1905; a <= 2023; a++) {
    var newOption = document.createElement("option")
    newOption.value = a
    newOption.textContent = a
    tahunLahir.appendChild(newOption)
    if (a === thisYear) {
        newOption.selected = true
    }
}





