const gridElem = document.querySelector (".grid")

for (let i = 1; i <= 100; i++) {

    let color;
    let text;

    if (i % 15 === 0) {
        console.log ("FizzBuzz")
        color = "fizzbuzz"
        text = "FizzBuzz"
    } else if (i % 5 === 0){
        console.log ("Buzz")
        color = "buzz"
        text = "Buzz"
    } else if (i % 3 === 0) {
        console.log("Fizz");
        color = "fizz"
        text = "Fizz"
    } else {
        text = i
    }

    gridElem.innerHTML += `<div class="box ${color}">${text}</div>`
}