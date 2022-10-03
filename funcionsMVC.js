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

var model = {
    //si no estÃ¡ inicializado el localstorage lo arrancas
    init: function() {
        
    },
    funcion2: function(obj) {
    }


};


var controller = {
    funcionXXX: function(noteStr) {
        
        view.render();
    },

    funcionYYY: function() {
        
    },

    init: function() {
        model.init();
        view.init();
    }
};


var view = {
    init: function() {
        //Seleccionar los ids y llevarmelos a varaibles (opcional)
        

        //Inicializar los eventos que hacer cuando pase...

        //Llamar a la funcion que pinta la lista (render)
        //Llamar a la funcion que pinta el gato actual (render)
        
        view.render();
    },
    renderGato: function(){
        //Generar dinamicamente el codigo html             
        var htmlStr = '';
        //Recordad que para acceder a datos hablamos con el controller
        controller.getNotes().forEach(function(note){
            htmlStr += '<li class="note">'+
                    note.content +
                '</li>';
        });
        this.noteList.html( htmlStr );
    }
};

controller.init();