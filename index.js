
var peso = document.querySelectorAll(".red")
for (var i = 0; i < peso.length; i++) {
    peso[i].addEventListener("click", function() {
        peso[i].classList.toggle("peso")
    })
}

var fuerza = document.querySelectorAll(".green")
for (var i = 0; i < fuerza.length; i++) {
    fuerza[i].addEventListener("click", function() {
    alert("Clicked Fuerza")
    })
}

var movimiento = document.querySelectorAll(".yellow")
for (var i = 0; i < movimiento.length; i++) {
    movimiento[i].addEventListener("click", function(e) {
    console.log("Clicked Movimiento")
        e.target.innertHTML = `<marquee class="yellow" direction="right"  width="50%" scrolldelay="100" scrollamount="5" loop="infinite" >MOVIMIENTO</marquee>`
    })
}

var golpe = document.querySelectorAll(".orange")
for (var i = 0; i < golpe.length; i++) {
    golpe[i].addEventListener("click", function() {
        window.location.href = "golpe.html"
    })
}

var violencia = document.querySelectorAll(".black")
for (var i = 0; i < violencia.length; i++) {
    violencia[i].addEventListener("click", function() {
    alert("Clicked Violencia")
    })
}

