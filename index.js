
var peso = document.querySelectorAll(".red")

peso.forEach((item) =>{
    var index = item.id
    var nuevoPeso = document.createElement("marquee");
    nuevoPeso.setAttribute("direction", "down");
    nuevoPeso.setAttribute("color", "red");
    nuevoPeso.setAttribute("behavior", "Slide")
    nuevoPeso.style.position = "absolute";
    nuevoPeso.style.marginLeft = "-70px";
    nuevoPeso.innerHTML = "PESO";
    if(index == 1){
        nuevoPeso.setAttribute("height", "930px"); 
    }
    if(index == 2){
        nuevoPeso.setAttribute("height", "800px" );
    }
    if(index == 3){
        nuevoPeso.setAttribute("height", "730px" );
    }
    if(index == 4){
        nuevoPeso.setAttribute("height", "730px" );
    }
    item.addEventListener("click", function(){
        item.classList.toggle("hidden");
        item.style.position = "relative";
        item.parentElement.appendChild(nuevoPeso);
        item.appendChild(nuevoPeso);
        item.style.color = "#f6e492"
        nuevoPeso.style.color = "red"
    })
})

var fuerza = document.querySelectorAll(".green")
for (var i = 0; i < fuerza.length; i++) {
    fuerza[i].addEventListener("click", function() {
    alert("Clicked Fuerza")
    })
}

var movimiento = document.querySelectorAll(".yellow")
movimiento.forEach((item) =>{
    var index = item.id
    var nuevoPeso = document.createElement("marquee");
    nuevoPeso.setAttribute("direction", "right");
    nuevoPeso.setAttribute("color", "red");
    nuevoPeso.setAttribute("behavior", "Scroll");
    if(index == 1){
        nuevoPeso.setAttribute("width", "960px");
        nuevoPeso.style.marginLeft = "-170px";
    }
    if(index == 2){
        nuevoPeso.setAttribute("width", "960px");
        nuevoPeso.style.marginLeft = "-950px";
    }
    nuevoPeso.style.position = "absolute";
    nuevoPeso.innerHTML = "MOVIMENTO";
    item.addEventListener("click", function(e) {
        console.log("Clicked Movimiento")
        item.classList.toggle("hidden");
        item.style.position = "relative";
        item.parentElement.appendChild(nuevoPeso);
        item.appendChild(nuevoPeso);
        item.style.color = "#f6e492"
        nuevoPeso.style.color = "rgb(195, 195, 0)"
        })
})


var golpe = document.querySelectorAll(".orange")
for (var i = 0; i < golpe.length; i++) {
    golpe[i].addEventListener("click", function() {
        window.location.href = "https://golpe.vercel.app/"
    })
}

var violencia = document.querySelectorAll(".black")
for (var i = 0; i < violencia.length; i++) {
    violencia[i].addEventListener("click", function() {
    alert("Clicked Violencia")
    })
}

