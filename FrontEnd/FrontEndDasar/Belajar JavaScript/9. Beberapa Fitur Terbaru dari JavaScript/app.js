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


// 2. Spread Operator pada function 

// Math.max(1,2,3,4,5);
// Math.min(1,2,3,4,5);

// const angka = [1,2,3,4,5];

// // use spread operator
// Math.max(...angka)


// 3. Menggabungkan Nilai Array Dengan Array Lagi

// case 1
// const angka = [1,2,3,4,5,6,7,8,9]
// const nama = ['Alex', 'Bimo', 'Cici', 'Delila', 'Felix'];
// angka.push(0);

// case 2 - var campuran
// const angka = [1,2,3,4,5,6,7,8,9]
// const nama = ['Alex', 'Bimo', 'Cici', 'Delila', 'Felix'];
// const campuran = [...angka, 0, 'a', 'b'];

// case 3 - menggabungkan array dg array lainnya
// const angka = [1,2,3,4,5,6,7,8,9]
// const nama = ['Alex', 'Bimo', 'Cici', 'Delila', 'Felix'];
// const campuran = [...angka, ...nama];


// 4. Menggabungkan Property Object Dengan Object Lainnya

// case 1
// const user = {
//     name: 'John',
//     email: 'john@doe.com'
// };
// const userBaru = {...user, id: 123, password: 'password'};

// case 2 
// const user = {
//     name: 'John',
//     email: 'john@doe.com'
// };
// const credential = {
//     password: 'password',
//     token: 'u112121u2uu1u212nnd'
// }

// const userBaru = {...user, ...credential};


// 5. Malas Bikin Parameter Banyak Bisa Pakai Rest Param 

// case 1
const sumAll = (...nums) => {
    return nums.reduce((total, el) => total + el);
};

// case 2
const nama = ['Alex', 'Bimo', 'Cici', 'Delila', 'Felix'];

const pemenang = (gold, silver, bronze) => {
    console.log(`Medali emas diraih: ${gold}`)
    console.log(`Medali silver diraih: ${silver}`)
    console.log(`Medali bronze diraih: ${bronze}`)
};

// case 3 - spread opr di dalam parameter
const nama = ['Alex', 'Bimo', 'Cici', 'Delila', 'Felix', 'Arie', 'Maxalbert'];

const pemenang = (gold, silver, bronze, ...sisa) => {
    console.log(`Medali emas diraih: ${gold}`)
    console.log(`Medali silver diraih: ${silver}`)
    console.log(`Medali bronze diraih: ${bronze}`)
    console.log(`Peserta lainnya: ${sisa}`)
};