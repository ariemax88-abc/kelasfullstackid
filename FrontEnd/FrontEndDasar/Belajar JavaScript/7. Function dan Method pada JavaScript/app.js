// 1. Pengenalan Function Di Javascript
// let lemparDadu = console.log(lemparDadu);

//2. Mendefinisikan Dan Menjalankan Function
// function lemparDadu(){
//     console.log(Math.floor(Math.random() * 6 ) + 1);
// }
// function nyanyi() {
//     console.log("Cek...");
//     console.log("Do re mi...");
// }

// // panggil fungsi 
// nyanyi();
// nyanyi();
// nyanyi();
// nyanyi();
// nyanyi();

// 3. Argument Dan Parameter Dalam Function
// function selamatPagi(name){
//     console.log(`Halo, ${name}. Selamat Pagi!`);
// }

// jadi Aim disini kita sebut sbg argument
// selamatPagi('Aim');

// 4. Multiple Parameter Dan Argument
// function jumlahkan(a = 0, b = 0) {
//     const total = a + b;
//     console.log(total);
// }

// 5. Statement Return Pada Function
// function jumlahkan(a, b) {
//     const total = a + b;
//     return total;
//     console.log('Selesai');
// }

// 5. Statement Return Pada Function (2)
// function jumlahkan(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return 'Bukan angka';
//     }
//     return a + b;
// }

// 6. Visibilitas Variabel Sesuai Scope Atau Ruang Lingkup

// let programming = 'JavaScript';

// function typeSafe(){
//    let programming = 'TypeScript';
//     console.log(programming);
// }
// typeSafe(); 
// console.log(programming);


// 7. Blocked Scope Variabel

// case 1
// let tinggi = 8;
// if (tinggi > 5) {
//     let lebar = 10;
//     console.log(lebar);
// }
// console.log(tinggi);

// case 2
// let tinggi = 8;
// if (tinggi > 5) {
//     let lebar = 10;
    // console.log(lebar);
//}
// console.log(lebar);

// case 3
// for (let index = 0; index < 10; index++){
//     const indexNumber = index;
//     // console.log(indexNumber);
// }
// console.log(indexNumber);

// case 4
// let tinggi = 8;
// if (tinggi > 5) {
//     var lebar = 10;
//     // console.log(lebar);
// }
// console.log("lebar: ", lebar);

// for (let index = 0; index < 10; index++){
//     var indexNumber = index;
//     // console.log(indexNumber);
// }
// console.log("index: ", indexNumber);

// Case 5
// let tinggi = 8;
// if (tinggi > 5) {
//     var lebar = 10;
//     // console.log(lebar);
// }
// console.log("lebar: ", lebar);

// for (let index = 0; index < 10; index++){
//     var indexNumber = index;
//     // console.log(indexNumber);
// }
// console.log("index: ", indexNumber);

// case 6
let tinggi = 8;
if (tinggi > 5) {
    var lebar = 10;
    // console.log(lebar);
}
console.log("lebar: ", lebar);

for (let index = 0; index < 10; index++){
    lebar  = index;
    // console.log(indexNumber);
}
console.log("lebar: ", lebar);
