// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png

// 13. Latihan Memanggil Pokemon Dengan Dom 



const container = document.querySelector('#container');
const baseImgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

// case 1
// for(let i = 1; i <= 500; i++) {
//     container.append(i);
// }

// case 2
// for(let i = 1; i <= 500; i++) {
//    const pokeBall = document.createElement('div');
//    pokeBall.classList.add('pokemon');

//     const imgPokemon = document.createElement('img')
//     imgPokemon.src = `${baseImgURL}${i}.png`

//     pokeBall.appendChild(imgPokemon);
//     container.appendChild(pokeBall);
// }

// case 3 - labelin gambar pokemon
for(let i = 1; i <= 500; i++) {
    const pokeBall = document.createElement('div');
    pokeBall.classList.add('pokemon');
 
     const imgPokemon = document.createElement('img');
     imgPokemon.src = `${baseImgURL}${i}.png`;

     const label = document.createElement('span');
     label.innerText = `#${i}`;
 
     pokeBall.appendChild(imgPokemon);
     pokeBall.appendChild(label);
     container.appendChild(pokeBall);
 }