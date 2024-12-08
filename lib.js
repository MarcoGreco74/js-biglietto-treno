/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

let quantiChilometri = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
let eta = parseInt(prompt("Quanti anni hai?"));
//console.log(typeof(eta));  // number
//console.log(typeof(quantiChilometri));  // number
let prezzoAlKm = 0.21;
let prezzo;
let res = '';

const prezzoViaggio = ()=>{
    if(eta >= 18 && eta <= 65){
        prezzo = (prezzoAlKm * quantiChilometri);  
        //console.log(typeof(prezzo));   // number 
    }else if(eta < 18){
        prezzo =  (prezzoAlKm * quantiChilometri) - ((20 * (prezzoAlKm * quantiChilometri)) / 100);
    }else if(eta > 65){
        prezzo =  (prezzoAlKm * quantiChilometri) - ((40 * (prezzoAlKm * quantiChilometri)) / 100);
    }else{
        alert('Valori inseriti non corretti');
    }  
    res = '€ '+prezzo.toFixed(2).replace(".", ",");
    document.getElementById("tot").innerHTML = '<strong>Totale </strong>'+res;
    document.getElementById("prezzoAlKm").innerHTML = 'Prezzo al km €'+prezzoAlKm;
    document.getElementById("quantiKm").innerHTML = 'Km che vuoi percorrere '+quantiChilometri;
    document.getElementById("eta").innerHTML = 'Età '+eta;
    document.getElementById("sconto").innerHTML = 'Sconto applicato '+((eta < 18) ? 20 : ((eta > 65) ? 40 : 'nessuno sconto'))+'%';
};


