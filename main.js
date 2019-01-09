let container = document.querySelector("#container");
let color = "#ea6556";
let colorOptions = document.querySelectorAll(".colorOption");
let elements = container.children;



function render(width, height) {
    for (let i = 0; i < height; i++) {
        for (let y = 0; y < width; y++) {
            container.appendChild(document.createElement('div'));
        }
    container.appendChild(document.createElement('br'));
    }
}

function style() {
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
}

function colorPicker() {
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
}

function deleteRender() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function size() {
    document.querySelector("#customSize").addEventListener("click", () => {
        let wide = prompt("How many boxes wide");
        let tall = prompt("How many boxes tall");
        deleteRender();
        render(wide, tall);
        style();
    }) 
}


function main() {
    render(32, 32);
    style();

    colorPicker();
    size();
}


main();