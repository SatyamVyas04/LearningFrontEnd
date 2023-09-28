let count = 0;
countText = document.getElementById("count");
enteries = document.getElementById("entries")
button = document.getElementById("incr");
rbutton = document.getElementById("reset");
sbutton = document.getElementById("save");

function increment() {
    count = count + 1;
    countText.innerText = count;
}

function re() {
    count = 0;
    countText.innerText = 0;
}

function save() {
    if (count === 0){
        return;
    }
    else if (entries.innerText === 'None') {
        entries.innerText = count + " ";
    }
    else {
        enteries.innerText += " - "  + count
    }
    re()
}

button.addEventListener("click", increment);
rbutton.addEventListener("click", re);
sbutton.addEventListener("click", save)
