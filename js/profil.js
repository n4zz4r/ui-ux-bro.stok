document.addEventListener('DOMContentLoaded',function(){
  // Isi user info
  let u=JSON.parse(localStorage.getItem('stokbro_user')||'{}');
  document.getElementById('akunNama').textContent=u.nama||'-';
  document.getElementById('akunEmail').textContent=u.email||'-';
  document.getElementById('btnLogout').onclick=function(){
    localStorage.removeItem('stokbro_user');
    window.showSnackbar('Logout berhasil!',true);
    setTimeout(()=>window.location.href='index.html',800);
  };
  document.getElementById('btnUbahPass').onclick=function(){
    window.showSnackbar('Ganti password via fitur coming soon!',false);
  };
});
