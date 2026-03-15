const blok = document.getElementById('wynik');

function znak(input){
    blok.value += input;
    zmienszjanie();
}

function usun(){
    blok.value = "";
}

function wyczysc() {
   if (blok.value.length > 0) {
    blok.value = blok.value.slice(0, -1);
   }
}

function policz(){
    let wynik = eval(blok.value);

     if (wynik === Infinity || wynik === -Infinity) {
        alert("nie mozna dzielic przez 0")
        blok.value = "";
    }

    else {
        blok.value = wynik;
    }

}

function zmienszjanie() {
    let dlugosc = blok.value.length;
    
    if( dlugosc >14){
        blok.style.fontSize = "40px";
    }

    if( dlugosc >18){
        blok.style.fontSize = "30px";
    }

    if( dlugosc >25){
        blok.style.fontSize = "20px";
    }
}
