# Product Requirements Document (PRD)
**Aplikasi:** Bro.Stok – Aplikasi Manajemen Stok Produk untuk UMKM/Bisnis Retail  
**Versi:** 1.0  
**Dokumentasi Terakhir:** 2025-10-30  
**Penyusun:** [Your Name / Team]

---

## 1. Latar Belakang & Visi Produk
UMKM dan bisnis ritel di Indonesia sering kesulitan mengelola stok dan mengetahui kesehatan profit produknya secara real time. Bro.Stok hadir sebagai solusi digital berbasis mobile yang mudah digunakan, hemat biaya, namun powerful, mendukung insight profit, export data, dan pelacakan stok baik online maupun offline.

---

## 2. Tujuan Produk (Product Goals)
- Memudahkan bisnis kecil mengelola stok & varian produk dengan efisien.
- Memberikan analisis profit otomatis agar owner bisa ambil keputusan bisnis berbasis data.
- Menyederhanakan proses laporan dan ekspor data (ke CSV/Excel) untuk keperluan akuntansi atau analitik lebih lanjut.
- Menjamin aplikasi dapat digunakan secara offline, cepat, dan stabil.

---

## 3. Target Pengguna (User Persona)
- Pemilik UMKM (ritel, fashion, grosir)
- Kasir toko, admin gudang
- Pebisnis kecil-menengah tanpa tim IT

Karakteristik user:
- Tidak selalu paham teknologi
- Mengharapkan kemudahan dan kejelasan UI/UX
- Sering butuh laporan data & insight keuntungan dengan cepat

---

## 4. Fitur Utama (Core Features)

### 4.1. Manajemen Produk & Variasi
- CRUD (Create, Read, Update, Delete) produk dan varian (size, warna, SKU, gambar, dsb).
- Input gambar produk melalui galeri atau kamera.

### 4.2. Manajemen Stok
- Catat stok masuk, stok keluar.
- History stok lengkap—semua perubahan tercatat (timestamp, user, keterangan, dsb).

### 4.3. Analisis Profit & Status Produk
- Input harga beli (cost price) & harga jual (selling price) untuk setiap varian.
- Perhitungan otomatis: margin, keuntungan per unit, total modal, total nilai jual, potensi profit.
- Status kesehatan profit dengan indikator warna (merah = rugi, hijau = sangat baik, dst).

### 4.4. Export & Laporan
- Export data produk & stok ke CSV dan Excel (XLSX), lengkap dengan metrik profit.
- Siap diolah di Excel—pivot table/chart untuk bisnis.

### 4.5. Dashboard & Analytics
- Dashboard ringkasan stok dan profit secara real-time.
- Visualisasi produk terbaik/terburuk berdasarkan profit.

### 4.6. User Authentication
- Login dengan user management sederhana/secure.
- Opsi logout dan reset.

### 4.7. Offline Support
- Semua fitur utama bisa berjalan tanpa koneksi internet.
- Data tersimpan di device user (SQLite).

### 4.8. State Management yang Konsisten
- Menggunakan Provider untuk semua data flow dan update state pada UI.

### 4.9. Other/UX
- Notifikasi pop-up, helper text yang jelas.
- Responsif di berbagai device (Android/iOS).
- Tema aplikasi dapat dikustomisasi (dark/light mode).

---

## 5. Kebutuhan Fungsional (Functional Requirements)
- [FR-1] User bisa menambah/edit/hapus produk dan variannya.
- [FR-2] User bisa mencatat, mengupdate, dan menghapus transaksi stok masuk/keluar.
- [FR-3] Sistem menghitung margin, profit/loss, status kesehatan setiap varian secara otomatis berdasarkan input harga.
- [FR-4] User bisa melihat dan mencari history stok.
- [FR-5] Data bisa diexport ke CSV/Excel yang siap dipakai.
- [FR-6] User bisa login/logout.
- [FR-7] Sistem berjalan offline maupun online.

---

## 6. Kebutuhan Non Fungsional (Non-Functional Requirements)
- [NFR-1] UI/UX mudah dipahami oleh user awam.
- [NFR-2] Aplikasi berjalan cepat pada perangkat Android minimal API 21 dan iOS minimal 11.0.
- [NFR-3] Penyimpanan data lokal yang aman (menggunakan SQLite).
- [NFR-4] Instalasi dependencies minim, ramah storage.
- [NFR-5] Responsif di berbagai ukuran layar, mendukung tablet dan smartphone.

---

## 7. Alur Pengguna (User Flow)
1. Login/Daftar
2. Dashboard ringkasan produk & profit
3. Manajemen Produk/Varian
   - Tambah/edit/hapus produk
   - Upload gambar produk
4. Manajemen Stok
   - Catat stok masuk/keluar
   - Semua tercatat di history
5. Analisis Profit
   - Input harga beli & jual
   - Lihat margin, status profit (warna)
6. Export Data/Laporan
   - Export ke CSV/Excel
   - Siap print/diolah lebih lanjut

---

## 8. Kriteria Sukses (Success Metrics)
- 90% user dapat dengan mudah input produk & catat stok dalam 5 menit.
- Data profit & status tersaji jelas, tanpa user menghitung manual.
- Export file CSV/Excel valid dan dapat dibuka di mayoritas spreadsheet.
- Tidak ada bug blocking/kritikal saat digunakan offline.
- Feedback user positif >85% untuk kemudahan aplikasi.

---

## 9. Prioritas dan Batasan
- Prioritas utama: stabilitas aplikasi, fitur core (manajemen stok, analisis profit, export), performa offline.
- Batasan: Tidak ada fitur cloud backup pada rilis pertama (bisa ditambah berikutnya jika dibutuhkan user).

---

## 10. Lampiran dan Referensi
- Struktur database, ERD, dan contoh tampilan berada di file:
  - ERD_Stockify.md
  - IMPLEMENTASI_LENGKAP_SUMMARY.md
  - FINAL_SUMMARY_IMPROVEMENTS.md
  - README.md

---

NB: PRD ini akan terus diperbarui jika ada update requirement dari user/pihak bisnis atau feedback setelah aplikasi diuji coba.
