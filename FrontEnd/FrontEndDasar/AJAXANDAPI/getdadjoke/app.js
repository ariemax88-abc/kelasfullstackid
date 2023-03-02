
// case 3 - sambungan
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

// case 3 - generate element list
const addJoke = async () => {
    const jokeText = await getJokes();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
};

// case 1 - getJokes panggil response
// const getJokes = async () => {
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     };
//     const res = await axios.get('https://icanhazdadjoke.com/', config);
//     console.log(res);
// };

// case 2 - panggil response use property
const getJokes = async () => {
   try {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };
    const res = await axios.get('https://icanhazdadjoke123.com/', config);
    return(res.data.joke);
   } catch (error) {
    return "No Jokes Available!";
   }
};

// case 4 - Buat Event Listener
button.addEventListener('click', addJoke);
