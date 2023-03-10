const gridElem = document.querySelector (".grid")

for (let i = 1; i <= 100; i++) {

    let divisibile;
    let color;
    let text;

    if (i % 15 === 0) {
        console.log ("FizzBuzz")
        divisibile = "divisibileper15"
        color = "fizzbuzz"
        text = "FizzBuzz"
    } else if (i % 5 === 0){
        console.log ("Buzz")
        divisibile = "divisibileper5"
        color = "buzz"
        text = "Buzz"
    } else if (i % 3 === 0) {
        console.log("Fizz");
        divisibile = "divisibileper3"
        color = "fizz"
        text = "Fizz"
    } else {
        text = i
    }

    gridElem.innerHTML += `<div class="box ${color}">${text}</div>`
}