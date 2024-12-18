// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock

/*

// 1) Skapa funktion för att räkna ut dricks från percent till kronor.
//Användare måsta ange dricks i decimalform t.ex. 0.10, 0.20
// 2) Skapa funktion för att dela nota per person. 
//Detta fungerar genom att funktionen hemta summan av dricks i kronor från funktionen ovan.
// 3) Hämta värden, för att byta värden av variabel från "text" till "siffror" behöver lägga till "Number" i syntax också
// Skapa funktionför knappen för att visa resultat.

function precentDricks(totalSumma, dricks) {
    return ((dricks * 100) * totalSumma) / 100;    // (0.10 * 100) * 1000) / 100 = 100 SEK
}

function delaNota(totalSumma, antalPerson, dricks) {
    var totalDricks = precentDricks(totalSumma, dricks);
    return (totalSumma + totalDricks) / antalPerson;
}

function showResult() {
    var totalSumma = Number(document.getElementById('summa').value);
    var antalPerson = Number(document.getElementById('friends').value);
    var dricks = Number(document.getElementById('dricks').value);

    // Kontrollera användare om användare missar något input fält.
    if (!totalSumma || !antalPerson || !dricks || antalPerson <= 0) {
        alert("Fyll i alla fält med giltiga värden!");
        return;
    }

    // Visa resultat beräkningen i HTML
    const resultat = delaNota(totalSumma, antalPerson, dricks);
    document.getElementById("resultat").innerHTML = resultat.toFixed(2) + ' SEK';
    console.log(resultat.toFixed(2) + ' SEK');
}

*/



// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om


//play();

const ordbok = ["FOUR", "FOUL", "FOOL", "FOOT", "FORT", "FORE", "FIRE", "FIVE"]; // Innehåller ALLA ord i det engelska språket.
document.getElementById("wordStart").innerHTML = ordbok[0];
console.log(ordbok[0]); 

/*function play() {

    let wordStart = "FOUR";
    document.getElementById("wordStart").innerHTML = wordStart;
    console.log(wordStart);

}*/
function alternativOne() {
    let lettersSetOne = ["A" , "L" , "B" , "M", "E"]; //Skapa Arrays för alternativ 1
    let letters = "";
    for (let letter of lettersSetOne) {
        letters += letter + '<br>';
    }
    document.getElementById("alternativOne").innerHTML = letters;
    console.log(letters)
}

function wordResult() {
        let userInput = document.getElementById("newWord").value;
        let msg;
        
        //Rätta svaret
        if (userInput === "FOUL" || userInput === "Foul" || userInput === "foul") {
            msg = "Grattis, Du klarade det!";
            let wordStart = "FOUL";
            //document.getElementById("wordStart").innerHTML = wordStart;
            //console.log(wordStart);
        }
        else {
            msg = "Tyärr, försök igen!";
        }
    
        document.getElementById("meddelande").innerHTML = msg;
        console.log(msg);
    }
    
    
    function newGame() {
        document.getElementById('wordStart').innerHTML = userInput;
    }


 /*

play();

function play()
    SET variabel ordbok = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]; // Innehåller ALLA ord i det engelska språket
    SET variabel startOrd till "FOUR";
    SET variabel slutordOrd till "FIVE";


end function

function isOneLetterApart(wordOne, wordTwo)
    SET variabel diffCount till 0;

    // Här behöver du skriva koden för din funktion

    return diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
end function

*/



