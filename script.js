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
    blok.value = eval(blok.value);
}


