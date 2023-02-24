// 10. Mengelola Kondisi Error Dengan Async Await 04:48

requestPromise('movie.com')
    .then((result) => {
        console.log('page 1');
        console.log(result);
        return requestPromise('movie.com')
    })
    .then(() => {
        console.log('page 2');
        return requestPromise('movie.com')
    })
    .then(() => {
        console.log('page 3');
        return requestPromise('movie.com')
    })
    .catch((err) => {
        console.log(err);
    });

// Promise version
const requestPromise = (url) => {
	return new Promise((resolve, reject) => {
		const delay = Math.floor(Math.random() * 4500) + 500;
		setTimeout(() => {
			if (delay > 2000) {
				reject('Error: Connection Timeout');
			} else {
				resolve(`Success: ${url} (${delay}ms)`);
			}
		}, delay);
	});
};

async function requestHandler(){
    let result = await requestPromise('movie.com');
    console.log('Hello');
}