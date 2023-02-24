// callback version
const requestCallback = (url, success, failure) => {
	const delay = Math.floor(Math.random() * 4500) + 500;
	setTimeout(() => {
		if (delay > 4000) {
			failure('Error: Connection Timeout');
		} else {
			success(`Success: ${url} (${delay}ms)`);
		}
	}, delay);
};

// 7. Cara Membuat Promise
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

// promise ini masih error saat memanggil requestHandler di console
async function requestHandler(){
	try {
		let result = await requestPromise('movie.com');
		console.log(result);
	} catch (error) {
		console.log('Pesan Error', error);
	}
}




	

// 6.	Cara Benar Menggunakan Fungsi Promise
// requestPromise('movie.com')
//     .then((result) => {
//         console.log(result);
//         console.log('page 1');
//         return requestPromise('movie.com');
//     })
//     .then((result) => {
//         console.log(result);
//         console.log('page 2');
//         return requestPromise('movie.com');
//     })
//     .then((result) => {
//         console.log(result);
//         console.log('page 3');
//         return requestPromise('movie.com');
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// fail pakai contoh promise saja
// requestPromise('movie.com')
//     .then((response) => {
//         console.log('success', response);
//         requestPromise('movie.com')
//             .then((response) => {
//                 console.log('success', response);
//                 requestPromise('movie.com')
//                     .then((response) => {
//                        console.log('success', response);
//              })
//                     .catch((error) => {
//         console.log('error', error);
//     });
//         })
//             .catch((error) => {
//                 console.log('error', error);
//         });
//     })
//     .catch((error) => {
//         console.log('error', error);
//     });

// requestPromise('movie.com')
// 	.then((result) => {
// 		console.log('page 1');
// 		console.log(result);
// 		return requestPromise('movie.com');
// 	})
// 	.then(() => {
// 		console.log('page 2');
// 		return requestPromise('movie.com');
// 	})
// 	.then(() => {
// 		console.log('page 3');
// 		return requestPromise('movie.com');
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// async function requestHandler() {
// 	try {
// 		let result = await requestPromise('movie.com');
// 		console.log(result);
// 	} catch (error) {
// 		console.log('Pesan Error', error);
// 	}
// }

// 4. Latihan Request Pakai Callback Function
// requestCallback(
//     'movie.com',
//      function(response) {
//     console.log('success', response);
//     requestCallback(
//         'movie.com',
//          function(response) {
//         console.log('success', response);
//         requestCallback(
//             'movie.com',
//              function(response) {
//             console.log('success', response);
//             requestCallback(
//                 'movie.com',
//                  function(response) {
//                 console.log('success', response);
//                 requestCallback(
//                     'movie.com',
//                      function(response) {
//                     console.log('success', response);
//                 }, function(error) {
                
//                     console.log('error', error);
//                     }
//                 );
//             }, function(error) {
            
//                 console.log('error', error);
//                 }
//             );
//         }, function(error) {
        
//             console.log('error', error);
//             }
//         );
//     }, function(error) {
    
//         console.log('error', error);
//         }
//     );
// }, function(error) {

//     console.log('error', error);
//     }
// );




// requestPromise('movie.com')
// 	.then((response) => {
// 		console.log('success', response);
// 		requestPromise('movie.com')
// 			.then((response) => {
// 				console.log('success', response);
// 				requestPromise('movie.com')
// 					.then((response) => {
// 						console.log('success', response);
// 						requestPromise('movie.com')
// 							.then((response) => {
// 								console.log('success', response);
// 								requestPromise('movie.com')
// 									.then((response) => {
// 										console.log('success', response);
// 									})
// 									.catch((error) => {
// 										console.log('error', error);
// 									});
// 							})
// 							.catch((error) => {
// 								console.log('error', error);
// 							});
// 					})
// 					.catch((error) => {
// 						console.log('error', error);
// 					});
// 			})
// 			.catch((error) => {
// 				console.log('error', error);
// 			});
// 	})
// 	.catch((error) => {
// 		console.log('error', error);
// 	});

// requestCallback(
// 	'movie.com',
// 	function (response) {
// 		console.log('success', response);
// 		requestCallback(
// 			'movie.com',
// 			function (response) {
// 				console.log('success', response);
// 				requestCallback(
// 					'movie.com',
// 					function (response) {
// 						console.log('success', response);
// 						requestCallback(
// 							'movie.com',
// 							function (response) {
// 								console.log('success', response);
// 								requestCallback(
// 									'movie.com',
// 									function (response) {
// 										console.log('success', response);
// 									},
// 									function (error) {
// 										console.log('error', error);
// 									}
// 								);
// 							},
// 							function (error) {
// 								console.log('error', error);
// 							}
// 						);
// 					},
// 					function (error) {
// 						console.log('error', error);
// 					}
// 				);
// 			},
// 			function (error) {
// 				console.log('error', error);
// 			}
// 		);
// 	},
// 	function (error) {
// 		console.log('error', error);
// 	}
// );