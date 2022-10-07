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

var model = {
    // si no estÃ¡ inicializado el localstorage lo arrancas
    init: function () {
        if (localStorage.getItem('datos_gatos') == null) {
            localStorage.setItem('datos_gatos', JSON.stringify(data.gatos));
        } else {
            data.gatos = JSON.parse(localStorage.getItem('datos_gatos'));
        }
        
        console.log("datos preparados");
    },

    getGatos: function () {
        return JSON.parse(localStorage.getItem('datos_gatos'));
    },

    setCatActive: function (n) {
        data.gatoActivo = n;
        localStorage.setItem('gato_activo', n);
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


var view = { // Demanar dades al controller

    init: function () { // 1. Pintar llista
        gatos = controller.getGatos();
        htmlStr = "";
        for (let i = 0; i < gatos.length; i++) {
            htmlStr += `<li id="${i}">`;

            htmlStr += gatos[i].name;

            htmlStr += `</li>`;
        }
        document.getElementById("llista").innerHTML = htmlStr;

        // 2 .poner listenr de lista
        document.getElementById("llista").addEventListener("click", function (e) {
            n = e.target.id;
            controller.clickLista(n);

        });

        // 3. pongo el listener del gato
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
