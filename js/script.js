const gridElem = document.querySelector (".grid")
for (let i = 1; i <= 100; i++) {

    let divisibile;
    let color;

    if (i % 15 === 0) {
        console.log ("FizzBuzz")
        divisibile = "divisibileper15"
        color = "fizzbuzz"
    } else if (i % 5 === 0){
        console.log ("Buzz")
        divisibile = "divisibileper5"
        color = "buzz"
    } else if (i % 3 === 0) {
        console.log("Fizz");
        divisibile = "divisibileper3"
        color = "fizz"
    }

    gridElem.innerHTML += `<div class="box ${color}">${i}</div>`
}