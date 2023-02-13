// const form = document.querySelector('#form');
// form.addEventListener('submit', function(e) {
//    e.preventDefault();
//     console.log('submitted form')
//     // console.log('submited');
// });

// document.querySelector('a').addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log('harusnya ke google')
// })


// [9] Praktek Input Realtime Dengan Event Dan Dom 06:55

const form = document.querySelector('#form');
const input = document.querySelector('input');
const list = document.querySelector('#notes');

// [10] Event Input Dan Change Pada Form
// input.addEventListener('change', (e) => {
//     console.log('Nilai Berubah')
// });

input.addEventListener('input', (e) => {
    document.querySelector('h1').innerText = input.value;
    console.log('Nilai berhasil diinput');
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const noteValue = input.value;
    const newList = document.createElement('li');
    
    newList.innerText = noteValue;
     list.append(newList);
     input.value = '';
    // console.log(newList);

   
    // console.log(noteValue)
    // console.log('submited');
});

