# **PRODUCT REQUIREMENTS DOCUMENT (PRD)**
## **Aplikasi bro.stok - Sistem Manajemen Stok untuk UMKM**

---

### **Informasi Dokumen**
| **Item** | **Detail** |
|----------|------------|
| **Nama Dokumen** | Product Requirements Document (PRD) |
| **Nama Produk** | bro.stok (Stockify) |
| **Versi Dokumen** | 1.0 |
| **Tanggal Pembuatan** | NOVEMBER 2025 |
| **Pembuat** | Muhammad zulfikar nazzar , Shearly arviana nasya |
---

## **Daftar Isi**

1. [Executive Summary](#1-executive-summary)
2. [Product Overview](#2-product-overview)
3. [User Stories & Personas](#3-user-stories--personas)
4. [Goals & Success Metrics](#4-goals--success-metrics)
5. [Features & Requirements](#5-features--requirements)
6. [Non-Functional Requirements](#6-non-functional-requirements)
7. [Timeline & Milestones](#7-timeline--milestones)
8. [Out of Scope](#8-out-of-scope)
9. [Risks & Mitigation](#9-risks--mitigation)

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
- ✅ **Profit Tracking**: Tracking harga beli vs harga jual untuk analisis profit

### **1.3 Value Proposition**

**Untuk Pemilik UMKM:**
- Menghemat waktu 70% dalam manajemen stok
- Mengurangi kesalahan human error hingga 90%
- Dapat melihat profit margin per produk secara real-time
- Laporan bisnis yang akurat untuk pengambilan keputusan

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
- ✅ Fitur core (CRUD produk, stok, dashboard) digunakan oleh >80% users

---

## **5. Features & Requirements**

### **5.1 Feature Matrix & Priorities**

| **Feature** | **Priority** | **MVP** | **User Story** | **Effort** |
|-------------|--------------|---------|----------------|------------|
| Autentikasi (Login/Register) | P0 (Critical) | ✅ Yes | US-AUTH-1 | Medium |
| CRUD Produk | P0 (Critical) | ✅ Yes | US-1.1, US-1.2 | High |
| CRUD Varian | P0 (Critical) | ✅ Yes | US-1.2 | High |
| Stok Masuk | P0 (Critical) | ✅ Yes | US-2.1 | Medium |
| Stok Keluar | P0 (Critical) | ✅ Yes | US-2.2 | Medium |
| Stock Adjustment | P0 (Critical) | ✅ Yes | US-2.3 | Medium |
| Dashboard Ringkasan | P0 (Critical) | ✅ Yes | US-3.1 | Medium |
| Riwayat Transaksi | P0 (Critical) | ✅ Yes | US-4.2 | Medium |
| Pencarian Produk | P0 (Critical) | ✅ Yes | US-1.3 | Low |
| Export Data (CSV/Excel) | P1 (High) | ✅ Yes | US-4.1 | Medium |
| Profit Analysis | P1 (High) | ✅ Yes | US-3.3 | Medium |
| Grafik Stok (7 hari) | P1 (High) | ✅ Yes | US-3.2 | Medium |
| Notifikasi Stok Rendah | P1 (High) | ✅ Yes | US-5.1 | Low |
| Upload Gambar Produk | P2 (Medium) | ✅ Yes | US-1.1 | Medium |
| Filter Riwayat | P2 (Medium) | ✅ Yes | US-4.2 | Low |
| Settings & Konfigurasi | P2 (Medium) | ✅ Yes | - | Low |
| User Profile | P2 (Medium) | ✅ Yes | - | Low |
| Data Management (Backup/Restore) | P3 (Low) | ❌ No | - | High |
| Barcode Scanner | P3 (Low) | ❌ No | - | Medium |
| Supplier Management | P3 (Low) | ❌ No | - | High |
| Multi-Location/Warehouse | P3 (Low) | ❌ No | - | Very High |

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
- Input: Ukuran (required), Warna (required), SKU (required, unique per user), Stok awal (required, ≥0), Harga Beli (optional), Harga Jual (optional)
- Validasi: SKU harus unik per user
- Auto-calculate: Total Cost Value, Total Selling Value, Profit Margin
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
- Input: Varian produk, Jumlah (required, >0), Catatan (optional)
- Validasi: Jumlah harus positif
- Update stok varian otomatis
- Catat ke StockHistory dengan operation_type = "in"
- Timestamp dan user_id tercatat

**Requirement STOCK-2: Stok Keluar**
- Input: Varian produk, Jumlah (required, >0), Catatan (optional)
- Validasi: Stok tersedia harus ≥ jumlah yang dikeluarkan
- Update stok varian otomatis (stok berkurang)
- Catat ke StockHistory dengan operation_type = "out"
- Error message jika stok tidak cukup

**Requirement STOCK-3: Stock Adjustment**
- Input: Varian produk, Stok Baru (required, ≥0), Catatan (required)
- Validasi: Catatan wajib untuk audit trail
- Hitung selisih otomatis: selisih = stok baru - stok lama
- Update stok varian
- Catat ke StockHistory dengan operation_type = "adjustment"
- Tampilkan previous stock dan new stock

#### **5.2.5 Dashboard**

**Requirement DASH-1: Ringkasan Statistik**
- Total Produk: jumlah produk unik user
- Total Varian: jumlah semua varian
- Stok Rendah: jumlah varian dengan stok < threshold
- Total Cost Value: sum(stock × cost_price)
- Total Selling Value: sum(stock × selling_price)
- Potential Profit: Total Selling - Total Cost

**Requirement DASH-2: Grafik Stok 7 Hari**
- Bar chart: Stok Masuk vs Stok Keluar per hari
- Periode: 7 hari terakhir
- X-axis: Tanggal
- Y-axis: Jumlah
- Warna berbeda untuk in vs out

**Requirement DASH-3: List Stok Rendah**
- Menampilkan varian dengan stok < threshold
- Sort berdasarkan stok (terendah dulu)
- Color coding: Red (<5), Yellow (5-10), Green (>10)
- Quick action: Tombol "Stok Masuk" langsung

#### **5.2.6 Riwayat Transaksi**

**Requirement HIST-1: List Riwayat**
- Menampilkan semua riwayat transaksi user
- Sort: Terbaru dulu (default)
- Detail: Tanggal, Produk, Varian, Operasi, Jumlah, User, Catatan
- Pagination jika >100 records

**Requirement HIST-2: Filter Riwayat**
- Filter berdasarkan:
  - Jenis operasi: All, In, Out, Adjustment
  - Rentang tanggal: Custom date range
  - Produk: Pilih produk tertentu
- Multiple filter dapat dikombinasi
- Clear filter functionality

#### **5.2.7 Export Data**

**Requirement EXP-1: Export Produk**
- Format: CSV atau Excel (XLSX)
- Include columns:
  - Nama Produk, Brand, SKU, Ukuran, Warna, Stok
  - Harga Beli, Harga Jual
  - Margin %, Profit per Unit
  - Total Cost Value, Total Selling Value, Potential Profit
  - Status (Stok Rendah/OK)
  - Tanggal Dibuat
- Share ke aplikasi lain (Email, Drive, dll)

**Requirement EXP-2: Export Riwayat**
- Format: CSV atau Excel
- Include columns:
  - Tanggal, Produk, Varian, SKU
  - Jenis Operasi, Jumlah
  - Previous Stock, New Stock
  - User, Catatan
- Filter dapat diterapkan sebelum export

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

#### **Phase 2: Enhancement** - 4-6 minggu
**Goal**: Fitur tambahan dan optimasi

**Sprint 11-12 (2 minggu): Export & Reports**
- Export CSV/Excel
- Filter riwayat
- Enhanced reports

**Sprint 13-14 (2 minggu): UI/UX Polish**
- UI refinement
- Performance optimization
- Bug fixes

**Sprint 15-16 (2 minggu): Testing & Documentation**
- Comprehensive testing
- User documentation
- Play Store preparation

### **7.2 Milestones**

| **Milestone** | **Target Date** | **Deliverables** |
|---------------|-----------------|------------------|
| **M1: MVP Alpha** | Week 10 | Core features complete, internal testing |
| **M2: MVP Beta** | Week 12 | All MVP features, bug fixes, user testing |
| **M3: Production Ready** | Week 16 | Full testing, documentation, Play Store submission |
| **M4: Public Launch** | Week 18 | Play Store release, marketing |

### **7.3 Feature Prioritization**

**Must Have (MVP):**
- ✅ Authentication
- ✅ CRUD Produk & Varian
- ✅ Stok Masuk/Keluar/Adjustment
- ✅ Dashboard
- ✅ Riwayat Transaksi
- ✅ Profit Analysis
- ✅ Export Data

**Should Have (Post-MVP):**
- Barcode Scanner
- Supplier Management
- Category Management
- Enhanced Analytics

**Nice to Have (Future):**
- Multi-location/Warehouse
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

3. **Multi-Location/Warehouse**
   - Alasan: Target user (UMKM kecil) biasanya single location
   - Future consideration: Jika ada demand tinggi

4. **Cloud Sync/Backup**
   - Alasan: Aplikasi dirancang offline-first
   - Future consideration: Optional feature

5. **Purchase Orders (PO)**
   - Alasan: Advanced feature, beyond scope UMKM kecil
   - Future consideration: Enterprise feature

6. **Sales/POS Integration**
   - Alasan: Aplikasi fokus ke inventory management, bukan POS
   - Out of scope: Different product domain

7. **Accounting Integration**
   - Alasan: Out of scope, different domain
   - Future consideration: API untuk third-party integration

8. **Multi-User Collaboration**
   - Alasan: Offline-first architecture, sync complexity
   - Future consideration: Jika ada cloud sync

9. **Mobile App untuk iOS (initial)**
   - Alasan: Focus Android first untuk MVP
   - Future consideration: iOS setelah Android stabil

10. **Web App**
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

| **Risk** | **Impact** | **Probability** | **Mitigation** |
|----------|------------|-----------------|----------------|
| **Database Performance dengan Data Besar** | High | Medium | Implementasi pagination, indexing, query optimization |
| **Storage Limitation** | Medium | Low | Image compression, data cleanup tools |
| **Data Corruption** | High | Low | Transaction handling, data validation, backup mechanism |
| **Flutter/Dependencies Compatibility Issues** | Medium | Low | Lock dependencies version, regular updates |

### **9.2 Product Risks**

| **Risk** | **Impact** | **Probability** | **Mitigation** |
|----------|------------|-----------------|----------------|
| **Low User Adoption** | High | Medium | User research, beta testing, marketing |
| **Complex UI untuk Non-Technical Users** | High | Medium | User testing, simplified UI, tutorial |
| **Missing Critical Features** | Medium | Low | User feedback collection, iterative development |
| **Competition dari Aplikasi Existing** | Medium | High | Focus ke unique value (offline, simple, affordable) |

### **9.3 Business Risks**

| **Risk** | **Impact** | **Probability** | **Mitigation** |
|----------|------------|-----------------|----------------|
| **No Clear Monetization Strategy** | Medium | Medium | Define business model (freemium, one-time purchase, subscription) |
| **Limited Market Size** | Medium | Low | Market research, targeting specific UMKM segment |
| **Support & Maintenance Cost** | Low | Medium | Documentation, community support, automated testing |

---

## **10. Appendix**

### **10.1 Glossary**

| **Term** | **Definition** |
|----------|----------------|
| **SKU** | Stock Keeping Unit - kode unik untuk mengidentifikasi varian produk |
| **Varian** | Variasi produk berdasarkan atribut (ukuran, warna, dll) |
| **Stock Opname** | Proses penyesuaian stok untuk koreksi selisih |
| **Profit Margin** | Persentase keuntungan: ((Selling Price - Cost Price) / Selling Price) × 100% |
| **MVP** | Minimum Viable Product - versi produk dengan fitur minimal yang dapat digunakan |
| **Offline-First** | Arsitektur aplikasi yang bekerja tanpa koneksi internet |


