let input = document.getElementById("input")
let random = Math.ceil(Math.random() * 100)
let res = document.getElementById("result")
console.log(random)

function buttonn() {
    let user = parseInt(input.value)
    if (user > random) {
        res.textContent = "Too long!Try again"
        res.style.backgroundColor = "skyblue"
    } else if (user < random) {
        res.textContent = "Too short!Try again"
        res.style.backgroundColor = "skyblue"
    } else if (user === random) {
        res.textContent = "Congrats you got it right!"
        res.style.backgroundColor = "green"
    } else {
        res.textContent = "Give correct input(number)"
        res.style.backgroundColor = "red"
    }
}