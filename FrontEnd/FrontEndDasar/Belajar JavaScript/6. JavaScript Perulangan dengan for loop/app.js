// looping manual :v
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// for (let i = 1; i <= 10; i++){
//     console.log('saya ada di dalam loop');
//     console.log(i);
// }

// for (let i = 0; i <= 20; i+=2){
//     console.log(i);
// }

// for (let i = 1; i <= 20; i+=2){
//     console.log(i);
// }

// for (let i = 20; i >= 0; i -= 2){
//     console.log(i);
// }

// for (let i = 10; i <= 100000; i *= 10){
//     console.log(i);
// }

// const animals = ['cat', 'deer', 'hog', 'koala', 'zebra'];

// for (let i = 0;  i < animals.length; i++) {
//     console.log(i+1, animals[i]);
// }

// coding an dibawah masih error - koreksi lagi :)
// const studentRow = [
//     ['Olivia', 'Lian', 'Emma', 'Noah'],
//     ['Amelia', 'Oliver', 'Ava', 'Elijah'],
//     ['Sophia', 'Mateo', 'Isabella', 'Lucas'],
// ];

// for (let i = 0; i < studentRow.length; i++){
//     const row = studentRow(i); 
//     console.log(`Seat Row #${i + 1}`);
//     for (let j = 0; j < row.length; j++) {
//         console.log(`   ${row[j]}`);
//     }

// }

// let num = 0;
// while (num < 10) {
//     console.log(num);
//     num++;
// }

// for (let num = 0; num < 10; num++){
//     console.log(num);
// }

// const PASSWORD = 'Pass123';

// let guess = prompt('enter the password');
// while (guess !== PASSWORD) {
//     guess = prompt('enter the password');
// }
// alert('congrats! the password is correct');

// const pilihan = 'abcd';
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i}. Soal nomor ${i}:`)
//     for (let j = 0; j < pilihan.length; j++) {
//         console.log(`   ${pilihan[j]}. Pilihan Jawaban`);
//     }
// }


// break yaitu memberhentikan proses perulangan 
let input = prompt ('Hei, say something!');
while(true) {
    input = prompt(input);
    if(input.toLowerCase() === "stop"){
        break;
    } 
}
alert('ok');
