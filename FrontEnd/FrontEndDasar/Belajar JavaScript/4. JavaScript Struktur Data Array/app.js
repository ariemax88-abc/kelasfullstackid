// let warna = ['hijau', 'kuning', 'kelab', 'bu'];

// warna[2] = "kelabu"
// warna[3] = "merah muda"
// console.log(warna);

// let barbel = [];

// barbel.push(20);

// barbel.push(15);

// barbel.push(10, 5, 2.5);

// barbel.pop();
// barbel.pop();
// barbel.pop();
// barbel.pop();
// barbel.pop();

// console.log(barbel);

// let student = ['Bobby', 'Charlie', 'Denies', 'Eula'];
// student.unshift('Ain');
// student.unshift(0);
// student.shift();

// console.log(student);

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];

// const array3 = array2.concat(array1);

// console.log(array3);

// const beast = ['ant', 'bison', 'camel', 'dark', 'bison'];

// console.log(beast.indexOf('bison'));
// console.log(beast.indexOf('bison', 2));
// console.log(beast.indexOf('giraffe'));

// const array1 = [1,2,3];

// console.log(array1.includes(2)); //apakah ada nilai 2 di dalam array1

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));

// console.log(pets.includes('at'));

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// // // Expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]

const months = ['Jan', 'March', 'April', 'June', 'july', 'aug'];
months.splice(1, 0, 'feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 2, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
