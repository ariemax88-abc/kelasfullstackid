// 1. Mengatur Default Value Pada Function

// case 1
// function lemparDadu(sisi){
//     return Math.floor(Math.random() * sisi) + 1;
// }

// case 2
// function lemparDadu(sisi = 6){
//     return Math.floor(Math.random() * sisi) + 1;
// }

// case 3
// function sapa(name, msg) {
//     console.log(`${name} ${msg}`);
// }

// case 4
// function sapa(name = 'User', msg = 'Selamat bekerja') {
//     console.log(`${name} ${msg}`);
// }

// case 5 
// function sapa(name, msg  = 'Selamat bekerja') {
//     console.log(`${name} ${msg}`);
// }

// case 6 - msg nya taruh di awal 
// function sapa(msg = 'Selamat bekerja', name) {
//     console.log(`${name} ${msg}`);
// }


// 2. Mengubah Array Atau Object Menjadi Deret Value Argument Function / spread operator

Math.max(1,2,3,4,5);
Math.min(1,2,3,4,5);

const angka = [1,2,3,4,5];

// use spread operator
Math.max(...angka)
