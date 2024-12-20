// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock

//Start Funktion
// 1) Funktion för att räkna ut dricks från percent till kronor. // (0.10 * 100) * 1000) / 100 = 100 SEK
        //INPUT i HTML i decimalform t.ex. 0.10, 0.20
// 2) Funktion för att dela nota per person. 
        //SET variabel totalDricks = Hämta värdet från Funtion räknar dricks
        //SET variabel totalSumma = Hämta värdet från HTML 
        //SET variabel antalPerson = Hämta värdet från HTML
        //SET variabel dricks = Hämta värdet från HTML
// 3) If totalSumma, antalPerson, dricks minder eller lika med 0
        //Anropa med Alert för att fylla i värden i alla fältet.
// 4) SET variabel result för att skiva ut summa / person.
        // resultat.toFixed(2) för att visa summa i 2 decimal.
//End Funktion

function percentDricks(totalSumma, dricks) {
    return ((dricks * 100) * totalSumma) / 100;    
}

function delaNota(totalSumma, antalPerson, dricks) {
    var totalDricks = percentDricks(totalSumma, dricks);
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
    
}





// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om


//play();
// 1) SET Arrays för att skapa ordbok.
    // const ordbok = []
// 2) Börja start ord med array nr. [0] i ordbok
    // skapa h3 i HTML för skriva ut bokstäver alternativ 1 i HTML
// 3) Funktion wordResult() till en button i HTML, Aktiv funktionen när man tyrcka.
// 4) SET 7 st. Arrays för altertiv 2 - 7
// 5) INPUT i HTML för gissa nytt ord. 
//    Använder ".toUpperCase()" för att förhindra error av olika typ av bokstäver.
   // exempel: om spelaren skrev "Foul" eller "foul" då funktionen ändrat/översätta de till stora bostäver. 
   // if userInput ord kortare än < 4 index eller userInput längre än > 4, Alert meddelande.
   // For-loop räknar antal bokstäver som ändrat. 
   // loopen börjar med värdet i=3, sedan förtsätter så länger i är större än eller lika med 0, varje iteration miska i med 1, så jämförar ett stag åt vänster.
   // Alert om hitta skillnaden.
// 6) else if loop till nästa ord till ordet "FIVE"



const ordbok = ["FOUR", "FOUL", "FOOL", "FOOT", "FORT", "FORE", "FIRE", "FIVE"]; // Innehåller ALLA ord i det engelska språket.

//Start ordet börja här
document.getElementById("wordStart").innerHTML = ordbok[0];
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
                    let wordHistory = ["FOUL", "FOOL", "FOOT", "FORT", "FORE", "FIRE", "FIVE"];
                    document.getElementById("urResult").innerHTML = "Så här lång har du kommit: " + wordHistory;

                }
                else {
                    msg = "Tyvärr, försök igen!";

                }
            }
        }
        document.getElementById("meddelande").innerHTML = msg;
        
    }

 


