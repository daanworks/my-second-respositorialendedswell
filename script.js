let printNumbersTill = (n) => {
    for (i=1; i <= n; i++) {
        console.log(i);
    }
}

console.log(printNumbersTill(22));


let getGreetingTo = (nev) => {
    nev = "Hello " + nev;
    return nev;
}

console.log(getGreetingTo("FUCK YOU"));

let printValues = (array) => {
    for (i=0; i < array.length; i++)
    console.log(array[i]);
}

console.log(printValues([1, 2, 18, 61, 42, 53]));

$('h1').text('MY NYU TAJTL');
$('button').text('MY NYU TAJTL');