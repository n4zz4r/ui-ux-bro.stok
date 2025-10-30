document.addEventListener('DOMContentLoaded', function(){
  // Tab UI
  const tabBtns=document.querySelectorAll('.tab-btn');
  tabBtns.forEach(b=>b.onclick=function(){
    tabBtns.forEach(t=>t.classList.remove('active'));
    this.classList.add('active');
    document.querySelectorAll('.stok-form-section').forEach(s=>s.style.display='none');
    document.getElementById('formTab'+this.dataset.tab.charAt(0).toUpperCase()+this.dataset.tab.slice(1)).style.display='block';
  });
  // Produk dropdown
  function getProdukList(){
    return JSON.parse(localStorage.getItem('produk_list')||'[]');
  }
  function fillSelect(selId){
    const sel=document.getElementById(selId); sel.innerHTML='<option value="">Pilih Produk</option>';
    getProdukList().forEach(p=>{
      sel.innerHTML += `<option value="${p.id}">${p.nama}</option>`;
    });
  }
  fillSelect('produkMasuk');
  fillSelect('produkKeluar');
  fillSelect('produkOpname');

  // Submit, validasi, simpan ke riwayat
  function addRiwayat(data){
    let old=JSON.parse(localStorage.getItem('riwayat_list')||'[]');
    old.unshift(data); // push front
    localStorage.setItem('riwayat_list',JSON.stringify(old));
  }
  function submitForm(id,jenis,stokDelta){
    document.getElementById(id).onsubmit=function(e){
      e.preventDefault();
      let pid=this.querySelector('select').value;
      let produk=getProdukList().find(p=>String(p.id)===String(pid));
      if(!produk){
        window.showSnackbar('Pilih produk dulu!',false); return;
      }
      let jumlah=Number(this.querySelector('input[type=number]').value);
      let catatan=this.querySelector('input[type=text]').value;
      if(jumlah<=0 && jenis!=='opname'){window.showSnackbar('Jumlah harus >0',false);return;}
      // Update stok produk dan simpan ke localStorage
      let all=getProdukList().map(p=>{
        if(String(p.id)!==String(pid)) return p;
        if(jenis==='masuk') return {...p, stok:p.stok+jumlah };
        if(jenis==='keluar') return {...p, stok:Math.max(0,p.stok-jumlah) };
        if(jenis==='opname') return {...p, stok:jumlah };
        return p;
      });
      localStorage.setItem('produk_list',JSON.stringify(all));
      // Simpan ke riwayat
      let user=JSON.parse(localStorage.getItem('stokbro_user')||'{}');
      addRiwayat({ tanggal:new Date().toISOString().slice(0,10), produk:produk.nama, jenis, jumlah, pengguna:user.nama||'-', catatan });
      window.showSnackbar('Transaksi tersimpan!',true);
      setTimeout(()=>window.location.href='riwayat.html',1100);
    };
  }
  submitForm('formStokMasuk','masuk');
  submitForm('formStokKeluar','keluar');
  submitForm('formStokOpname','opname');
});
