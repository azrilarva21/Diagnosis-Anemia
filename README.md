# Sistem-Pakar-Diagnosis-Anemia

Aplikasi ini menggunakan pendekatan yang menyerupai algoritma backward chaining dalam cara diagnosis penyakit anemia. Algoritma backward chaining digunakan dalam sistem berbasis aturan yang berfokus pada menentukan konklusi atau kesimpulan berdasarkan fakta dan aturan yang ada.

Dalam program tersebut, terdapat definisi gejala-gejala yang terkait dengan setiap jenis anemia, seperti `IronDeficiencyAnemiaSymptoms`, `VitaminDeficiencyAnemiaSymptoms`, `HemolyticAnemiaSymptoms`, dan `PerniciousAnemiaSymptoms`. Setiap jenis anemia memiliki kumpulan gejala yang spesifik.


Kemudian, fungsi `checkSymptom` digunakan untuk menentukan jenis anemia berdasarkan gejala yang dipilih oleh pengguna. Fungsi ini menggunakan pendekatan yang menyerupai algoritma backward chaining dalam hal berikut:


1. Jika gejala yang dipilih oleh pengguna sesuai dengan gejala yang terkait dengan satu jenis anemia, maka diagnosis akan diberikan sesuai dengan jenis anemia tersebut.


2. Fungsi `checkSymptom` memeriksa kondisi berdasarkan gejala yang dipilih oleh pengguna dan menggunakan filter untuk memeriksa apakah gejala yang dipilih sesuai dengan gejala pada setiap jenis anemia. Jika gejala yang dipilih sesuai dengan gejala pada satu jenis anemia secara penuh, maka diagnosis akan mengidentifikasi jenis anemia tersebut.


3. Diagnosis anemia ditentukan berdasarkan aturan-aturan yang ada, di mana setiap jenis anemia memiliki gejala yang spesifik. Fungsi `checkSymptom` menggunakan aturan ini secara implisit dalam menentukan diagnosis berdasarkan gejala yang dipilih oleh pengguna.

Created By :

1204011 - Wildan Azril Arvany

1204013 - Fauziah Henni Hasibuan

1204021 - Mayke Andani Rohmaniar