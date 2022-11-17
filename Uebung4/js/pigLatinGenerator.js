function initPigLatinGenerator() {
   document.getElementById("generate_pig_latin_button").addEventListener("click",pigLatin)
}

/*String functions:
toLowerCase()
match() kann man regex benutzen für sonderzeichenerkennung
Vowelerkennung mit startsWith()
String unterteilung functions: wenn leerzeichen gefunden per search() mit slice() oder split()
 einzelwort rausholen und am ende konkatinieren
 */

function pigLatin(){
    let inputValue = document.getElementById("input_sentence").value;
    inputValue = inputValue.toLowerCase().trimStart();

    let subStrings = inputValue.split(" ");

    let firstLetterOfString;

    for(let i=0; i < subStrings.length; i++){
        if(!(containsSpecialChars(subStrings[i]))){
            if(startsWithVowel(subStrings[i])){
                subStrings[i] += "yay";
            }
            else{
                firstLetterOfString = subStrings[i].charAt(0);
                subStrings[i] = subStrings[i].slice(1)
                subStrings[i] += firstLetterOfString + "ay";
            }

        }
        else
            console.log("hat sonderzeichen mache nichs");
    }

    document.getElementById("pig_latin_output").innerHTML = subStrings.join(" ");
}

function startsWithVowel(subString) {
        if (subString.match("^[aieou].*"))
            return true;

        return false;
}

function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}

