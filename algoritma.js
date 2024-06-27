// pengondisian
// let nilai = 10
// let grade;
// if (nilai < 50){
//     grade = 'E';
// } else if(nilai >= 50 && nilai <= 60){
//  grade = 'D'
// } else if(nilai >= 61 && nilai <= 80){
//     grade = 'C'
// } else{
//     grade = 'A'
// }
// console.log(`Grade: ${grade}`);
// ---------------
// ---------------
// switch case ga bisa pake condition operator kayak ifelse
// const nilai = 70;
// let grade;
// switch (nilai){
//     case 80:
//         grade = 'A'
//         break;
//     case 70:
//         grade = 'B'
//         break;
//     default:
//         grade = 'C';
//         break;
// }
// console.log(`Grade: ${grade}`);
// ---------------
// ---------------
// looping
// for (let i = 1; i<= 10; i++){
//     //console.log('halo semua');
//     console.log(`halo semua:${i}`)
// }
// ---------------
// ---------------
//while
// let j = 1;

// while (j <= 10){
//     console.log(`halo semua ${j}`);
//     j++;
// }
// ---------------
// ---------------
// forEach
// let nilai = [50, 70, 40, 100];
// console.log(nilai)
// nilai.forEach((n,i) => {
//     // if (n < 50){
//     //     console.log('nilai jelek')
//     // } else{
//     //     console.log('nilai bagus')
//     // }
//     //console.log(`isi nilai: ${n}`)
//     nilai[i] = n+10;
// })
// console.log(nilai)
// ---------------
// ---------------
//map
// const nilai = [50, 70, 40, 100]

// const nilaiBaru = nilai.map((n) => {
//     return 'ya'; // mengubah isi array
// })
// console.log(`nilai baru: ${nilaiBaru}`);
// const nilai = [50, 70, 40, 100]

// const nilaiBaru = nilai.map((n,i) => {
//     console.log(i)
//     if(i === 0){
//         return n+10
//     }
//     return n; // mengubah isi array
// })
// console.log(`nilai baru: ${nilaiBaru}`);
// ---------------
// ---------------
// FILTER
// const nilai = [50, 70, 40, 100];

// const nilaiDibawah75 = nilai.filter((value, index) => {
//     return value < 75 && index == 0;
// })
// console.log(`nilai baru: ${nilaiDibawah75}`);// kalau ga memenuhi kriteria maka isi arraynya kosong/null

//tugas: buat array isi 1-10 bikin pengulangan untuk ngefilter ganjil atau genap
//const ganjil;
//const genap;

const nilai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;
const nilaiGanjil =[];
const nilaiGenap = [];
    nilai.map((value,index) => {
        if(value%2 !== 0){
            //nilaiGanjil[index] = value;
            nilaiGanjil.push(value);
            //console.log('nilaiGanjil')
        }else{
            //nilaiGenap[index] = value;
            nilaiGenap.push(value);
            //console.log('nilaiGenap')
        }
    })
console.log(`Nilai Ganjil adalah: ${nilaiGanjil}`)
console.log(`Nilai Genap adalah: ${nilaiGenap}`)
