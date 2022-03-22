let count = 0;
function increment() {
    count++;
    document.getElementById("count-el").innerText = count;
}

function decrement() {
    count--;
    document.getElementById("count-el").innerText = count;
}