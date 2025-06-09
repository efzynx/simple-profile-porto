# Website Portofolio - Ahmad Fauzan Adiman

Selamat datang di repositori untuk website portofolio pribadi saya. Proyek ini dibangun dari awal menggunakan teknologi web modern untuk menciptakan sebuah *showcase* yang bersih, interaktif, dan sepenuhnya responsif, lengkap dengan animasi dan fitur-fitur yang dipoles secara profesional.

![Screenshot Portofolio](https://i.ibb.co/JRm2FCdr/6212984504121935034.jpg)


</br>

<p align="center">
  <a href="https://www.efzyn.my.id/" target="_blank">
    <img src="https://img.shields.io/badge/Lihat%20Live%20Demo-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo"/>
  </a>
</p>

---

## ✨ Fitur Utama

-   **Desain Modern & Responsif:** Tampilan yang beradaptasi dengan mulus di berbagai perangkat, dari desktop hingga mobile.
-   **Animasi Halus & Interaktif:** Dibuat dengan **Framer Motion** untuk memberikan pengalaman pengguna yang dinamis:
    -   Animasi pemuatan awal (Preloader).
    -   Animasi "mengetik" yang diikuti dengan animasi "gelombang" sebagai *idle animation*.
    -   Efek *hover* yang interaktif pada tombol dan kartu proyek.
-   **Navigasi Cerdas:** Dilengkapi dengan *navbar* yang muncul saat menggulir dan secara otomatis menyorot seksi yang sedang aktif.
-   **Pengalaman Pengguna (UX) yang Dipoles:**
    -   Kursor kustom yang mengikuti pergerakan mouse.
    -   Tombol "Kembali ke Atas" untuk navigasi yang mudah.
    -   Tombol "Unduh CV" yang praktis untuk rekruter.
-   **Dapat di-Dockerize:** Disiapkan dengan `Dockerfile` dan `.dockerignore` untuk portabilitas dan potensi *self-hosting*.

---

## 🛠️ Teknologi yang Digunakan

-   **Framework:** [Next.js](https://nextjs.org/) 14+ (App Router)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Animasi:** [Framer Motion](https://www.framer.com/motion/)
-   **Bahasa:** [JavaScript](https://id.wikipedia.org/wiki/JavaScript)
-   **Ikon:** [Lucide React](https://lucide.dev/)
-   **Deployment:** [Vercel](https://vercel.com/)
-   **Containerization:** [Docker](https://www.docker.com/)

---

## 🚀 Menjalankan Secara Lokal

Untuk menjalankan proyek ini di lingkungan pengembangan lokal, ikuti langkah-langkah berikut:

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/efzynx/simple-profile-porto.git](https://github.com/efzynx/simple-profile-porto.git)
    cd simple-profile-porto
    ```

2.  **Instal dependensi:**
    ```bash
    npm install
    ```

3.  **Jalankan server development:**
    ```bash
    npm run dev
    ```

4.  Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

---

## 🐳 Menjalankan dengan Docker

Anda bisa menjalankan proyek ini menggunakan Docker biasa atau dengan Docker Compose (lebih direkomendasikan).

### Menggunakan Docker Compose (Cara Mudah)

1.  **Pastikan Docker dan Docker Compose sudah terinstal.**

2.  **Jalankan aplikasi:**
    ```bash
    docker-compose up --build
    ```
    Perintah ini akan membangun image dan menjalankan container secara otomatis. Untuk menjalankannya lagi di lain waktu, cukup gunakan `docker-compose up`.

3.  **Hentikan aplikasi:**
    ```bash
    docker-compose down
    ```

### Menggunakan Docker Biasa

1.  **Build Docker image:**
    ```bash
    docker build -t nama-portfolio-anda .
    ```

2.  **Jalankan Docker container:**
    ```bash
    docker run -p 3000:3000 nama-portfolio-anda
    ```

---

Terima kasih telah mengunjungi repositori ini!
