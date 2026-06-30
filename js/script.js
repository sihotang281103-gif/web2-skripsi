/* ==========================================
   LOGIN
========================================== */

function loginBerhasil() {

    let username = document.getElementById("loginUsername").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    // Ambil data user dari Local Storage
    let data = JSON.parse(localStorage.getItem("user"));

    if (data == null) {
        alert("Silakan register terlebih dahulu!");
        return;
    }

    if (username === data.username && password === data.password) {

        localStorage.setItem("login", "true");

        alert("Login berhasil!");

        window.location.href = "dashboard.html";

    } else {

        alert("Username atau Password salah!");

    }

}

/* ==========================================
   REGISTER
========================================== */

function registerBerhasil() {

    let nama = document.getElementById("nama").value.trim();
    let email = document.getElementById("email").value.trim();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let konfirmasi = document.getElementById("konfirmasi").value.trim();

    if (
        nama === "" ||
        email === "" ||
        username === "" ||
        password === "" ||
        konfirmasi === ""
    ) {

        alert("Semua data harus diisi!");

        return;

    }

    if (password !== konfirmasi) {

        alert("Konfirmasi password tidak sesuai!");

        return;

    }

    let user = {

        nama: nama,
        email: email,
        username: username,
        password: password

    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registrasi berhasil!");

    window.location.href = "login.html";

}

/* ==========================================
   SIMPAN DATA MAHASISWA
========================================== */

function simpanData() {

    alert("Data mahasiswa berhasil disimpan.");

}

/* ==========================================
   LOGOUT
========================================== */

function logout() {

    let keluar = confirm("Apakah Anda yakin ingin logout?");

    if (keluar) {

        localStorage.removeItem("login");

        window.location.href = "index.html";

    }

}

/* ==========================================
   DASHBOARD
========================================== */

window.onload = function () {

    // Jika ada tulisan welcomeUser
    let welcome = document.getElementById("welcomeUser");

    if (welcome) {

        let data = JSON.parse(localStorage.getItem("user"));

        if (data) {

            welcome.innerHTML =
                "Selamat Datang, <b>" + data.nama + "</b>";

        }

    }

};