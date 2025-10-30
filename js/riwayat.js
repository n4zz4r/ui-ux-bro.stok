document.addEventListener('DOMContentLoaded',function(){
  function getData(){return JSON.parse(localStorage.getItem('riwayat_list')||'[]');}
  let page=1,perpage=8;
  function render(){
    let data=getData();
    const jenisFilter=document.getElementById('filterJenis');
    const tglFilter=document.getElementById('filterTanggal');
    // Filter
    if(jenisFilter.value) data=data.filter(d=>d.jenis===jenisFilter.value);
    if(tglFilter.value) data=data.filter(d=>d.tanggal===tglFilter.value);
    let tbody=document.querySelector('tbody');
    tbody.innerHTML='';
    let totalPage=Math.ceil(data.length/perpage)||1;
    if(page>totalPage) page=1;
    if(data.length===0){
      tbody.innerHTML='<tr><td colspan=5 style="color:#7C4DFF;text-align:center">Tidak ada data.</td></tr>';
      document.getElementById('pageIndicator').textContent='1';
      return;
    }
    data.slice((page-1)*perpage,page*perpage).forEach(d=>{
      tbody.innerHTML+=`<tr><td>${d.tanggal}</td><td>${d.produk}</td><td>${d.jenis}</td><td>${d.jumlah}</td><td>${d.pengguna}</td></tr>`;
    });
    document.getElementById('pageIndicator').textContent=page+'/'+totalPage;
  }
  document.getElementById('filterJenis').onchange=()=>{page=1;render();};
  document.getElementById('filterTanggal').onchange=()=>{page=1;render();};
  document.getElementById('filterBtn').onclick=()=>{page=1;render();};
  document.getElementById('prevPage').onclick=()=>{if(page>1){page--;render();}};
  document.getElementById('nextPage').onclick=()=>{page++;render();};
  render();
});
