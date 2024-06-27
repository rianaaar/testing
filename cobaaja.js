// const dataSiswa = [
//     {
//         nama: "Budi",
//         matematika: 85,
//         bahasa_indonesia: 78,
//         ipa: 92
//     },
//     {
//         nama: "Nia",
//         matematika: 70,
//         bahasa_indonesia: 90,
//         ipa: 85
//     },
//     {
//         nama: "Rudi",
//         matematika: 50,
//         bahasa_indonesia: 80,
//         ipa: 85
//     },
//     {
//         nama: "Linda",
//         matematika: 65,
//         bahasa_indonesia: 90,
//         ipa: 75
//     },
//     {
//         nama: "Joko",
//         matematika: 45,
//         bahasa_indonesia: 60,
//         ipa: 75
//     },
//     {
//         nama: "Roni",
//         matematika: 70,
//         bahasa_indonesia: 75,
//         ipa: 65
//     },
//     {
//         nama: "Mia",
//         matematika: 60,
//         bahasa_indonesia: 75,
//         ipa: 65
//     },
//     {
//         nama: "Sudarsono",
//         matematika: 45,
//         bahasa_indonesia: 70,
//         ipa: 75
//     },
//     {
//         nama: "Raju",
//         matematika: 40,
//         bahasa_indonesia: 70,
//         ipa: 65
//     },
//     {
//         nama: "Vina",
//         matematika: 75,
//         bahasa_indonesia: 75,
//         ipa: 65
//     },
// ];

//Pengulangan: Gunakan loop untuk kelola data nilai dari beberapa siswa.
//Variabel: Buat variabel ulang dari masing-masing data dari dataSiswa untuk menyimpan nama dan nilai dari tiga mata pelajaran, di tambah 1 variable untuk menampung status kelulusan dengan tipe data string.
//Operator: Gunakan operator aritmatika untuk menghitung rata-rata nilai.
//Algoritma: Tentukan kelulusan berdasarkan kriteria bahwa rata-rata nilai harus lebih atau sama dengan 70.
//Cetak semua data siswa yang lulus dan tidak lulus dengan informasi:
//Nama siswa
//Rata-rata nilai
//Status kelulusan

//console.log(dataSiswa)
// let dataSiswaNew=[];
// let avg_nilai = [];
// let statusKelulusan = [];
// for(i=0; i<dataSiswa.length;i++){
//     dataSiswaNew.push({
//         nama_siswa: dataSiswa[i].nama,
//         nilai: [dataSiswa[i].bahasa_indonesia,dataSiswa[i].ipa,dataSiswa[i].matematika]
//     });
//     let sum_nilai = 0;
//     dataSiswaNew[i].nilai.map((value) => {
//         sum_nilai+= value
//         //
//     });
//     //console.log(sum_nilai)
//     avg_nilai[i] = Math.round(sum_nilai/3);
//     //console.log(avg_nilai)
//     if(avg_nilai[i] >= 70){
//         statusKelulusan[i] = 'Lulus'
//             }else{
//         statusKelulusan[i] ='Tidak Lulus'
//             }
// };
// //for(i=0, i<)
// dataSiswaNew.map((value,index) =>{
//     value.averageNilai = avg_nilai[index];
//     value.statusKelulusan = statusKelulusan[index]
//     //console.log(value)
// })
// //console.log(avg_nilai)
// //console.log(statusKelulusan)
// console.log(dataSiswaNew)

const dataSiswa = require('./datasiswa')
// // Fungsi untuk menghitung rata-rata nilai
function hitungRataRata(nilaiMatematika, nilaiBahasaIndonesia, nilaiIpa) {
    return (nilaiMatematika + nilaiBahasaIndonesia + nilaiIpa) / 3;
}

// // Fungsi untuk menentukan status kelulusan
function tentukanKelulusan(rataRataNilai) {
    return rataRataNilai >= 70 ? "Lulus" : "Tidak Lulus";
}

// // Fungsi untuk mencetak data siswa
function cetakDataSiswa() {
    dataSiswa.forEach(siswa => {
        // Menghitung rata-rata nilai
        let rataRataNilai = hitungRataRata(siswa.matematika, siswa.bahasa_indonesia, siswa.ipa);
        
        // Menentukan status kelulusan
        let statusKelulusan = tentukanKelulusan(rataRataNilai);
        
        // Mencetak data siswa
        console.log(`Nama: ${siswa.nama}`);
        console.log(`Rata-rata Nilai: ${rataRataNilai.toFixed(2)}`);
        console.log(`Status Kelulusan: ${statusKelulusan}`);
        console.log('-----------------------------');
    });
}

// Panggil fungsi untuk mencetak data siswa
cetakDataSiswa();