const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button')

for(let button of buttons) {
    button.addEventListener('click', colorize);
    // button.addEventListener('click', () => {
        // coding an di bawah runtut nya dari mana? :v (dari atau sebelum no 6)
    //     button.style.backgroundColor = generateRandomColor();
    //     button.style.color = generateRandomColor();
    // });
}

// 6. Kotak edit dg warna tertentu

const headings = document.querySelectorAll('h1');

for(let heading of headings) {
    heading.addEventListener('click', colorize);
    // heading.addEventListener('click', () => {
        // coding an di bawah runtut nya dari mana? :v (dari atau sebelum no 6)
        // heading.style.backgroundColor = generateRandomColor();
        // heading.style.color = generateRandomColor();
//     });
}

// use this lebih simple
function colorize() {
    this.style.backgroundColor = generateRandomColor();
    this.style.color = generateRandomColor();
}


