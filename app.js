
let checkEl = document.getElementById("check");
let resultEl = document.getElementById("result")

checkEl.addEventListener("click", () => {
    let numberE = document.getElementById("numberEl").value;
    for (let i = 1; i < numberE;i++ ){
        if (i % 15 == 0){resultEl.innerHTML += (`${i} : FizzBuzz <br>`)}
        else if(i % 5 == 0){resultEl.innerHTML += (`${i} : Fizz <br>`)}
        else if(i % 3 == 0){resultEl.innerHTML += (`${i} : Buzz <br>`)}
    }
});