let container = document.querySelector("#container");
for (let i = 0; i < 32; i++) {
    for (let y = 0; y < 32; y++) {
        container.appendChild(document.createElement('div'));
    }
    container.appendChild(document.createElement('br'));
}

let elements = container.children;
for (let i = 0; i < elements.length; i++) {
    if (elements[i].tagName == "DIV") {
        elements[i].classList.add("divs");
        elements[i].style.width = 900 / 64 + "px";
        elements[i].style.height = 900 / 64 + "px";
    }
}

//let divs = querySelectorAll(".divs");