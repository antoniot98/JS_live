/*
Operazioni tra array:

Scrivi un programma che dati:

-2 array di 10 elementi interi casuali compresi tra 1 e 10,
-il tipo di operazione aritmetica da effettuare, una delle seguenti:
addizione
sottrazione
moltiplicazione
divisione

Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

Esempio:
Input: a=[3,7,2,5,8,1,2,5,6,4]  b=[9,3,1,4,7,6,5,10,1,5], operazione = "addizione"
Output: c=[12,10,3,9,15,7,7,15,7,9]

Consigli:
Se non ricrordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
 */

// var a = [3,7,2,5,8,1,2,5,6,4];
// var b = [9,3,1,4,7,6,5,10,1,5];


const assert = require("assert");


function operazioniTraArray(array1, array2, operazione) {

    //Funzione per il controllo degli elementi dell'array
    function isANumber(array) {

        for (var element of array) {
            if (typeof element !== "number") {
                throw new Error("L'array non contiene tutti numeri");

            }
        }


    }

    //Controllo se la lunghezza degli array e la stessa
    if (array1.length !== array2.length) {
        throw Error("La lunghezza degli array non è la stessa");
    }

    //Controllo se gli array contengono solo nuemeri
    isANumber(array1);
    isANumber(array2);


    switch (operazione) {

        case "addizione":
            var array3 = array1.map((value , index) => value + array2[index]);

            return array3;

        case "sottrazione":
            var array3 = array1.map((value , index) => value - array2[index]);
            return array3;


        case "moltiplicazione":
            var array3 = array1.map((value , index) => value * array2[index]);
            return array3;


        case "divisione":
            var array3 = array1.map((value , index) => value / array2[index]);
            return array3.map(element1 => Math.round(element1));


        default :
            throw Error("L'operazione inserita non è valida");
    }


}


// var resultOperation = operazioniTraArray(a,b,"addizione");
// console.log(resultOperation);

describe("Test Operazioni",function (){
    it("test addizione", function (){
        let result = operazioniTraArray([3,7,2,5,8,1,2,5,6,4], [9,3,1,4,7,6,5,10,1,5], "addizione");
        assert.deepEqual([12,10,3,9,15,7,7,15,7,9],result);
    })
    it("test sottrazione", function (){
        let result = operazioniTraArray([3,7,2,5,8,1,2,5,6,4], [9,3,1,4,7,6,5,10,1,5], "sottrazione");
        assert.deepEqual([-6,4,1,1,1,-5,-3,-5,5,-1],result);
    })
    it("test moltiplicazione", function (){
        let result = operazioniTraArray([3,7,2,5,8,1,2,5,6,4], [9,3,1,4,7,6,5,10,1,5], "moltiplicazione");
        assert.deepEqual([27,21,2,20,56,6,10,50,6,20],result);
    })
    it("test divisione", function (){
        let result = operazioniTraArray([3,7,2,5,8,1,2,5,6,4], [9,3,1,4,7,6,5,10,1,5], "divisione");
        assert.deepEqual([0,2,2,1,1,0,0,1,6,1],result);
    })

    it("Test Lunghezze array diversi",function (){
        assert.throws( ()=> operazioniTraArray([3,7,2,5,8,1,2,5,6,4], [9,3,1,4,7,6,5,10,1,5,7], "divisione"),Error, "La lunghezza degli array non è la stessa");
    })

    it("L'array non contiene tutti numeri",function(){
        assert.throws( ()=> operazioniTraArray([3,7,2,5,8,1,2,5,6,"ciao"], [9,3,1,4,7,6,5,10,1,5], "divisione"),Error,"L'array non contiene tutti numeri" );

    })
})