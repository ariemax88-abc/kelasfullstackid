
// 1. Foreach Method 

// case 1
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function print(element) {
//     console.log(element)
// }

// print(angka[0]);
// print(angka[1]);

// case 2
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function print(element) {
//     console.log(element)
// }

// print(angka[0]);
// print(angka[1]);

// angka.forEach(print);

// case 3

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

angka.forEach(function(el){
    if(el % 2 === 0 ) {
        console.log(el);
    }
});

// case 4

// const animes = [
//     {
//         title: 'Attact on Titan',
//         rating: 90,
//     },
//     {
//         title: 'One Piece',
//         rating: 89,
//     },
//     {
//         title: 'Bleach',
//         rating: 82,
//     },
//     {
//         title: 'Hunter x Hunter',
//         rating: 90,
//     },
//     {
//         title: 'Naruto',
//         rating: 84,
//     },

// ];

// animes.forEach(function(anime){
//     console.log(`${anime.title} - ${anime.rating}/100`);
// });