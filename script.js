// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock

// 1) Skapa funktion för att räkna ut dricks från percent till kronor.
//Användare måsta ange dricks i decimalform t.ex. 0.10, 0.20
// 2) Skapa funktion för att dela nota per person. 
//Detta fungerar genom att funktionen hemta summan av dricks i kronor från funktionen ovan.
// 3) Hämta värden, för att byta värden av variabel från "text" till "siffror" behöver lägga till "Number" i syntax också
// Skapa funktionför knappen för att visa resultat (summa / person). 

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





// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om


//play();
// 1) Skapa Arrays set för att betämma mål ordet. 
// 2) Ge användare bokstäver alternativa tillsamman med regler hur användare ska spela.
// 3) Användare skriver sitt gissning på den nya ord i ruta.
// 4) Ska en funktion för att rätta svaret. 



const ordbok = ["FOUR", "FOUL", "FOOL", "FOOT", "FORT", "FORE", "FIRE", "FIVE"]; // Innehåller ALLA ord i det engelska språket.
document.getElementById("wordStart").innerHTML = ordbok[0];
console.log(ordbok[0]); 

 // 1:a Spel med ord FOUL
function alternativ() {
    let wordStart = document.getElementById("wordStart").value;
    let lettersSetOne = ["A" , "L" , "B" , "M", "E"]; //Skapa Arrays för alternativ 1
    let lettersSetTwo = ["K" , "I" , "O" , "S", "E"];
    let lettersSetThree = ["G" , "E" , "T" , "U", "Y"];
    let lettersSetFour = ["A" , "L" , "B" , "M", "R"];
    let lettersSetFive = ["E" , "R" , "T" , "O", "E"];
    let lettersSetSix = ["J" , "P" , "H" , "I", "A"];
    let lettersSetSeven = ["V" , "G" , "E" , "K", "O"];
    let letters = "";
    for (let letter of lettersSetOne) {
        letters += letter + '<br>';
    

    if (wordStart === FOUR) {
        document.getElementById("alternativ").innerHTML = lettersSetOne;
        console.log (lettersSetOne);
    }
    else if (wordStart === FOUL) {
        document.getElementById("alternativ").innerHTML = lettersSetOne;
        console.log (lettersSetTwo);
    }
    else if (wordStart === FOOL) {
        document.getElementById("alternativ").innerHTML = lettersSetOne;
        console.log (lettersSetThree);
    }
    else if (wordStart === FOOT) {
        document.getElementById("alternativ").innerHTML = lettersSetOne;
        console.log (lettersSetFour);
    }
    else if (wordStart === FORT) {
        document.getElementById("alternativ").innerHTML = lettersSetOne;
        console.log (lettersSetFive);
    }
    else if (wordStart === FORE) {
        document.getElementById("alternativ").innerHTML = lettersSetOne;
        console.log (lettersSetSix);
    }
    else if (wordStart === FIRE) {
        document.getElementById("alternativ").innerHTML = lettersSetOne;
        console.log (lettersSetSeven);
    }
    else {
        exit
    }
}

}

    

function wordResult() {
        
        //Rätta svaret
        let userInput = document.getElementById("newWord").value;
        let msg; 
        
        //ord 1
        if (userInput === "FOUL" || userInput === "Foul" || userInput === "foul") {
            msg = "Grattis, Du klarade det!";
            let wordStart = "FOUL";
            document.getElementById("wordStart").innerHTML = wordStart;
            console.log(wordStart);
            let wordHistory = ["FOUL"];
            document.getElementById("urResult").innerHTML = "DINA HISTORIK: " + wordHistory;
            
        }
        
        //ord 2
        else if (userInput === "FOOL" || userInput === "Fool" || userInput === "fool") {
            msg = "Grattis, Du klarade det!";
            let wordStart = "FOOL";
            document.getElementById("wordStart").innerHTML = wordStart;
            console.log(wordStart);
            let wordHistory = ["FOUR", "FOUL", "FOOL"];
            document.getElementById("urResult").innerHTML = "DINA HISTORIK: " + wordHistory;
            
        }
        //ord 3
        else if (userInput === "FOOT" || userInput === "Foot" || userInput === "foot") {
            msg = "Grattis, Du klarade det!";
            let wordStart = "FOOT";
            document.getElementById("wordStart").innerHTML = wordStart;
            console.log(wordStart);
            let wordHistory = ["FOUR", "FOUL", "FOOL", "FOOT"];
            document.getElementById("urResult").innerHTML = "DINA HISTORIK: " + wordHistory;
        }
        //ord 4
        else if (userInput === "FORT" || userInput === "Fort" || userInput === "fort") {
            msg = "Grattis, Du klarade det!";
            let wordStart = "FORT";
            document.getElementById("wordStart").innerHTML = wordStart;
            console.log(wordStart);
            let wordHistory = ["FOUR", "FOUL", "FOOL", "FOOT", "FORT"];
            document.getElementById("urResult").innerHTML = "DINA HISTORIK: " + wordHistory;
        }
        //ord 5
        else if (userInput === "FORE" || userInput === "Fore" || userInput === "fore") {
            msg = "Grattis, Du klarade det!";
            let wordStart = "FORE";
            document.getElementById("wordStart").innerHTML = wordStart;
            console.log(wordStart);
            let wordHistory = ["FOUR", "FOUL", "FOOL", "FOOT", "FORT", "FORE"];
            document.getElementById("urResult").innerHTML = "DINA HISTORIK: " + wordHistory;
        }
        //ord6
        else if (userInput === "FIRE" || userInput === "Fire" || userInput === "fire") {
            msg = "Grattis, Du klarade det!";
            let wordStart = "FOUL";
            document.getElementById("wordStart").innerHTML = wordStart;
            console.log(wordStart);
            let wordHistory = ["FOUR", "FOUL", "FOOL", "FOOT", "FORT", "FORE", "FIRE"];
            document.getElementById("urResult").innerHTML = "DINA HISTORIK: " + wordHistory;

        }
        //mål
        else if (userInput === "FIVE" || userInput === "Five" || userInput === "five") {
            msg = "Grattis, Du har kommit till målet!";
            let wordStart = "FIVE";
            document.getElementById("wordStart").innerHTML = wordStart;
            console.log(wordStart);
            let wordHistory = ["FOUR", "FOUL", "FOOL", "FOOT", "FORT", "FORE", "FIRE", "FIVE"];
            document.getElementById("urResult").innerHTML = "DIN RES: " + wordHistory;

        }
        else {
            msg = "Tyärr, försök igen!";

        }
        document.getElementById("meddelande").innerHTML = msg;
        console.log(msg);
        
    }

    function nextGame() {
    let startWord = prompt('Skriv in start ordet');
    let userInput = prompt('din gissning');
    let matchCount = 0;

    if (startWord !== userInput) {
    console.log('Båda orden måste innehålla lika bokstäver');
    }

    for (let i = 0; i < startWord.length; i++) {
    if (startWord[i] === userInput[i]) {
        matchCount++;
    }
    }
    alert(`Det fanns ${matchCount} likheter mellan orden`);
    
    }
    /*function newGame() {
        document.getElementById("resetSpel").reset();
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

// Js för PlayGround

