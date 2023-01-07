
const assert = require("assert");

var result;
var value=10;
var unit="Kg";
var targetUnit="g";


function converter (value, unit, targetUnit){

    if(typeof value !== "number"){
        throw Error ("Non è un valore numerico");
    }

    // const validValue = ["Kg","g"];
    //
    // if (!validValue.includes(unit) || !validValue.includes(targetUnit)){
    //
    //     throw new Error ("Il convertitore accetta g o Kg");
    // }


    if(unit==="Kg" && targetUnit==="g"){
        result= value*1000;
    }
    else if(unit==="g" && targetUnit==="Kg"){
        result= value/1000;
    }
    else{
        throw Error ("Inserire i valori in Kg (Kilogrammi) e g (grammi)");
    }
    return result;

}

result=converter(value,unit,targetUnit);
console.log("La conversione e uguale a: "+result+targetUnit);


describe("testConversione", function(){

    it("test 10g in 0.01Kg", function (){

        const result=converter(10,"g","Kg");
        assert.equal(result,0.01);
    })

    it("test 100g in 0.1Kg", function (){

        const result=converter(100,"g","Kg");
        assert.equal(result,0.1);
    })

    it("test 10Kg in 10000g", function (){

        const result=converter(10,"Kg","g");
        assert.equal(result,10000);
    })

    it("test Non è un valore numerico", function (){

        assert.throws(() => converter("ciao","Kg","g") ,Error,"Non è un valore numerico");
    })

    it("Valori sbagliati", function(){
        assert.throws(() => converter(100,"Kg", "G"), Error);
    })
})
