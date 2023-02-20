var num = 0;

document.getElementById("heading").innerHTML = num;

function increment1() {
    num = num + 1;
    if (num < 0) {
        num = 0;
    } else {
        num;
    }

    document.getElementById("heading").innerHTML = num;
}

function reset0() {
    num = 0;
    document.getElementById("heading").innerHTML = num;
}

function decrement1() {
    num = num - 1;
    if (num < 0) {
        num = 0;
    } else {
        num;
    }
    document.getElementById("heading").innerHTML = num;
}