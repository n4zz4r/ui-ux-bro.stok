document.addEventListener('DOMContentLoaded', function () {
  // Helper: Dummy seed products if no LS
  const sampleProduk = [
    {id:1,nama:'Aqua 600ml',brand:'Aqua',sku:'AQA06',stok:24,hbeli:3500,hjual:5000,margin:42,img:'assets/img/sample1.jpg'},
    {id:2,nama:'Indomie Goreng',brand:'Indofood',sku:'INDMGR',stok:11,hbeli:2700,hjual:3500,margin:29,img:'assets/img/sample2.jpg'},
    {id:3,nama:'Kapal Api 65g',brand:'Kapal Api',sku:'KAPI65',stok:30,hbeli:1200,hjual:2500,margin:52,img:'assets/img/sample3.jpg'}
  ];
  if(!localStorage.getItem('produk_list')){
    localStorage.setItem('produk_list', JSON.stringify(sampleProduk));
  }
  // Fetch produk
  function getProdukList(){
    return JSON.parse(localStorage.getItem('produk_list')||'[]');
  }
  function setProdukList(data){
    localStorage.setItem('produk_list', JSON.stringify(data));
  }
  // Render kartu produk
  function renderProduk(){
    const list = getProdukList();
    const wrap = document.getElementById('produkList');
    if(!wrap) return;
    wrap.innerHTML = '';
    if(list.length===0){
      wrap.innerHTML = '<div style="text-align:center;color:#7C4DFF;padding:14px;">Belum ada produk</div>';
      return;
    }
    list.forEach(pr=>{
      let badge = '';
      let margin = Math.round((pr.hjual-pr.hbeli)/pr.hbeli*100);
      if(margin < 10) badge = '<span class="margin-badge rugi">Rugi</span>';
      else if(margin < 21) badge = '<span class="margin-badge cukup">Cukup</span>';
      else if(margin < 41) badge = '<span class="margin-badge baik">Baik</span>';
      else badge = '<span class="margin-badge" style="background:linear-gradient(90deg,#1976D2,#7C4DFF)">Sangat Baik</span>';
      wrap.innerHTML += `
      <div class='produk-card'>
        <img src='${pr.img||'assets/img/noimg.png'}' class='produk-img' onerror="this.src='assets/img/noimg.png'"/>
        <div class='produk-info'>
          <div class='produk-title'>${pr.nama}</div>
          <div class='produk-brand'>${pr.brand||'-'} <span class='produk-sku'>[${pr.sku}]</span></div>
          <div>Stok: <b>${pr.stok}</b> &nbsp; Harga: <span class='produk-harga'>Rp${pr.hjual}</span> ${badge}</div>
        </div>
        <button class='btn-prod-action' onclick='editProduk(${pr.id})'><span class='material-icons'>edit</span></button>
        <button class='btn-prod-action' onclick='hapusProduk(${pr.id})'><span class='material-icons'>delete</span></button>
      </div>`;
    });
  }
  // Utility
  window.showSnackbar = function(msg,success=false){
    let sb=document.getElementById('snackbar');
    sb.textContent=msg;
    sb.className='snackbar active'+(success?' snackbar-success':'');
    setTimeout(()=>sb.className='snackbar',2100);
  };

  // Modal logic
  const modal = document.getElementById('produkModal');
  const btnTambah = document.getElementById('btnTambahProduk');
  const btnBatal = document.getElementById('batalProduk');
  btnTambah.onclick = ()=> showProdukModal();
  btnBatal.onclick = closeProdukModal;
  function showProdukModal(prod=null){
    modal.classList.add('show');
    resetForm();
    if(prod){
      document.getElementById('produkModalTitle').textContent='Edit Produk';
      document.getElementById('namaProduk').value=prod.nama;
      document.getElementById('brandProduk').value=prod.brand;
      document.getElementById('skuProduk').value=prod.sku;
      document.getElementById('hargaBeli').value=prod.hbeli;
      document.getElementById('hargaJual').value=prod.hjual;
      document.getElementById('fotoPreview').src=prod.img;
      document.getElementById('fotoPreview').style.display='block';
      modal.setAttribute('data-edit',prod.id);
    }else{
      document.getElementById('produkModalTitle').textContent='Tambah Produk';
      modal.removeAttribute('data-edit');
    }
  }
  function closeProdukModal(){
    modal.classList.remove('show');
  }
  // Dismiss modal click outside
  modal.onclick = function(e){ if(e.target===modal) closeProdukModal(); };
  // Foto preview & max 5MB
  document.getElementById('fotoProduk').onchange=function(e){
    const file = e.target.files[0];
    let errorF = document.getElementById('errorFotoProduk');
    if(file){
      if(file.size>5*1024*1024){
        errorF.textContent='Maksimal 5 MB.';
        this.value='';
        document.getElementById('fotoPreview').style.display='none';
        return;
      }
      errorF.textContent='';
      const reader = new FileReader();
      reader.onload = function(ev){
        document.getElementById('fotoPreview').src=ev.target.result;
        document.getElementById('fotoPreview').style.display='block';
      };
      reader.readAsDataURL(file);
    }else{
      document.getElementById('fotoPreview').style.display='none';
    }
  };
  // Validasi & submit form
  document.getElementById('produkForm').onsubmit=function(e){
    e.preventDefault();
    let nama = this.namaProduk.value.trim();
    let sku = this.skuProduk.value.trim();
    let hb = Number(this.hargaBeli.value||0);
    let hj = Number(this.hargaJual.value||0);
    let valid = true;
    if(nama.length<2){
      document.getElementById('errorNamaProduk').textContent='Nama wajib diisi'; valid=false;
    }else document.getElementById('errorNamaProduk').textContent='';
    if(sku.length<3){
      document.getElementById('errorSkuProduk').textContent='SKU min 3 karakter'; valid=false;
    }else document.getElementById('errorSkuProduk').textContent='';
    if(hb<0){
      document.getElementById('errorHargaBeli').textContent='Harga beli tidak valid';valid=false;
    }else document.getElementById('errorHargaBeli').textContent='';
    if(hj<=hb){
      document.getElementById('errorHargaJual').textContent='Harus > harga beli';valid=false;
    }else document.getElementById('errorHargaJual').textContent='';
    if(!valid) return;
    let img;
    if(this.fotoProduk.files[0]){
      img = document.getElementById('fotoPreview').src;
    }else if(modal.getAttribute('data-edit')){
      const id = Number(modal.getAttribute('data-edit'));
      img = getProdukList().find(p=>p.id===id).img;
    }
    // Add/edit logic
    let produk = getProdukList();
    if(modal.getAttribute('data-edit')){
      // Edit mode
      const id = Number(modal.getAttribute('data-edit'));
      produk = produk.map(p=> p.id===id ? {...p,
        nama:nama,
        brand:this.brandProduk.value.trim(),
        sku:sku,
        hbeli:hb,
        hjual:hj,
        img
      } : p);
      setProdukList(produk);
      showSnackbar('Produk berhasil diupdate!',true);
    }else{
      // Cek SKU unik
      if(produk.some(p=>p.sku.toLowerCase()===sku.toLowerCase())){
        showSnackbar('SKU sudah ada!',false);
        return;
      }
      const nextid = Math.max(0,...produk.map(p=>p.id||0))+1;
      produk.push({id:nextid,nama:nama,brand:this.brandProduk.value.trim(),sku:sku,stok:0,hbeli:hb,hjual:hj,margin:0,img});
      setProdukList(produk);
      showSnackbar('Produk ditambahkan!',true);
    }
    closeProdukModal();
    renderProduk();
  };
  window.editProduk=function(id){
    const prod=getProdukList().find(p=>p.id===id);
    showProdukModal(prod);
  };
  window.hapusProduk=function(id){
    let produk=getProdukList();
    produk=produk.filter(p=>p.id!==id);
    setProdukList(produk);
    renderProduk();
    showSnackbar('Produk dihapus!',true);
  };
  function resetForm(){
    document.getElementById('produkForm').reset();
    document.getElementById('fotoPreview').style.display='none';
    ['errorNamaProduk','errorSkuProduk','errorHargaBeli','errorHargaJual','errorFotoProduk'].forEach(i=>
      document.getElementById(i).textContent='');
  }
  renderProduk();
});
