let data = {
    gatoActivo: 0,
    gatos: [
        {
            name: "Ismael",
            content: "gato ismael gato ismael",
            image: "img/floppa.jpg",
            nclicks: 0
        },
        {
            name: "Oscar",
            content: "ole el oscar",
            image: "img/oscar.png",
            nclicks: 0
        },
        {
            name: "Fabian",
            content: "fabian mangui :)",
            image: "img/fabian.jpg",
            nclicks: 0
        },
        {
            name: "Gomi",
            content: "mapache",
            image: "img/gomielmapache.jpg",
            nclicks: 0
        }, {
            name: "Marti",
            content: "literalmente marti",
            image: "img/bingus.jpg",
            nclicks: 0
        }
    ]
};

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
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    data.gatoActivo = e.target.id;
    pintarCatActive();
});

function pintarCatActive() {
        let image = document.getElementById("imgGato");

        image.setAttribute("src", data.gatos[data.gatoActivo].image);
        document.getElementById("nombreGato").innerText = data.gatos[data.gatoActivo].name;

        pintarContador(data.gatoActivo);
}

function pintarContador(idG) {
    let contador = document.getElementById("contador").innerText = data.gatos[idG].nclicks.toString();
}

let image = document.getElementById("gato");
image.addEventListener("click", function (e) {
    data.gatos[data.gatoActivo].nclicks++;
    pintarContador(data.gatoActivo);
});