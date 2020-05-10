const link = document.querySelector('a');
const display = document.querySelector(".display");

document.querySelectorAll(".digits button")
    .forEach(button => button.addEventListener("click", digitPressed));

function digitPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelectorAll(".opers button")
    .forEach(button => button.addEventListener("click", opersPressed));

function opersPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelector(".eq").addEventListener("click", culculated);

function culculated() {
    display.value = eval(display.value);
}

document.querySelector(".delete").addEventListener("click", deleted);

function cdeleted() {
    display.value = (display.value);
}