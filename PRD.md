# **PRODUCT REQUIREMENTS DOCUMENT (PRD)**

## **Aplikasi bro.stok - Sistem Manajemen Stok untuk UMKM**

---

### **Informasi Dokumen**

| **Item**              | **Detail**                                  |
| --------------------------- | ------------------------------------------------- |
| **Nama Dokumen**      | Product Requirements Document (PRD)               |
| **Nama Produk**       | bro.stok (Stockify)                               |
| **Versi Dokumen**     | 1.0                                               |
| **Tanggal Pembuatan** | Desember 2024                                     |
| **Pembuat**           | Tim Pengembangan bro.stok                         |
| **Status**            | Final                                             |
| **Referensi**         | SRS_Stockify.md, SDD_Stockify.md, ERD_Stockify.md |

---

## **Daftar Isi**

1. [Executive Summary](#1-executive-summary)
2. [Product Overview](#2-product-overview)
3. [User Stories &amp; Personas](#3-user-stories--personas)
4. [Goals &amp; Success Metrics](#4-goals--success-metrics)
5. [Features &amp; Requirements](#5-features--requirements)
6. [Non-Functional Requirements](#6-non-functional-requirements)
7. [Timeline &amp; Milestones](#7-timeline--milestones)
8. [Out of Scope](#8-out-of-scope)
9. [Risks &amp; Mitigation](#9-risks--mitigation)

---

## **1. Executive Summary**

### **1.1 Latar Belakang Masalah**

UMKM (Usaha Mikro Kecil Menengah) di Indonesia menghadapi tantangan besar dalam mengelola inventori produk mereka. Masalah utama yang sering terjadi:

- **Manajemen Stok Manual**: Banyak UMKM masih menggunakan catatan manual (buku/catatan) yang rawan kesalahan
- **Tidak Ada Tracking Real-time**: Sulit mengetahui stok aktual tanpa menghitung ulang secara fisik
- **Laporan Terbatas**: Sulit membuat laporan penjualan, profit, dan analisis bisnis
- **Multi-Variant Produk**: Produk dengan varian (ukuran, warna) sulit dikelola secara manual
- **Operasional Offline**: Tidak semua UMKM memiliki akses internet yang stabil
- **Biaya Software Mahal**: Software inventory profesional terlalu mahal untuk UMKM

### **1.2 Solusi yang Ditawarkan**

**bro.stok** adalah aplikasi mobile manajemen stok yang dirancang khusus untuk UMKM dengan karakteristik:

- ✅ **100% Offline**: Bekerja tanpa internet
- ✅ **User-Friendly**: Interface yang mudah digunakan
- ✅ **Gratis/Terjangkau**: Biaya yang sesuai untuk UMKM
- ✅ **Lengkap**: Fitur yang mencakup semua kebutuhan dasar manajemen stok
- ✅ **Multi-Gudang**: Tracking stok terpisah untuk toko dan gudang
- ✅ **Customer Management**: Tracking pembelian per customer dan identifikasi top customers
- ✅ **Profit Tracking**: Tracking harga beli vs harga jual untuk analisis profit

### **1.3 Value Proposition**

**Untuk Pemilik UMKM:**

- Menghemat waktu 70% dalam manajemen stok
- Mengurangi kesalahan human error hingga 90%
- Dapat melihat profit margin per produk secara real-time
- Laporan bisnis yang akurat untuk pengambilan keputusan
- Monitoring stok terpisah untuk toko dan gudang
- Transfer stok antar lokasi dengan mudah dan tercatat
- Identifikasi customer terbaik untuk strategi marketing dan loyalty program
- Tracking riwayat pembelian customer untuk analisis customer behavior

**Untuk Staff/Operator:**

- Proses input stok yang cepat dan mudah
- Riwayat transaksi yang lengkap dan dapat dilacak
- Dashboard visual yang mudah dipahami

---

## **2. Product Overview**

### **2.1 Deskripsi Produk**

**bro.stok** adalah aplikasi mobile manajemen stok berbasis Flutter yang menyediakan solusi end-to-end untuk mengelola inventori produk. Aplikasi ini bekerja sepenuhnya offline menggunakan database lokal SQLite, memastikan akses data yang cepat dan andal tanpa ketergantungan pada koneksi internet.

### **2.2 Target Pengguna**

#### **Primary Users:**

1. **Pemilik UMKM** (Owner/Manager)

   - Usia: 25-55 tahun
   - Lokasi: Indonesia (perkotaan dan pedesaan)
   - Teknologi: Familiar dengan smartphone Android
   - Kebutuhan: Kontrol penuh atas inventori, analisis profit, laporan bisnis
2. **Staff Toko/Operator** (Staff/Operator)

   - Usia: 18-40 tahun
   - Lokasi: Toko/gudang UMKM
   - Teknologi: Dapat menggunakan aplikasi mobile dasar
   - Kebutuhan: Input stok cepat, tracking riwayat, operasi harian

#### **Use Cases Utama:**

**Use Case 1: Pemilik Toko Fashion**

- Masalah: Mengelola stok sepatu dengan berbagai ukuran (38-45) dan warna (Hitam, Putih, Merah)
- Solusi: Menggunakan fitur varian untuk mengelola setiap kombinasi ukuran-warna sebagai varian terpisah
- Hasil: Tracking stok per varian yang akurat, laporan profit per varian

**Use Case 2: Toko Elektronik Kecil**

- Masalah: Stok produk sering habis tanpa disadari, tidak tahu produk mana yang paling laku
- Solusi: Dashboard real-time, notifikasi stok rendah, laporan analisis
- Hasil: Dapat restock tepat waktu, fokus ke produk yang profitable

**Use Case 3: Toko Grosir**

- Masalah: Tidak ada tracking supplier, sulit nego harga karena tidak tahu riwayat pembelian
- Solusi: (Future) Fitur supplier management
- Hasil: Audit trail lengkap, decision making lebih baik

**Use Case 4: Toko dengan Gudang Terpisah**

- Masalah: Stok di toko dan gudang tercampur, tidak tahu berapa stok di masing-masing lokasi
- Solusi: Menggunakan fitur multi-gudang untuk memisahkan stok di toko dan gudang
- Hasil: Tracking stok per lokasi yang akurat, dapat transfer stok antar lokasi, monitoring terpisah untuk toko dan gudang

**Use Case 5: Toko dengan Customer Management**

- Masalah: Tidak tahu siapa customer yang paling banyak beli, sulit untuk relationship management dan strategi marketing
- Solusi: Menggunakan fitur customer management untuk tracking pembelian per customer dan melihat top customers
- Hasil: Dapat identifikasi customer terbaik, fokus ke customer yang profitable, data untuk loyalty program

### **2.3 Platform & Teknologi**

- **Platform**: Android (Primary), iOS (Future), Web (Optional)
- **Framework**: Flutter 3.x
- **Database**: SQLite (via Drift ORM)
- **State Management**: Provider
- **Storage**: Local device storage (offline-first)

---

## **3. User Stories & Personas**

### **3.1 Personas**

#### **Persona 1: Pak Budi - Pemilik Toko Fashion**

- **Demografi**: 45 tahun, pemilik toko sepatu di pasar tradisional
- **Motivasi**: Ingin mengelola stok lebih efisien, tahu produk mana yang paling untung
- **Pain Points**:
  - Stok sering tidak sesuai dengan catatan
  - Tidak tahu profit per produk
  - Laporan manual memakan waktu lama
- **Goals**:
  - Tracking stok yang akurat dan real-time
  - Analisis profit untuk decision making
  - Laporan yang mudah dipahami

#### **Persona 2: Sari - Staff Toko**

- **Demografi**: 28 tahun, karyawan toko elektronik
- **Motivasi**: Mengerjakan tugas harian dengan cepat dan efisien
- **Pain Points**:
  - Input stok manual memakan waktu
  - Takut salah input
  - Tidak tahu cara membuat laporan
- **Goals**:
  - Interface yang mudah digunakan
  - Validasi input untuk mencegah kesalahan
  - Workflow yang efisien

### **3.2 User Stories**

#### **Epic 1: Manajemen Produk**

**US-1.1**: Sebagai pemilik toko, saya ingin menambah produk baru dengan informasi lengkap (nama, brand, gambar) agar produk terorganisir dengan baik.

- **Acceptance Criteria**:
  - Dapat input nama produk, brand
  - Dapat upload gambar produk (opsional, maks 5MB)
  - Produk tersimpan dengan unique ID
  - Data terpisah per user

**US-1.2**: Sebagai pemilik toko, saya ingin menambah varian produk (ukuran, warna) dengan SKU unik agar setiap varian dapat dilacak secara terpisah.

- **Acceptance Criteria**:
  - Dapat input ukuran dan warna varian
  - SKU otomatis ter-generate atau manual input (harus unik)
  - Dapat set stok awal untuk varian
  - Dapat set harga beli dan harga jual

**US-1.3**: Sebagai staff, saya ingin mencari produk dengan cepat menggunakan nama atau SKU agar proses operasi lebih efisien.

- **Acceptance Criteria**:
  - Search bar di halaman produk
  - Dapat search berdasarkan nama, brand, atau SKU
  - Real-time search results
  - Filter berdasarkan brand (opsional)

#### **Epic 2: Operasi Stok**

**US-2.1**: Sebagai staff, saya ingin menambah stok masuk dengan catatan agar riwayat transaksi tercatat lengkap.

- **Acceptance Criteria**:
  - Dapat pilih varian produk
  - Input jumlah stok masuk
  - Input catatan (opsional)
  - Stok otomatis bertambah
  - Riwayat tercatat dengan timestamp

**US-2.2**: Sebagai staff, saya ingin mengurangi stok keluar dengan validasi agar tidak terjadi stok negatif.

- **Acceptance Criteria**:
  - Dapat pilih varian produk
  - Input jumlah stok keluar
  - Sistem validasi: stok tersedia harus cukup
  - Jika stok tidak cukup, tampilkan error message
  - Stok otomatis berkurang
  - Riwayat tercatat

**US-2.3**: Sebagai pemilik toko, saya ingin melakukan stock opname (penyesuaian stok) agar dapat koreksi selisih stok.

- **Acceptance Criteria**:
  - Dapat pilih varian produk
  - Input stok aktual (baru)
  - Sistem hitung selisih otomatis
  - Catatan wajib untuk alasan penyesuaian
  - Stok terupdate
  - Riwayat tercatat sebagai "adjustment"

#### **Epic 3: Dashboard & Analisis**

**US-3.1**: Sebagai pemilik toko, saya ingin melihat ringkasan stok di dashboard agar dapat monitoring cepat.

- **Acceptance Criteria**:
  - Menampilkan total produk
  - Menampilkan total varian
  - Menampilkan jumlah stok rendah (< threshold)
  - Card layout yang mudah dibaca
  - Update real-time

**US-3.2**: Sebagai pemilik toko, saya ingin melihat grafik stok masuk/keluar 7 hari terakhir agar dapat analisis trend.

- **Acceptance Criteria**:
  - Bar chart stok masuk vs keluar
  - Periode 7 hari terakhir
  - Label yang jelas
  - Responsive design

**US-3.3**: Sebagai pemilik toko, saya ingin melihat analisis profit per produk agar tahu produk mana yang paling menguntungkan.

- **Acceptance Criteria**:
  - Menampilkan profit margin per produk
  - Menampilkan total profit potential (stock × profit per unit)
  - Sorting berdasarkan profit (highest to lowest)
  - Visual indicator (color coding)

#### **Epic 4: Laporan & Export**

**US-4.1**: Sebagai pemilik toko, saya ingin export data produk ke Excel/CSV agar dapat analisis lebih lanjut.

- **Acceptance Criteria**:
  - Dapat export semua produk atau filtered
  - Format CSV/Excel
  - Include: nama, brand, SKU, stok, harga beli, harga jual, profit
  - File dapat di-share ke aplikasi lain

**US-4.2**: Sebagai pemilik toko, saya ingin melihat riwayat transaksi stok dengan filter agar dapat audit trail.

- **Acceptance Criteria**:
  - List semua riwayat transaksi
  - Filter berdasarkan: jenis operasi (in/out/adjust), tanggal, produk
  - Sort berdasarkan tanggal (terbaru dulu)
  - Detail transaksi lengkap (user, timestamp, catatan)

#### **Epic 5: Notifikasi & Alert**

**US-5.1**: Sebagai pemilik toko, saya ingin mendapat notifikasi stok rendah agar dapat restock tepat waktu.

- **Acceptance Criteria**:
  - Badge indicator di dashboard untuk stok rendah
  - Threshold dapat dikonfigurasi (default: 10 unit)
  - List produk dengan stok rendah
  - Color coding (red/yellow) untuk peringatan

#### **Epic 6: Multi-Gudang (Multi-Location)**

**US-6.1**: Sebagai pemilik toko, saya ingin membuat lokasi gudang baru (Toko, Gudang, dll) agar dapat memisahkan stok per lokasi.

- **Acceptance Criteria**:
  - Dapat tambah lokasi baru dengan nama (required) dan alamat (optional)
  - Lokasi default: "Toko" (auto-create saat registrasi pertama kali)
  - Lokasi dapat di-edit dan di-hapus (jika tidak ada stok)
  - Validasi: Nama lokasi harus unik per user

**US-6.2**: Sebagai staff, saya ingin memilih lokasi saat melakukan operasi stok (masuk/keluar/adjust) agar stok tercatat di lokasi yang benar.

- **Acceptance Criteria**:
  - Dropdown/selector lokasi di form stok masuk/keluar/adjust
  - Lokasi default: Lokasi yang paling sering digunakan
  - Stok terupdate di lokasi yang dipilih
  - Riwayat transaksi mencatat lokasi

**US-6.3**: Sebagai pemilik toko, saya ingin melihat stok per lokasi di dashboard agar dapat monitoring terpisah untuk toko dan gudang.

- **Acceptance Criteria**:
  - Toggle/filter untuk melihat stok per lokasi atau semua lokasi
  - Statistik ringkasan per lokasi (Total Produk, Total Varian, Stok Rendah)
  - List stok rendah per lokasi
  - Visual indicator untuk membedakan lokasi

**US-6.4**: Sebagai pemilik toko, saya ingin transfer stok antar lokasi (contoh: dari Gudang ke Toko) agar dapat mengatur distribusi stok.

- **Acceptance Criteria**:
  - Pilih varian produk
  - Pilih lokasi sumber (from) dan lokasi tujuan (to)
  - Input jumlah yang akan ditransfer
  - Validasi: Stok di lokasi sumber harus cukup
  - Catatan wajib untuk alasan transfer
  - Stok otomatis berkurang di lokasi sumber dan bertambah di lokasi tujuan
  - Riwayat tercatat sebagai "transfer" dengan detail lokasi

**US-6.5**: Sebagai pemilik toko, saya ingin melihat total stok per produk di semua lokasi agar tahu total stok keseluruhan.

- **Acceptance Criteria**:
  - Tampilkan stok per lokasi untuk setiap varian
  - Total stok (aggregate dari semua lokasi)
  - View mode: "Per Lokasi" atau "Total"
  - Export data dapat include kolom lokasi

#### **Epic 7: Customer Management**

**US-7.1**: Sebagai pemilik toko, saya ingin menambah data customer baru (nama, kontak, alamat) agar dapat tracking pembelian per customer.

- **Acceptance Criteria**:
  - Input: Nama customer (required), No. Telepon (optional), Email (optional), Alamat (optional), Catatan (optional)
  - Validasi: Nama customer harus unik per user (atau dapat duplicate dengan konfirmasi)
  - Customer tersimpan dengan unique ID
  - Data terpisah per user

**US-7.2**: Sebagai staff, saya ingin memilih customer saat melakukan stok keluar agar dapat tracking pembelian customer.

- **Acceptance Criteria**:
  - Dropdown/selector customer di form stok keluar
  - Opsi "Customer Umum" atau "Tanpa Customer" untuk pembelian non-identitas
  - Customer dapat dicari berdasarkan nama atau nomor telepon
  - Riwayat stok keluar tercatat dengan customer_id

**US-7.3**: Sebagai pemilik toko, saya ingin melihat daftar customer dengan total pembelian terbanyak (top customers) agar dapat identifikasi customer terbaik.

- **Acceptance Criteria**:
  - List customer diurutkan berdasarkan total pembelian (highest to lowest)
  - Menampilkan: Nama customer, Total Pembelian (jumlah transaksi), Total Nilai (jumlah uang), Tanggal Terakhir Beli
  - Sorting berdasarkan: Total Pembelian, Total Nilai, atau Nama
  - Search/filter customer berdasarkan nama

**US-7.4**: Sebagai pemilik toko, saya ingin melihat detail riwayat pembelian per customer agar dapat analisis customer behavior.

- **Acceptance Criteria**:
  - Menampilkan semua transaksi stok keluar untuk customer tertentu
  - Detail: Tanggal, Produk, Varian, Jumlah, Harga, Total, Lokasi
  - Statistik: Total transaksi, Total nilai pembelian, Rata-rata per transaksi
  - Filter berdasarkan rentang tanggal

**US-7.5**: Sebagai pemilik toko, saya ingin melihat statistik customer di dashboard agar dapat monitoring customer activity.

- **Acceptance Criteria**:
  - Total customer aktif (customer yang pernah beli)
  - Top 5 customers (berdasarkan total pembelian)
  - Customer baru bulan ini
  - Grafik pembelian customer 7 hari terakhir (opsional)

---

## **4. Goals & Success Metrics**

### **4.1 Product Goals**

1. **Primary Goal**: Memberikan solusi manajemen stok yang mudah, cepat, dan terjangkau untuk UMKM
2. **Secondary Goals**:
   - Meningkatkan efisiensi operasional UMKM sebesar 70%
   - Mengurangi kesalahan dalam tracking stok hingga 90%
   - Memberikan insights profit untuk decision making

### **4.2 Success Metrics (KPIs)**

#### **User Engagement Metrics:**

- **Daily Active Users (DAU)**: Target 60% dari total users
- **Session Duration**: Rata-rata 10-15 menit per session
- **Features Usage Rate**:
  - Stok masuk/keluar: >80% dari total users
  - Dashboard view: >90% dari total users
  - Export feature: >40% dari total users

#### **Product Performance Metrics:**

- **Time to Complete Stok Operation**: <30 detik
- **App Crash Rate**: <0.1%
- **Data Loading Time**: <2 detik untuk 1000 produk
- **Storage Efficiency**: <100MB untuk 1000 produk

#### **Business Impact Metrics:**

- **User Satisfaction Score**: >4.5/5.0
- **Error Rate Reduction**: 90% reduction dari manual tracking
- **Time Saved**: 70% time reduction dalam operasi stok

### **4.3 Success Criteria**

**Minimum Viable Product (MVP) Success:**

- ✅ 100 pengguna aktif dalam 3 bulan pertama
- ✅ Rating aplikasi >4.0 di Play Store
- ✅ <5% user churn rate
- ✅ Fitur core (CRUD produk, stok, dashboard) digunakan oleh >80% users

---

## **5. Features & Requirements**

### **5.1 Feature Matrix & Priorities**

| **Feature**                | **Priority** | **MVP** | **User Story**                   | **Effort** |
| -------------------------------- | ------------------ | ------------- | -------------------------------------- | ---------------- |
| Autentikasi (Login/Register)     | P0 (Critical)      | ✅ Yes        | US-AUTH-1                              | Medium           |
| CRUD Produk                      | P0 (Critical)      | ✅ Yes        | US-1.1, US-1.2                         | High             |
| CRUD Varian                      | P0 (Critical)      | ✅ Yes        | US-1.2                                 | High             |
| Stok Masuk                       | P0 (Critical)      | ✅ Yes        | US-2.1                                 | Medium           |
| Stok Keluar                      | P0 (Critical)      | ✅ Yes        | US-2.2                                 | Medium           |
| Stock Adjustment                 | P0 (Critical)      | ✅ Yes        | US-2.3                                 | Medium           |
| Dashboard Ringkasan              | P0 (Critical)      | ✅ Yes        | US-3.1                                 | Medium           |
| Riwayat Transaksi                | P0 (Critical)      | ✅ Yes        | US-4.2                                 | Medium           |
| Pencarian Produk                 | P0 (Critical)      | ✅ Yes        | US-1.3                                 | Low              |
| Export Data (CSV/Excel)          | P1 (High)          | ✅ Yes        | US-4.1                                 | Medium           |
| Profit Analysis                  | P1 (High)          | ✅ Yes        | US-3.3                                 | Medium           |
| Grafik Stok (7 hari)             | P1 (High)          | ✅ Yes        | US-3.2                                 | Medium           |
| Notifikasi Stok Rendah           | P1 (High)          | ✅ Yes        | US-5.1                                 | Low              |
| Upload Gambar Produk             | P2 (Medium)        | ✅ Yes        | US-1.1                                 | Medium           |
| Filter Riwayat                   | P2 (Medium)        | ✅ Yes        | US-4.2                                 | Low              |
| Settings & Konfigurasi           | P2 (Medium)        | ✅ Yes        | -                                      | Low              |
| User Profile                     | P2 (Medium)        | ✅ Yes        | -                                      | Low              |
| Data Management (Backup/Restore) | P3 (Low)           | ❌ No         | -                                      | High             |
| Barcode Scanner                  | P3 (Low)           | ❌ No         | -                                      | Medium           |
| Supplier Management              | P3 (Low)           | ❌ No         | -                                      | High             |
| Multi-Location/Warehouse         | P1 (High)          | ✅ Yes        | US-6.1, US-6.2, US-6.3, US-6.4, US-6.5 | Very High        |
| Customer Management              | P1 (High)          | ✅ Yes        | US-7.1, US-7.2, US-7.3, US-7.4, US-7.5 | High             |

**Legend:**

- **P0**: Must Have (Critical untuk MVP)
- **P1**: Should Have (High priority)
- **P2**: Nice to Have (Medium priority)
- **P3**: Future Consideration (Low priority)

### **5.2 Detailed Feature Requirements**

#### **5.2.1 Sistem Autentikasi**

**Requirement AUTH-1: User Registration**

- Pengguna dapat mendaftar dengan email dan password
- Validasi email format
- Password minimal 6 karakter
- Email harus unik (tidak boleh duplicate)
- Password dienkripsi menggunakan secure storage
- Data user tersimpan di database lokal

**Requirement AUTH-2: User Login**

- Login menggunakan email dan password yang terdaftar
- Auto-login jika session masih valid
- Session timeout 30 menit
- Logout functionality

**Requirement AUTH-3: User-Specific Data**

- Setiap user hanya melihat dan mengelola data sendiri
- Data terisolasi berdasarkan userId
- Tidak ada data leakage antar user

#### **5.2.2 Manajemen Produk**

**Requirement PROD-1: Tambah Produk**

- Input: Nama produk (required), Brand (required), Gambar (optional)
- Validasi: Nama dan brand tidak boleh kosong
- Ukuran gambar maksimal 5MB
- Format gambar: JPG, PNG
- Auto-compress gambar untuk optimasi storage

**Requirement PROD-2: Edit Produk**

- Dapat edit semua field produk
- Validasi sama dengan tambah produk
- Timestamp updated_at terupdate otomatis

**Requirement PROD-3: Hapus Produk**

- Validasi: Produk tidak boleh dihapus jika memiliki varian aktif
- Soft delete atau hard delete dengan konfirmasi
- Cascade delete varian terkait (opsional)

**Requirement PROD-4: List Produk**

- Menampilkan semua produk user saat ini
- Layout: Card atau List view
- Pencarian real-time
- Filter berdasarkan brand
- Pagination untuk performa (jika >100 produk)

#### **5.2.3 Manajemen Varian**

**Requirement VAR-1: Tambah Varian**

- Input: Ukuran (required), Warna (required), SKU (required, unique per user), Lokasi untuk Stok Awal (required), Stok Awal per Lokasi (required, ≥0), Harga Beli (optional), Harga Jual (optional)
- Validasi: SKU harus unik per user
- Dapat set stok awal untuk satu atau lebih lokasi
- Stok awal dapat berbeda per lokasi
- Auto-calculate: Total Cost Value, Total Selling Value, Profit Margin (aggregate dari semua lokasi)
- Real-time profit calculation saat input

**Requirement VAR-2: Edit Varian**

- Dapat edit semua field varian
- Jika stok diubah, catat sebagai adjustment
- Update profit metrics otomatis

**Requirement VAR-3: Hapus Varian**

- Validasi: Varian tidak boleh dihapus jika memiliki riwayat transaksi
- Konfirmasi sebelum hapus

#### **5.2.4 Operasi Stok**

**Requirement STOCK-1: Stok Masuk**

- Input: Varian produk, Lokasi (required), Jumlah (required, >0), Catatan (optional)
- Validasi: Jumlah harus positif
- Update stok varian di lokasi yang dipilih otomatis
- Catat ke StockHistory dengan operation_type = "in" dan location_id
- Timestamp dan user_id tercatat

**Requirement STOCK-2: Stok Keluar**

- Input: Varian produk, Lokasi (required), Jumlah (required, >0), Customer (optional), Catatan (optional)
- Validasi: Stok tersedia di lokasi yang dipilih harus ≥ jumlah yang dikeluarkan
- Customer: Dropdown/selector dengan search, opsi "Customer Umum" atau "Tanpa Customer"
- Quick add customer: Dapat tambah customer baru langsung dari form (opsional)
- Update stok varian di lokasi yang dipilih otomatis (stok berkurang)
- Catat ke StockHistory dengan operation_type = "out", location_id, dan customer_id (nullable)
- Jika customer dipilih, tracking pembelian customer otomatis terupdate
- Error message jika stok tidak cukup di lokasi yang dipilih

**Requirement STOCK-3: Stock Adjustment**

- Input: Varian produk, Lokasi (required), Stok Baru (required, ≥0), Catatan (required)
- Validasi: Catatan wajib untuk audit trail
- Hitung selisih otomatis: selisih = stok baru - stok lama (di lokasi yang dipilih)
- Update stok varian di lokasi yang dipilih
- Catat ke StockHistory dengan operation_type = "adjustment" dan location_id
- Tampilkan previous stock dan new stock di lokasi yang dipilih

#### **5.2.5 Dashboard**

**Requirement DASH-1: Ringkasan Statistik**

- Toggle view: "Semua Lokasi" (aggregate) atau "Per Lokasi"
- Jika "Semua Lokasi":
  - Total Produk: jumlah produk unik user (across all locations)
  - Total Varian: jumlah semua varian (across all locations)
  - Stok Rendah: jumlah varian dengan stok < threshold (aggregate)
  - Total Cost Value: sum(stock × cost_price) dari semua lokasi
  - Total Selling Value: sum(stock × selling_price) dari semua lokasi
  - Potential Profit: Total Selling - Total Cost
- Jika "Per Lokasi":
  - Statistik yang sama dihitung per lokasi
  - Tampilkan dalam card/tab terpisah per lokasi
  - Quick switch antara lokasi

**Requirement DASH-2: Grafik Stok 7 Hari**

- Toggle view: "Semua Lokasi" atau "Per Lokasi"
- Bar chart: Stok Masuk vs Stok Keluar per hari
- Jika "Per Lokasi": Filter grafik berdasarkan lokasi yang dipilih
- Periode: 7 hari terakhir
- X-axis: Tanggal
- Y-axis: Jumlah
- Warna berbeda untuk in vs out
- Legend untuk membedakan lokasi (jika multiple locations)

**Requirement DASH-3: List Stok Rendah**

- Toggle view: "Semua Lokasi" atau "Per Lokasi"
- Menampilkan varian dengan stok < threshold
- Jika "Per Lokasi": Filter berdasarkan lokasi yang dipilih
- Tampilkan lokasi di list item (jika view "Semua Lokasi")
- Sort berdasarkan stok (terendah dulu)
- Color coding: Red (<5), Yellow (5-10), Green (>10)
- Quick action: Tombol "Stok Masuk" langsung ke lokasi yang sesuai

**Requirement DASH-4: Customer Statistics**

- Card statistik customer:
  - Total Customer Aktif: jumlah customer yang pernah melakukan pembelian
  - Total Customer Baru: jumlah customer baru bulan ini
- List Top 5 Customers:
  - Menampilkan 5 customer dengan total pembelian terbanyak
  - Format card/list: Nama customer, Total Pembelian (jumlah transaksi), Total Nilai (rupiah)
  - Badge/indicator untuk customer teratas
  - Quick link ke detail customer (tap untuk lihat detail)
  - "Lihat Semua" link ke halaman customer list
- Grafik pembelian customer 7 hari terakhir (opsional):
  - Bar chart: Jumlah transaksi per hari
  - Line chart: Total nilai pembelian per hari
  - Toggle antara kedua chart

#### **5.2.6 Riwayat Transaksi**

**Requirement HIST-1: List Riwayat**

- Menampilkan semua riwayat transaksi user
- Sort: Terbaru dulu (default)
- Detail: Tanggal, Produk, Varian, Lokasi, Customer (jika ada), Operasi, Jumlah, User, Catatan
- Untuk transfer: Menampilkan "dari Lokasi A ke Lokasi B"
- Untuk stok keluar: Menampilkan nama customer jika ada
- Pagination jika >100 records

**Requirement HIST-2: Filter Riwayat**

- Filter berdasarkan:
  - Jenis operasi: All, In, Out, Adjustment, Transfer
  - Lokasi: All, atau pilih lokasi tertentu
  - Customer: All, atau pilih customer tertentu (hanya untuk stok keluar)
  - Rentang tanggal: Custom date range
  - Produk: Pilih produk tertentu
- Multiple filter dapat dikombinasi
- Clear filter functionality

#### **5.2.7 Export Data**

**Requirement EXP-1: Export Produk**

- Format: CSV atau Excel (XLSX)
- Toggle export mode: "Total" atau "Per Lokasi"
- Jika "Total": Include columns:
  - Nama Produk, Brand, SKU, Ukuran, Warna, Stok Total
  - Harga Beli, Harga Jual
  - Margin %, Profit per Unit
  - Total Cost Value, Total Selling Value, Potential Profit
  - Status (Stok Rendah/OK)
  - Tanggal Dibuat
- Jika "Per Lokasi": Include kolom Lokasi dan Stok per Lokasi
- Share ke aplikasi lain (Email, Drive, dll)

**Requirement EXP-2: Export Riwayat**

- Format: CSV atau Excel
- Include columns:
  - Tanggal, Produk, Varian, SKU
  - Lokasi (atau "dari Lokasi A ke Lokasi B" untuk transfer)
  - Customer (jika ada, untuk stok keluar)
  - Jenis Operasi, Jumlah
  - Previous Stock, New Stock
  - User, Catatan
- Filter dapat diterapkan sebelum export (termasuk filter lokasi dan customer)

#### **5.2.8 Profit Analysis**

**Requirement PROFIT-1: Profit per Produk**

- Menampilkan profit margin per produk (aggregate dari varian)
- Total profit potential per produk
- Sort berdasarkan profit (highest to lowest)
- Visual indicator: Green (>30%), Yellow (10-30%), Red (<10%)

**Requirement PROFIT-2: Profit Summary**

- Total Cost Value: Investasi total dalam stok
- Total Selling Value: Nilai jika semua stok terjual
- Potential Profit: Selisih antara selling dan cost
- Overall Margin: (Potential Profit / Total Selling) × 100%

#### **5.2.9 Notifikasi & Alert**

**Requirement NOTIF-1: Stok Rendah Alert**

- Badge di dashboard dengan jumlah varian stok rendah
- List produk dengan stok rendah di dashboard
- Threshold dapat dikonfigurasi di Settings (default: 10)
- Update real-time saat ada perubahan stok

#### **5.2.10 Multi-Gudang (Multi-Location)**

**Requirement LOC-1: Manajemen Lokasi**

- Input: Nama lokasi (required, unique per user), Alamat (optional), Deskripsi (optional)
- Lokasi default: "Toko" (auto-create saat user pertama kali registrasi)
- Validasi: Nama lokasi harus unik per user, tidak boleh kosong
- Maksimal 10 lokasi per user
- Dapat edit nama dan alamat lokasi
- Dapat hapus lokasi jika tidak ada stok di lokasi tersebut
- Icon/color untuk membedakan lokasi (opsional)

**Requirement LOC-2: Stok per Lokasi**

- Setiap varian memiliki stok terpisah per lokasi
- Database schema: StockLocation table untuk menyimpan stok per varian per lokasi
- Stok awal varian dapat di-set per lokasi saat tambah varian
- Stok total = sum(stok dari semua lokasi)

**Requirement LOC-3: Operasi Stok dengan Lokasi**

- Semua operasi stok (masuk, keluar, adjustment) harus memilih lokasi
- Dropdown/selector lokasi di form operasi stok
- Lokasi default: Lokasi yang paling sering digunakan (tracking usage)
- Validasi: Stok keluar hanya jika stok di lokasi yang dipilih cukup
- Riwayat transaksi mencatat lokasi (location_id)

**Requirement LOC-4: Transfer Stok Antar Lokasi**

- Input: Varian produk, Lokasi Sumber (from), Lokasi Tujuan (to), Jumlah (required, >0), Catatan (required)
- Validasi: Stok di lokasi sumber harus ≥ jumlah yang ditransfer
- Operasi atomic: Stok berkurang di lokasi sumber dan bertambah di lokasi tujuan dalam satu transaksi
- Riwayat tercatat sebagai operation_type = "transfer"
- Detail riwayat: from_location, to_location, jumlah, catatan
- Error handling jika stok tidak cukup di lokasi sumber

**Requirement LOC-5: Dashboard per Lokasi**

- Toggle/filter untuk melihat:
  - "Semua Lokasi" (aggregate)
  - "Per Lokasi" (terpisah)
- Statistik ringkasan per lokasi:
  - Total Produk per lokasi
  - Total Varian per lokasi
  - Stok Rendah per lokasi
  - Total Cost Value per lokasi
  - Total Selling Value per lokasi
  - Potential Profit per lokasi
- List stok rendah dapat difilter per lokasi
- Visual indicator: Badge/tab untuk membedakan lokasi
- Quick switch antara lokasi di dashboard

**Requirement LOC-6: View Stok per Lokasi**

- Di halaman produk/varian, tampilkan stok breakdown per lokasi
- Format: "Lokasi: Stok" (contoh: "Toko: 15, Gudang: 30, Total: 45")
- Toggle view: "Per Lokasi" atau "Total" saja
- Export data dapat include kolom lokasi jika view mode "Per Lokasi"

**Requirement LOC-7: Riwayat Transaksi dengan Lokasi**

- Filter riwayat berdasarkan lokasi
- Detail riwayat menampilkan lokasi untuk operasi stok
- Untuk transfer: menampilkan "dari Lokasi A ke Lokasi B"
- Export riwayat dapat include kolom lokasi

#### **5.2.11 Customer Management**

**Requirement CUST-1: CRUD Customer**

- Input: Nama customer (required), No. Telepon (optional), Email (optional), Alamat (optional), Catatan (optional)
- Validasi: Nama customer tidak boleh kosong
- Nama customer dapat duplicate (user dapat pilih saat input stok keluar)
- Customer tersimpan dengan unique ID
- Data terpisah per user
- Dapat edit semua field customer
- Dapat hapus customer (soft delete jika sudah ada riwayat pembelian)
- Search customer berdasarkan nama atau nomor telepon

**Requirement CUST-2: Link Customer ke Stok Keluar**

- Form stok keluar harus memiliki field "Customer" (optional)
- Dropdown/selector customer dengan search functionality
- Opsi "Customer Umum" atau "Tanpa Customer" untuk pembelian non-identitas
- Customer dapat dipilih dari list atau dibuat baru langsung dari form stok keluar (quick add)
- Riwayat stok keluar mencatat customer_id (nullable)
- Jika customer dipilih, catatan pembelian otomatis tercatat ke customer

**Requirement CUST-3: Tracking Pembelian per Customer**

- Setiap stok keluar dengan customer_id akan tercatat sebagai pembelian customer
- Hitung otomatis: Total Transaksi (count), Total Nilai (sum), Tanggal Terakhir Beli
- Update real-time saat ada stok keluar baru dengan customer
- Perhitungan berdasarkan harga jual varian saat transaksi

**Requirement CUST-4: Top Customers List**

- Menampilkan daftar customer diurutkan berdasarkan total pembelian
- Sorting options:
  - Total Pembelian (jumlah transaksi) - default
  - Total Nilai (jumlah uang)
  - Nama (A-Z)
  - Tanggal Terakhir Beli
- Menampilkan: Nama customer, No. Telepon, Total Transaksi, Total Nilai, Tanggal Terakhir Beli
- Search/filter customer berdasarkan nama atau nomor telepon
- Pagination jika >50 customers

**Requirement CUST-5: Detail Customer & Riwayat Pembelian**

- Halaman detail customer menampilkan:
  - Informasi customer lengkap
  - Statistik: Total transaksi, Total nilai pembelian, Rata-rata per transaksi, Tanggal pertama beli, Tanggal terakhir beli
- List riwayat pembelian customer:
  - Semua transaksi stok keluar untuk customer tersebut
  - Detail: Tanggal, Produk, Varian, SKU, Jumlah, Harga Jual, Total, Lokasi
  - Sort berdasarkan tanggal (terbaru dulu)
  - Filter berdasarkan rentang tanggal
  - Export riwayat pembelian customer

**Requirement CUST-6: Dashboard Customer Statistics**

- Card statistik customer di dashboard:
  - Total Customer Aktif (customer yang pernah beli)
  - Total Customer Baru (bulan ini)
- List Top 5 Customers:
  - Menampilkan 5 customer dengan total pembelian terbanyak
  - Menampilkan: Nama, Total Pembelian, Total Nilai
  - Quick link ke detail customer
- Grafik pembelian customer 7 hari terakhir (opsional):
  - Bar chart: Jumlah transaksi per hari
  - Line chart: Total nilai pembelian per hari

**Requirement CUST-7: Export Customer Data**

- Export daftar customer ke CSV/Excel
- Include columns:
  - Nama, No. Telepon, Email, Alamat
  - Total Transaksi, Total Nilai Pembelian
  - Tanggal Pertama Beli, Tanggal Terakhir Beli
  - Status (Aktif/Tidak Aktif)
- Export riwayat pembelian customer tertentu
- Share ke aplikasi lain (Email, Drive, dll)

### **5.3 User Acceptance Criteria**

**Global Acceptance Criteria:**

- Semua fitur harus bekerja offline (tanpa internet)
- Data terisolasi per user
- Response time <3 detik untuk operasi CRUD
- Error handling yang user-friendly
- UI konsisten dengan Material Design 3
- Mendukung berbagai ukuran layar Android

---

## **6. Non-Functional Requirements**

### **6.1 Performance Requirements**

- **Response Time**:

  - CRUD operations: <3 detik
  - Search: <1 detik
  - Dashboard load: <2 detik
  - Export (1000 records): <5 detik
- **Throughput**:

  - Mendukung 50 operasi stok per menit
  - Database query: <500ms untuk 1000 records
- **Scalability**:

  - Mendukung hingga 1000 produk per user (recommended)
  - Storage: <100MB untuk 1000 produk
  - Memory usage: <200MB saat idle

### **6.2 Security Requirements**

- **Data Encryption**:

  - Password dienkripsi menggunakan flutter_secure_storage
  - Data sensitif dienkripsi at-rest
- **Authentication**:

  - Session timeout: 30 menit
  - Auto-logout jika tidak aktif
- **Authorization**:

  - User hanya dapat akses data sendiri
  - Role-based access control (Admin, Staff, Owner)
  - Validasi di level repository/DAO
- **Data Privacy**:

  - Tidak ada data yang dikirim ke server eksternal
  - Data tersimpan lokal di device
  - User dapat hapus semua data kapan saja

### **6.3 Usability Requirements**

- **User Interface**:

  - Material Design 3 guidelines
  - Consistent color scheme dan typography
  - Responsive untuk berbagai ukuran layar
  - Dark mode support (optional)
- **Accessibility**:

  - Mendukung screen reader (Android TalkBack)
  - Kontras warna yang cukup
  - Font size dapat disesuaikan
- **User Experience**:

  - Onboarding tutorial untuk user baru
  - Error messages yang jelas dan actionable
  - Loading indicators untuk operasi async
  - Confirmation dialogs untuk operasi destruktif
- **Language**:

  - Bahasa Indonesia (primary)
  - Text yang mudah dipahami non-technical users

### **6.4 Reliability Requirements**

- **Uptime**: 99.5% (offline app, tidak ada server dependency)
- **Data Integrity**:

  - Transaksi stok bersifat atomic (all or nothing)
  - Validasi data di semua layer
  - Backup/recovery mechanism (optional)
- **Error Handling**:

  - Graceful error handling (tidak crash)
  - User-friendly error messages
  - Logging untuk debugging (developer mode)

### **6.5 Compatibility Requirements**

- **Android**:

  - Minimum: Android 5.0 (API 21)
  - Target: Android 14 (API 34)
  - Tested on: Android 8.0 - 14
- **Device Types**:

  - Smartphone (primary)
  - Tablet (responsive design)
- **Storage**:

  - Minimum 100MB free space
  - App-specific storage untuk gambar

### **6.6 Maintainability Requirements**

- **Code Quality**:

  - Clean Architecture pattern
  - Separation of concerns (data, domain, presentation)
  - Code documentation (dokumen fungsi penting)
  - Linting rules compliance
- **Testing**:

  - Unit tests untuk business logic (target: 70% coverage)
  - Widget tests untuk UI components
  - Integration tests untuk critical flows

---

## **7. Timeline & Milestones**

### **7.1 Development Phases**

#### **Phase 1: MVP (Minimum Viable Product)** - 8-10 minggu

**Goal**: Core features untuk operasi dasar manajemen stok

**Sprint 1-2 (2 minggu): Setup & Authentication**

- Project setup, architecture setup
- Database schema (Drift)
- Authentication (Register/Login/Logout)
- User management

**Sprint 3-4 (2 minggu): Product Management**

- CRUD Produk
- Upload gambar produk
- Product list dengan search

**Sprint 5-6 (2 minggu): Variant Management**

- CRUD Varian
- SKU validation
- Profit calculation logic

**Sprint 7-8 (2 minggu): Stock Operations**

- Stok Masuk
- Stok Keluar
- Stock Adjustment
- Stock History

**Sprint 9-10 (2 minggu): Dashboard & Analytics**

- Dashboard ringkasan
- Grafik stok 7 hari
- Profit analysis
- Notifikasi stok rendah

**Sprint 10-11 (2 minggu): Multi-Gudang (Multi-Location)**

- CRUD Lokasi (Toko, Gudang, dll)
- Database schema untuk stok per lokasi
- Update operasi stok untuk include lokasi
- Transfer stok antar lokasi
- Dashboard per lokasi
- Filter dan view stok per lokasi

**Sprint 11-12 (2 minggu): Customer Management**

- CRUD Customer
- Database schema untuk customer dan tracking pembelian
- Link customer ke stok keluar
- Top customers list dengan sorting
- Detail customer & riwayat pembelian
- Dashboard customer statistics
- Export customer data

#### **Phase 2: Enhancement** - 4-6 minggu

**Goal**: Fitur tambahan dan optimasi

**Sprint 13-14 (2 minggu): Export & Reports**

- Export CSV/Excel (include lokasi dan customer)
- Filter riwayat (include filter lokasi dan customer)
- Enhanced reports

**Sprint 15-16 (2 minggu): UI/UX Polish**

- UI refinement
- Performance optimization
- Bug fixes

**Sprint 17-18 (2 minggu): Testing & Documentation**

- Comprehensive testing
- User documentation
- Play Store preparation

### **7.2 Milestones**

| **Milestone**            | **Target Date** | **Deliverables**                                                         |
| ------------------------------ | --------------------- | ------------------------------------------------------------------------------ |
| **M1: MVP Alpha**        | Week 12               | Core features complete, internal testing                                       |
| **M2: MVP Beta**         | Week 14               | All MVP features + Multi-Gudang + Customer Management, bug fixes, user testing |
| **M3: Production Ready** | Week 18               | Full testing, documentation, Play Store submission                             |
| **M4: Public Launch**    | Week 20               | Play Store release, marketing                                                  |

### **7.3 Feature Prioritization**

**Must Have (MVP):**

- ✅ Authentication
- ✅ CRUD Produk & Varian
- ✅ Stok Masuk/Keluar/Adjustment
- ✅ Dashboard
- ✅ Riwayat Transaksi
- ✅ Profit Analysis
- ✅ Export Data
- ✅ Multi-Gudang (Multi-Location)
- ✅ Customer Management

**Should Have (Post-MVP):**

- Barcode Scanner
- Supplier Management
- Category Management
- Enhanced Analytics

**Nice to Have (Future):**

- Purchase Orders
- Reorder Point Automation
- Cloud Sync (optional)

---

## **8. Out of Scope**

### **8.1 Fitur yang TIDAK Akan Dibuat (untuk MVP)**

1. **Barcode Scanner**

   - Alasan: Bukan critical untuk MVP
   - Future consideration: P3 priority
2. **Supplier Management**

   - Alasan: Kompleksitas tinggi, dapat ditambahkan nanti
   - Future consideration: P3 priority
3. **Cloud Sync/Backup**

   - Alasan: Aplikasi dirancang offline-first
   - Future consideration: Optional feature
4. **Purchase Orders (PO)**

   - Alasan: Advanced feature, beyond scope UMKM kecil
   - Future consideration: Enterprise feature
5. **Sales/POS Integration**

   - Alasan: Aplikasi fokus ke inventory management, bukan POS
   - Out of scope: Different product domain
6. **Accounting Integration**

   - Alasan: Out of scope, different domain
   - Future consideration: API untuk third-party integration
7. **Multi-User Collaboration**

   - Alasan: Offline-first architecture, sync complexity
   - Future consideration: Jika ada cloud sync
8. **Mobile App untuk iOS (initial)**

   - Alasan: Focus Android first untuk MVP
   - Future consideration: iOS setelah Android stabil
9. **Web App**

   - Alasan: Mobile-first approach
   - Future consideration: PWA atau web app jika ada demand

### **8.2 Technical Constraints**

- **No Backend Server**: Aplikasi sepenuhnya offline, tidak ada backend server
- **No Cloud Storage**: Data tersimpan lokal, tidak ada cloud storage integration
- **No Real-time Sync**: Tidak ada real-time synchronization antar device
- **Limited to SQLite**: Database terbatas ke SQLite, tidak support database lain

---

## **9. Risks & Mitigation**

### **9.1 Technical Risks**

| **Risk**                                      | **Impact** | **Probability** | **Mitigation**                                    |
| --------------------------------------------------- | ---------------- | --------------------- | ------------------------------------------------------- |
| **Database Performance dengan Data Besar**    | High             | Medium                | Implementasi pagination, indexing, query optimization   |
| **Storage Limitation**                        | Medium           | Low                   | Image compression, data cleanup tools                   |
| **Data Corruption**                           | High             | Low                   | Transaction handling, data validation, backup mechanism |
| **Flutter/Dependencies Compatibility Issues** | Medium           | Low                   | Lock dependencies version, regular updates              |

### **9.2 Product Risks**

| **Risk**                                 | **Impact** | **Probability** | **Mitigation**                                |
| ---------------------------------------------- | ---------------- | --------------------- | --------------------------------------------------- |
| **Low User Adoption**                    | High             | Medium                | User research, beta testing, marketing              |
| **Complex UI untuk Non-Technical Users** | High             | Medium                | User testing, simplified UI, tutorial               |
| **Missing Critical Features**            | Medium           | Low                   | User feedback collection, iterative development     |
| **Competition dari Aplikasi Existing**   | Medium           | High                  | Focus ke unique value (offline, simple, affordable) |

### **9.3 Business Risks**

| **Risk**                           | **Impact** | **Probability** | **Mitigation**                                              |
| ---------------------------------------- | ---------------- | --------------------- | ----------------------------------------------------------------- |
| **No Clear Monetization Strategy** | Medium           | Medium                | Define business model (freemium, one-time purchase, subscription) |
| **Limited Market Size**            | Medium           | Low                   | Market research, targeting specific UMKM segment                  |
| **Support & Maintenance Cost**     | Low              | Medium                | Documentation, community support, automated testing               |

---

## **10. Appendix**

### **10.1 Glossary**

| **Term**          | **Definition**                                                            |
| ----------------------- | ------------------------------------------------------------------------------- |
| **SKU**           | Stock Keeping Unit - kode unik untuk mengidentifikasi varian produk             |
| **Varian**        | Variasi produk berdasarkan atribut (ukuran, warna, dll)                         |
| **Stock Opname**  | Proses penyesuaian stok untuk koreksi selisih                                   |
| **Profit Margin** | Persentase keuntungan: ((Selling Price - Cost Price) / Selling Price) × 100%   |
| **MVP**           | Minimum Viable Product - versi produk dengan fitur minimal yang dapat digunakan |
| **Offline-First** | Arsitektur aplikasi yang bekerja tanpa koneksi internet                         |

### **10.2 References**

- **SRS Document**: `SRS_Stockify.md` - Technical requirements
- **SDD Document**: `SDD_Stockify.md` - System design
- **ERD Document**: `ERD_Stockify.md` - Database schema
- **Flutter Documentation**: https://flutter.dev/docs
- **Material Design Guidelines**: https://material.io/design

### **10.3 Document History**

| **Version** | **Date** | **Author** | **Changes**    |
| ----------------- | -------------- | ---------------- | -------------------- |
| 1.0               | Desember 2024  | Tim Pengembangan | Initial PRD creation |

---

## **11. Approval**

### **Approvers**

- [ ] Product Manager
- [ ] Technical Lead
- [ ] UX Designer
- [ ] Stakeholder/Client

