let angka = 1; //let masih bisa diubah
let Angka = 2; // besarkecil beda ya

const NamaPelanggan = 'hi';

//let = 1 ini gaboleh krna fungsi2 di js
// penggunaan var angka = 1 udh lama bgt jadi skip aje
console.log(angka)
//penggunaan const diutamakan krna ga bs diubah jd minim bugs
//klo butuh diubah baru ganti jadi let

const namaPelanggan = 'ARE'
const umur = 20
const sudahMenikah = false
const barangOrderan = ['baju', 'celana', 'sepatu']
const alamatPelanggan = {
    namaJalan: 'jl. setiabudi',
    nomorJalan: 5
}

console.log(`Nama: ${namaPelanggan}`);
console.log(`Umur: ${umur}`);
console.log(`Sudah Menikah: ${sudahMenikah}`);
console.log(`Barang Orderan: ${barangOrderan}`);
console.log(`Alamat Pelanggan: ${JSON.stringify(alamatPelanggan, null, 2)}`);

console.log(namaPelanggan.toLocaleLowerCase());
console.log(umur * 2);
console.log(NamaPelanggan * 2);

//kloo array atau object bs diubah meski pake const ya
const angkaa = [1,2,3]
angkaa.push(4)
angkaa[0] = 9
console.log(angkaa[0])
//undefined blm pernah diisi sblmnya
//null itu mau ngosongin variable
const tgl = new Date();
console.log(tgl);
console.log(tgl.getFullYear()); //ambil tahun aja dan khusus untuk date aja

const array = [1,2,3]
angkaa.pop()
//angkaa[0] = 9
console.log(array)
angkayangdihapus = array.unshift()
console.log(angkayangdihapus)
// delete alamatPelanggan.nomorJalan