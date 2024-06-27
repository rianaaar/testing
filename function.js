// const hitungLuasPersegiPanjang = require('./library'); //import from another file

// const hasil = hitungLuasPersegiPanjang(5,3);
// console.log(`hasil: ${hasil}`)

// function hitungLuasPersegiPanjang(panjang, lebar){ //parameter
//     return panjang * lebar;
// }

// const hitungLuasPersegiPanjang = function(panjang, lebar){
//     return panjang * lebar
// }

// const hitungLuasPersegiPanjang = (panjang,lebar) => panjang * lebar;


// function tambahLima(angka){
//     angka = angka + 5;
//     return angka;
// }
// const nilai = 5;
// const hasil = tambahLima(nilai);
// console.log(`Nilai: ${nilai}`);
// console.log(`hasil: ${hasil}`);

// function tambahLima(obj){ //by ref untuk object & array akan merubah dirinya
//     obj.angka = obj.angka+5; //merubah objectnya
//     return obj.angka;
// }
// const nilai = {
//     angka: 5
// }
// const hasil = tambahLima(nilai);
// console.log(`nilai: ${JSON.stringify(nilai)}`);
// console.log(`hasil: ${JSON.stringify(hasil)}`);

// const halo2 = function() {
//     console.log('halo 2')
// }

// const halo = function(salam){
//     console.log('halo')
//     salam();
// }
// halo(halo2);

const axios = require('axios');

axios.get('https://api2-lb.jubelio.com/ping')
  .then(function (response) { //async yang then
    // handle success
    console.log(response.data);
  })

  async function callApi(){
    const response = await axios.get();
    console.log(response.data);
  }
  callApi();