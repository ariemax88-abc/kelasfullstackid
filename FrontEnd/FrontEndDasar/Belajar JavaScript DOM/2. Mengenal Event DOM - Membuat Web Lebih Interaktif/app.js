const button = document.querySelector('#clickme');

// event onclick use function langsung
button.onclick = function () {
    console.log("You clicked me");
};

// pisahkan use variabel, lalu panggil var nya
const scream = () => {
    console.log('Dont touch me');
}

button.onmouseover = scream;
