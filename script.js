const blok = document.getElementById('wynik');

function znak(input){
    blok.value += input;
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

    if (wynik === Infinity) {
        blok.value = "0";
    }

    else if (wynik === -Infinity) {
        blok.value = "0";
    }

}

