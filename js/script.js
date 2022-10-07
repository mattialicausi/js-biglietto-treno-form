"use strict";

// x Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// x Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// x il prezzo del biglietto è definito in base ai km (0.21 € al km)
// x va applicato uno sconto del 20% per i minorenni
// x va applicato uno sconto del 40% per gli over 65.
// x L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


const btn = document.getElementById('risultato');

 const calcolaBiglietto = function(){
          let etaUtente = document.getElementById('eta-utente').value;
          console.log(etaUtente);

          let kmDesiderati = document.getElementById('km-desiderati').value;
          console.log(kmDesiderati);

          console.log(isNaN(kmDesiderati), isNaN(etaUtente));
          // if(isNaN(kmDesiderati) || isNaN(etaUtente)){
          //      alert('Puoi inserire solo numeri');
          //  }


          const prezzoKm = 0.21;
          let prezzoFinale = 0;

          let prezzoBiglietto = prezzoKm * kmDesiderati;
          prezzoBiglietto = prezzoBiglietto.toFixed(2);
          console.log(prezzoBiglietto);

          if(etaUtente < 18){
               prezzoFinale = (prezzoBiglietto * 20) / 100;
               prezzoFinale = prezzoFinale.toFixed(2);
               // alert('Sei minorenne, hai uno sconto del 20%!');
               console.log (prezzoFinale);


          }  else if(etaUtente > 65){
               prezzoFinale = (prezzoBiglietto * 40) / 100;
               prezzoFinale = prezzoFinale.toFixed(2);
               //     alert('Hai più di 65 anni, hai uno sconto del 40%!');
               console.log (prezzoFinale);


          } else{
               prezzoFinale = prezzoBiglietto;
               console.log(prezzoFinale);
               
          }

          const mostraEta = function(){
               document.getElementById('risultato-eta-utente').innerHTML = etaUtente;
          }

          const mostrakm = function(){
               document.getElementById('risultato-km-desiderati').innerHTML = kmDesiderati;
          }

          const mostraTotale = function(){
               document.getElementById('prezzo-finale').innerHTML = prezzoFinale;
          }
}

btn.addEventListener('click', calcolaBiglietto);

// const elemento1 = document.getElementById('risultato-eta-utente');
// console.log(elemento1);
// const risultatoEta = elemento1.querySelector('div');

// const elemento2 = document.getElementById('risultato-km-desiderati');
// console.log(elemento2);
// const risultatoKmDesiderati = elemento2.querySelector('div');

// const elemento3 = document.getElementById('prezzo-finale');
// console.log(elemento3);
// const prezzoFinale = elemento3.querySelector('div');







  

   

