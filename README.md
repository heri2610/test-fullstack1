## Instruksi Konfigurasi dan Instalasi Proyek

Proyek ini terdiri dari dua folder utama: `backend` dan `frontend`. Setelah mengkloning repositori, ikuti langkah-langkah berikut untuk mengonfigurasi dan menginstal dependensi untuk kedua bagian proyek.

### Backend

1. **Masuk ke folder `backend`**:
    ```bash
    cd backend
    ```

2. **Instalasi dependensi**:
    Menggunakan npm:
    ```bash
    npm install
    ```
    Atau menggunakan yarn:
    ```bash
    yarn install
    ```

3. **Konfigurasi file environment**:
    - Ganti nama file `.env.example` menjadi `.env`.
    - Isi konfigurasi database dalam file `.env`:
      ```
      DB_NAME=your_database_name
      DB_USER=your_database_user
      DB_PASSWORD=your_database_password
      DB_HOST=your_database_host
      DB_PORT=your_database_port
      ```

4. **Jalankan migrasi database**:
    ```bash
    npx sequelize db:migrate
    ```

5. **Jalankan server**:
    ```bash
    npx dev
    ```

6. **Pengujian endpoint**:
    - Gunakan Postman atau alat lain untuk menguji endpoint yang telah ditentukan sebelumnya.
    - Periksa dokumentasi API untuk rincian endpoint dan body permintaan.

### Frontend

1. **Masuk ke folder `frontend`**:
    ```bash
    cd frontend
    ```

2. **Instalasi dependensi**:
    Menggunakan npm:
    ```bash
    npm install
    ```
    Atau menggunakan yarn:
    ```bash
    yarn install
    ```

3. **Jalankan aplikasi frontend**:
    ```bash
    npm start
    ```
    Atau:
    ```bash
    yarn start
    ```


