const link = document.querySelector("a");
const display = document.querySelector(".display");

document
    .querySelectorAll(".digits button")
    .forEach((button) => button.addEventListener("click", digitPressed));

function digitPressed(ev) {
    display.value += ev.target.innerText;
}

document
    .querySelectorAll(".opers button")
    .forEach((button) => button.addEventListener("click", opersPressed));

const isOper = val => '+-*/'.includes(val);

function opersPressed(ev) {
    const lastChar = display.value.slice(-1);
    if (isOper(lastChar)) {
        display.value = display.value.slice(0, -1);
    }
    display.value += ev.target.innerText;
}

document
    .querySelector(".eq").addEventListener("click", culculated);

function culculated() {
    display.value = eval(display.value);
}

document.querySelector('.all-clear').addEventListener('click', () => display.value = '' );

 