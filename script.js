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
// 1) Skapa Arrays set för att betämma ordet för den här spel. Regler är att spelet börjar med ordet "FOUR", sedan ändrar ett steg i taget till ordet "FIVE"
// 2) Spelet ska inte vara så svårt för spelaren, då skapar jag en alternativ för verje ord.
    // lettersSetOne gäller för ord 2 som spelaren ska välja en av bokstäve och sedan skriva ett nytt ord dem gissar på. 
// 3) Skapa en villkor för att kontrollera att spelaren inte ska skriva ordet längre än 4 bokstäver. Spelaren får en varning annars.
// 4) Skapa en villkor för att kontrollera att spelaren inte ska ändra bostäver mer än en bokstav. Spelaren får en varning annars.
// 5) Skapa en input form i HTML för att spelaren kunna skriva sitt eget gissning ord. Använder ".toUpperCase()" för att förhindra error av olika typ av bokstäver.
   // exempel: om spelaren skrev "Foul" eller "foul" då funktionen ändrat/översätta de till stora bostäver. 
   // Sedan JavaScript plockar den värdet och kollera med olika villkoren som jag skrivit i "if, else"
   // Spelaren får meddelande om de gissade rätt och även gissade fel, samt får försöka igen.
// 6) Start ordet ska ändra automatisk efter verje rätt svar, därför att spelaren ska kunna fortsätta till nästa ord, till de kommer till mål med ordet "FIVE"



const ordbok = ["FOUR", "FOUL", "FOOL", "FOOT", "FORT", "FORE", "FIRE", "FIVE"]; // Innehåller ALLA ord i det engelska språket.

//Start ordet börja här
document.getElementById("wordStart").innerHTML = ordbok[0];
console.log(ordbok[0]); 
document.getElementById("alternativ").innerHTML = "A, L, B, M, E";

let userInputHistory = "FOUR"; //den här variabel använder för att spara historik ord för att for-loop ska jämföra och kontrollera på antal ändring av bokstav. 
                               // regler är att spelaren får ändra bara en bokstav åt gången.

function wordResult() {
        
    
        const choices = {
            lettersSetTwo: ["K" , "I" , "O" , "S", "E"],
            lettersSetThree: ["G" , "E" , "T" , "U", "Y"],
            lettersSetFour: ["A" , "L" , "B" , "M", "R"],
            lettersSetFive: ["E" , "R" , "T" , "O", "E"],
            lettersSetSix: ["J" , "P" , "H" , "I", "A"],
            lettersSetSeven: ["V" , "G" , "E" , "K", "O"],
        };
        let userInput = document.getElementById("newWord").value; //hämta värde från input i html
        let msg; //meddelande till spelaren
        
        //kollar antal längden av ordet och jämförar med start ord
        if (userInput.length < 4 || userInput.length > 4) {
            alert("Ordet är längre eller kortare än start ord, Prova igen!");
        
        //Kollar antal gånger som användare har ändrat bokstäver
        } else {
            let countChange = 0;

            for (let i = 3; i >= 0; i--) {
                if (userInput.toUpperCase()[i] !== userInputHistory.toUpperCase()[i]) {
                    countChange += 1;
                }
            }
            if (countChange > 1) {
                alert("Ajaja! Du har ändrat mer än 1 boktav.");
            } 
            else {
        
                //word 2
                if (userInput.toUpperCase() === "FOUL") {
                    msg = "Grattis, Du klarade det!";
                    let wordStart = "FOUL";
                    document.getElementById("wordStart").innerHTML = wordStart;
                    console.log(wordStart);
                    document.getElementById("alternativ").innerHTML = choices.lettersSetTwo;
                    let wordHistory = ["FOUL"];
                    userInputHistory = "FOUL";
                    document.getElementById("urResult").innerHTML = "Så här lång har du kommit: " + wordHistory;
                    
                }
                
                //word 3
                else if (userInput.toUpperCase() === "FOOL") {
                    msg = "Grattis, Du klarade det!";
                    let wordStart = "FOOL";
                    document.getElementById("wordStart").innerHTML = wordStart;
                    console.log(wordStart);
                    document.getElementById("alternativ").innerHTML = choices.lettersSetThree;
                    let wordHistory = ["FOUL", "FOOL"];
                    userInputHistory = "FOOL";
                    document.getElementById("urResult").innerHTML = "Så här lång har du kommit: " + wordHistory;
                    
                }
                //word 4
                else if (userInput.toUpperCase() === "FOOT") {
                    msg = "Grattis, Du klarade det!";
                    let wordStart = "FOOT";
                    document.getElementById("wordStart").innerHTML = wordStart;
                    console.log(wordStart);
                    document.getElementById("alternativ").innerHTML = choices.lettersSetFour;
                    let wordHistory = ["FOUL", "FOOL", "FOOT"];
                    userInputHistory = "FOOT";
                    document.getElementById("urResult").innerHTML = "Så här lång har du kommit: " + wordHistory;
                }
                //word 5
                else if (userInput.toUpperCase() === "FORT") {
                    msg = "Grattis, Du klarade det!";
                    let wordStart = "FORT";
                    document.getElementById("wordStart").innerHTML = wordStart;
                    console.log(wordStart);
                    document.getElementById("alternativ").innerHTML = choices.lettersSetFive;
                    let wordHistory = ["FOUL", "FOOL", "FOOT", "FORT"];
                    userInputHistory = "FORT";
                    document.getElementById("urResult").innerHTML = "Så här lång har du kommit: " + wordHistory;
                }
                //word 6
                else if (userInput.toUpperCase() === "FORE") {
                    msg = "Grattis, Du klarade det!";
                    let wordStart = "FORE";
                    document.getElementById("wordStart").innerHTML = wordStart;
                    console.log(wordStart);
                    document.getElementById("alternativ").innerHTML = choices.lettersSetSix;
                    let wordHistory = ["FOUR", "FOUL", "FOOL", "FOOT", "FORT", "FORE"];
                    userInputHistory = "FORE";
                    document.getElementById("urResult").innerHTML = "Så här lång har du kommit: " + wordHistory;
                }
                //word 7
                else if (userInput.toUpperCase() === "FIRE") {
                    msg = "Grattis, Du klarade det!";
                    let wordStart = "FOUL";
                    document.getElementById("wordStart").innerHTML = wordStart;
                    console.log(wordStart);
                    document.getElementById("alternativ").innerHTML = choices.lettersSetSeven;
                    let wordHistory = ["FOUL", "FOOL", "FOOT", "FORT", "FORE", "FIRE"];
                    userInputHistory = "FIRE";
                    document.getElementById("urResult").innerHTML = "Så här lång har du kommit: " + wordHistory;

                }
                //Goal
                else if (userInput.toUpperCase() === "FIVE") {
                    msg = "Grattis, Du har kommit till målet!";
                    let wordStart = "FIVE";
                    document.getElementById("wordStart").innerHTML = wordStart;
                    console.log(wordStart);
                    let wordHistory = ["FOUL", "FOOL", "FOOT", "FORT", "FORE", "FIRE", "FIVE"];
                    document.getElementById("urResult").innerHTML = "Så här lång har du kommit: " + wordHistory;

                }
                else {
                    msg = "Tyvärr, försök igen!";

                }
            }
        }
        document.getElementById("meddelande").innerHTML = msg;
        console.log(msg);
        
    }

 


