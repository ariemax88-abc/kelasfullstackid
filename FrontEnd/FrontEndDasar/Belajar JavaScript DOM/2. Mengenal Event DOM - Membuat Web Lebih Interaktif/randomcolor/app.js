
// 5. Random Color

const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', () => {
    const newColor = generateRandomColor();
    // code di bawah dr mana alur nya??
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    console.log(newColor);
})
