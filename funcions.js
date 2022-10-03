let data = {
    gatos: [
        { name: "Ismael", content: "lorem", image: "floppa.jpg", nclicks: 0 },
        { name: "Oscar", content: "lorem2", image: "oscar.png", nclicks: 0 },
        { name: "Fabian", content: "lorem2", image: "oscar.png", nclicks: 0 },
        { name: "Gomi", content: "lorem2", image: "oscar.png", nclicks: 0 },
        { name: "Marti", content: "lorem2", image: "bingus.jpg", nclicks: 0 }
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