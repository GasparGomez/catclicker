let data = {
    gatos: [
        { name: "Ismael", content: "lorem", image: "img/floppa.jpg", nclicks: 0 },
        { name: "Oscar", content: "lorem2", image: "img/oscar.png", nclicks: 0 },
        { name: "Fabian", content: "lorem2", image: "img/fabian.png", nclicks: 0 },
        { name: "Gomi", content: "lorem2", image: "img/gomielmapache.png", nclicks: 0 },
        { name: "Marti", content: "lorem2", image: "img/bingus.jpg", nclicks: 0 }
    ]
};

function addClick(id){
    for (let i = 0; i < data.gatos.length; i++) {
        if (data.gatos[i].name==id) {
            data.gatos[i].nclicks++;
            document.getElementById("contador"+(i + 1).toString()).innerHTML = data.gatos[i].name + ": " + data.gatos[i].nclicks.toString();
        }
    }
}