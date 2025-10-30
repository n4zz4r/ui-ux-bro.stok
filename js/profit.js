document.addEventListener('DOMContentLoaded',function(){
  function getProdukList(){return JSON.parse(localStorage.getItem('produk_list')||'[]');}
  function renderList(){
    let list=getProdukList();
    let wrap=document.getElementById('profitList');
    wrap.innerHTML='';
    list.forEach(pr=>{
      let margin=Math.round((pr.hjual-pr.hbeli)/pr.hbeli*100);
      let badge='',text='',cl='';
      if(margin<10)      {badge='Rugi',cl='margin-badge rugi';}
      else if(margin<21){badge='Cukup',cl='margin-badge cukup';}
      else if(margin<41){badge='Baik',cl='margin-badge baik';}
      else              {badge='Sangat Baik',cl='margin-badge';}
      wrap.innerHTML+=`<div class='profit-card'><div class='profit-nama'>${pr.nama}</div><div class='profit-hb'>Beli: Rp${pr.hbeli}</div><div class='profit-hj'>Jual: Rp${pr.hjual}</div><div class='profit-margin'><span class='${cl}'>${badge}</span> ${margin||0}%</div></div>`;
    });
  }
  function renderChart(){
    let list=getProdukList();
    let label=list.map(p=>p.nama),margin=list.map(p=>Math.round((p.hjual-p.hbeli)/p.hbeli*100));
    new Chart(document.getElementById('profitChart').getContext('2d'),{
      type:'bar',data:{labels:label,datasets:[{label:'Margin (%)',backgroundColor:'#1976D2bb',data:margin,borderRadius:7}]},
      options:{
        plugins:{legend:{display:false}},
        responsive:true,
        scales:{y:{beginAtZero:true,max:100,ticks:{color:'#7C4DFF'}},x:{ticks:{color:'#1976D2'}}},
      }
    });
  }
  renderList();renderChart();
});
