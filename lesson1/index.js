let a = parseInt(prompt('Enter a:'))
let b = parseInt(prompt('Enter b:'))
let arr =[];
let result =[];
let c = a;
for(let i=0; i<=(b-a); i++){
    arr.push(c)
    c++
}

function checkPrime(arr) {
    if(arr <2){
        return false;
    }
    for(let j=2; j<arr; j++){
        if (arr % j == 0){
            return false;
        }
    }
    return true;
}

arr.forEach(function (element){
    const item = checkPrime(element)
    if(item){
        result.push(element);
    }
})

alert('Bai 1')
alert(`Number is range from ${a} to ${b};`);
alert(arr);
alert(`Prime number is range from ${a} to ${b};`);
alert(result);

