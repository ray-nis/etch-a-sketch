let container = document.querySelector("#container");
for (let i = 0; i < 32; i++) {
    for (let y = 0; y < 32; y++) {
        container.appendChild(document.createElement('div'));
    }
    container.appendChild(document.createElement('br'));
}

let color = "#ea6556";

let elements = container.children;
for (let i = 0; i < elements.length; i++) {
    if (elements[i].tagName == "DIV") {
        elements[i].classList.add("divs");
        elements[i].style.width = 900 / 64 + "px";
        elements[i].style.height = 900 / 64 + "px";
        elements[i].addEventListener("mouseover", (e) => {
            e.target.style.background = color;});
        elements[i].addEventListener("click", (e) => {
            e.target.style.background = "#fff";});
    }
}


document.querySelector("#white").addEventListener("click", () => {
    color = "#fff";
});



let colorOptions = document.querySelectorAll(".colorOption");

colorOptions.forEach((item) => {
    item.addEventListener('click', (e) => {
        let id = e.target.id;
        switch(id) {
            case "blue":
                color = "#8091d6";
                break;
            case "red":
                color = "#ea6556";
                break;
            case "white":
                color = "#fff";
                break;
            case "black":
                color = "#000000";
                break;
            case "green":
                color = "#85f27d";
                break;
            case "yellow":
                color = "#f4d873";
                break;
        }
    });
});