var arr = [];

while(arr.length < 100){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}

console.log(arr);