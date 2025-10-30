function toCSV(items,header){
  let csv=[header.join(',')];
  items.forEach(obj=>{
    csv.push(header.map(h=>`"${obj[h]||''}"`).join(','));
  });
  return csv.join('\r\n');
}
function downloadFile(filename,content){
  let link=document.createElement('a');
  link.setAttribute('href','data:text/csv;charset=utf-8,'+encodeURIComponent(content));
  link.setAttribute('download',filename);
  document.body.appendChild(link);link.click();document.body.removeChild(link);
}
document.getElementById('btnEksporProduk').onclick=function(){
  let items=JSON.parse(localStorage.getItem('produk_list')||'[]');
  if(!items.length)return window.showSnackbar('Tidak ada data produk!');
  let csv=toCSV(items,['id','nama','brand','sku','stok','hbeli','hjual']);
  downloadFile('produk_stokbro.csv',csv);window.showSnackbar('Export produk berhasil!',true);
};
document.getElementById('btnEksporRiwayat').onclick=function(){
  let items=JSON.parse(localStorage.getItem('riwayat_list')||'[]');
  if(!items.length)return window.showSnackbar('Tidak ada data riwayat!');
  let csv=toCSV(items,['tanggal','produk','jenis','jumlah','pengguna','catatan']);
  downloadFile('riwayat_stokbro.csv',csv);window.showSnackbar('Export riwayat berhasil!',true);
};
