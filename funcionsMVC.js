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
        }, {
            name: "Jaime",
            content: "literalmente jaime",
            image: "img/jaime.jpg",
            nclicks: 0
        }
    ]
};

var model = { // si no estÃ¡ inicializado el localstorage lo arrancas
    init: function () {
        console.log("datos preparados");
    },
    getGatos: function () {
        return data.gatos;
    },

    setCatActive: function (n) {
        data.gatoActivo = n;
    },
    getGatoActivo: function () {
        return data.gatos[data.gatoActivo];
    },
    addClick: function () {
        data.gatos[data.gatoActivo].nclicks ++;
    }
};


var controller = {
    getGatos: function () {
        return model.getGatos();
    },
    getGatoActivo: function () {
        return model.getGatoActivo();
    },
    clickLista: function (ngato) {

        model.setCatActive(ngato);
        view.renderGatoActual();
    },

    clickGato: function () {
        model.addClick();
        view.renderContador();
    },


    init: function () {
        model.init();
        view.init();
    }
};


var view = {
    // Demanar dades al controller

    init: function () { // 1. Pintar llista
        gatos = controller.getGatos();
        htmlStr = "";
        for (let i = 0; i < gatos.length; i++) {
            htmlStr += `<li id="${i}">`;

            htmlStr += gatos[i].name;

            htmlStr += `</li>`;
        }
        document.getElementById("llista").innerHTML = htmlStr;

        //2 .poner listenr de lista 
        document.getElementById("llista").addEventListener("click", function (e) {
            console.log(e.target);
            n = e.target.id;
            controller.clickLista(n);
            
        });

        //3. pongo el listener del gato
        document.getElementById("imgGato").addEventListener("click", function () {
            controller.clickGato();
        });

    },

    renderContador: function () {
        let gatoActual = controller.getGatoActivo();
        document.getElementById("contador").innerText = gatoActual.nclicks.toString();
    },

    renderGatoActual: function () {

        let gatoActual = controller.getGatoActivo();
        let image = document.getElementById("imgGato");

        image.setAttribute("src", gatoActual.image);
        document.getElementById("nombreGato").innerText = gatoActual.name;

        view.renderContador();
    }

};

controller.init();

/*
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
        }, {
            name: "Jaime",
            content: "literalmente jaime",
            image: "img/jaime.jpg",
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
    console.log(e.target);
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

let image = document.getElementById("imgGato");
image.addEventListener("click", function (e) {
    data.gatos[data.gatoActivo].nclicks++;
    pintarContador(data.gatoActivo);
});
*/
