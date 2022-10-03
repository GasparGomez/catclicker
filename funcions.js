function addCats() {
    htmlStr = "";
    for (let i = 0; i < data.gatos.length; i++) {
        htmlStr += `<li id="${i}">`;

        htmlStr += data.gatos[i].name;

        htmlStr += `</li>`;
    }
    document.getElementById("llista").innerHTML = htmlStr;
}
addCats();

pintarCatActive();

let gato = document.getElementById("llista");

gato.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    data.gatoActivo = e.target.id;
    pintarCatActive();
});

function pintarCatActive() {
        let image = document.getElementById("imgGato");

        image.setAttribute("src", data.gatos[data.gatoActivo].image);
        pintarContador(data.gatoActivo);
        let contador = document.getElementById("contador").innerText = data.gatos[data.gatoActivo].nclicks.toString();
}

function pintarContador(idG) {
    let contador = document.getElementById("contador").innerText = data.gatos[idG].nclicks.toString();
}

let image = document.getElementById("gato");
image.addEventListener("click", function (e) {
    data.gatos[data.gatoActivo].nclicks++;
    pintarContador(data.gatoActivo);
});