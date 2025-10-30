document.addEventListener('DOMContentLoaded', function () {
  // Splash screen logic
  const splash = document.getElementById('splash');
  setTimeout(() => {
    if (splash) splash.classList.remove('active');
  }, 1500);

  // Toggle login/register form
  const registerCard = document.getElementById('registerCard');
  const showRegister = document.getElementById('showRegister');
  const showLogin = document.getElementById('showLogin');

  if (showRegister) {
    showRegister.onclick = function(e) {
      e.preventDefault();
      document.querySelector('.auth-card').style.display = 'none';
      registerCard.classList.add('active');
    };
  }
  if (showLogin) {
    showLogin.onclick = function(e) {
      e.preventDefault();
      document.querySelector('.auth-card').style.display = 'block';
      registerCard.classList.remove('active');
    };
  }

  // Toggle password visibility
  const togglePassword = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('password');
  if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', function() {
      const type = passwordInput.type === 'password' ? 'text' : 'password';
      passwordInput.type = type;
      this.querySelector('span').textContent = type === 'password' ? 'visibility_off' : 'visibility';
    });
  }

  // Snackbar function
  function showSnackbar(msg, success = false) {
    const snackbar = document.getElementById('snackbar');
    if (snackbar) {
      snackbar.textContent = msg;
      snackbar.className = 'snackbar active' + (success ? ' snackbar-success' : '');
      setTimeout(() => snackbar.className = 'snackbar', 2800);
    }
  }

  // Simple session mock, just for demo (use localStorage)
  const session = {
    login(email, nama) {
      localStorage.setItem('stokbro_user', JSON.stringify({ email, nama }));
    },
    logout() {
      localStorage.removeItem('stokbro_user');
    },
    user() {
      return JSON.parse(localStorage.getItem('stokbro_user') || 'null');
    }
  };

  // Login form validation
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.onsubmit = function(e) {
      e.preventDefault();
      let valid = true;
      const email = loginForm.email.value.trim();
      const password = loginForm.password.value.trim();
      // Validate email
      const emailError = document.getElementById('emailError');
      if (!email.match(/^\S+@\S+\.\S+$/)) {
        emailError.textContent = 'Format email tidak valid.';
        valid = false;
      } else {
        emailError.textContent = '';
      }
      // Validate password
      const passwordError = document.getElementById('passwordError');
      if (password.length < 5) {
        passwordError.textContent = 'Minimal 5 karakter.';
        valid = false;
      } else {
        passwordError.textContent = '';
      }
      if (!valid) return;
      // Simulasi cek user (skip real API for now)
      // Jika register, simpan ke localStorage, kalau login, cek di localStorage
      const regUser = JSON.parse(localStorage.getItem(`user_${email}`) || 'null');
      if (regUser && regUser.password === password) {
        session.login(email, regUser.nama);
        showSnackbar('Login berhasil!', true);
        setTimeout(() => window.location.href = 'dashboard.html', 1200);
      } else {
        showSnackbar('Email atau password salah!', false);
      }
    };
  }

  // Register form validation
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.onsubmit = function(e) {
      e.preventDefault();
      let valid = true;
      const nama = registerForm.regNama.value.trim();
      const email = registerForm.regEmail.value.trim();
      const password = registerForm.regPassword.value.trim();
      const password2 = registerForm.regPassword2.value.trim();
      // Validate nama
      document.getElementById('regNamaError').textContent = nama.length >= 2 ? '' : 'Nama tidak boleh kosong';
      valid = valid && nama.length >= 2;
      // Validate email
      document.getElementById('regEmailError').textContent = email.match(/^\S+@\S+\.\S+$/) ? '' : 'Format email tidak valid.';
      valid = valid && email.match(/^\S+@\S+\.\S+$/);
      // Validate password
      document.getElementById('regPasswordError').textContent = password.length >= 5 ? '' : 'Password minimal 5 karakter.';
      valid = valid && password.length >= 5;
      document.getElementById('regPassword2Error').textContent = (password2 === password) ? '' : 'Konfirmasi tidak cocok.';
      valid = valid && (password2 === password);
      // Sudah ada?
      if (localStorage.getItem(`user_${email}`)) {
        document.getElementById('regEmailError').textContent = 'Email sudah terdaftar!';
        valid = false;
      }
      if (!valid) return;
      // Simulasi simpan user
      localStorage.setItem(`user_${email}`, JSON.stringify({ email, password, nama }));
      showSnackbar('Registrasi berhasil, silakan login.', true);
      setTimeout(() => {
        registerCard.classList.remove('active');
        document.querySelector('.auth-card').style.display = 'block';
      }, 1200);
    };
  }
});
