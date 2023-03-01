const req = new XMLHttpRequest();
let data;

// kalau berhasil dilakukan disini
req.onload = function(){
    data = JSON.parse(this.responseText);
    console.log(data);
};

// kalau gagal disini
req.onerror = function(){
    console.log("Error", this);
};

req.open('GET', 'http://swapi.dev/api/people/1', true);
myReq.setRequestHeader('Accept', 'application/json');
req.send();

