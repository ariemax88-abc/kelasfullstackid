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

// add Event Listener in DOM
const eventbtn = document.querySelector('#eventbtn');
// eventbtn.addEventListener('click', function(){
//     alert('clicked');
// });

// perbedaan event addEventListener dg event onclick
eventbtn.addEventListener('click', stepSatu);
eventbtn.addEventListener('click', stepDua);
   

// case: Kenapa ada add Event Listener?
function stepSatu(){
    console.log('step satu');
}
function stepDua(){
    console.log('step dua');
}

// eventbtn.onclick = stepSatu;
// eventbtn.onclick = stepDua;