document.addEventListener('DOMContentLoaded', function () {
  // Dummy data statistik
  // Dalam pengembangan nyata, ambil dari backend
  const summary = {
    totalProduk: 18,
    stokRendah: 4,
    transaksi: 5,
    chart: {
      label: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
      masuk: [15, 11, 20, 19, 9, 8, 12],
      keluar: [7, 13, 12, 8, 10, 11, 6]
    }
  };
  document.getElementById('sumProduk').textContent = summary.totalProduk;
  document.getElementById('sumStokRendah').textContent = summary.stokRendah;
  document.getElementById('sumTransaksi').textContent = summary.transaksi;

  // CHART.JS
  const ctx = document.getElementById('stokChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: summary.chart.label,
      datasets: [
        {
          label: 'Stok Masuk',
          backgroundColor: '#FF7B00dd',
          borderColor: '#FF7B00',
          data: summary.chart.masuk,
          borderRadius: 8,
        },
        {
          label: 'Stok Keluar',
          backgroundColor: '#ffe2ccdd',
          borderColor: '#ffae69',
          data: summary.chart.keluar,
          borderRadius: 8,
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            font: { size: 13, family: 'Roboto' },
            color: '#8a7',
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: '#ffe3d1', borderDash: [6, 6] },
          ticks: { color: '#ae846c', font: { family: 'Roboto' } }
        },
        x: {
          grid: { display: false },
          ticks: { color: '#ab8e74', font: { family: 'Roboto' } }
        }
      }
    }
  });

  // Snackbar helper (import ulang dari auth kalau perlu)
  window.showSnackbar = function(msg, success = false) {
    const snackbar = document.getElementById('snackbar');
    if (snackbar) {
      snackbar.textContent = msg;
      snackbar.className = 'snackbar active' + (success ? ' snackbar-success' : '');
      setTimeout(() => snackbar.className = 'snackbar', 2500);
    }
  };
});
