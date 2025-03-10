/*****Dictionary*****
************************/
const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
}

/*****RECUP HTML******
**********************/
const validToMorse = document.getElementById('valid-to-morse');
const validToLatin = document.getElementById('valid-to-latin');

/*****Latin to Morse****
***********************/
function getLatinCharacterList (text) {
    return text.split("");
}

function translateLatinCharacter (textCharacter) {
    for (const property in latinToMorse) {
        if (property == textCharacter.toUpperCase()) {
            return latinToMorse[property];
        }
    }
    return "/";
}

function encode (text) {
    let lettersInArray = getLatinCharacterList(text);
    let result = "";
    for (const elem of lettersInArray) {
        result += `${translateLatinCharacter(elem)} `;
    }
    console.log(result);
}

/*****Morse to Latin*****
*************************/
function getMorseCharacterList (morse) {
    return morse.split(" "); // on met un espace en 'séparator' car chaque lettre morse est séparé par un espace
}

function translateMorseCharacter (morseCharacter) {
    for (const property in morseToLatin) {
        if (property == morseCharacter) {
           return morseToLatin[property];         
        } 
    }
    return " "; // renvoi un espace si un character est non existant dans le dico (ex : le "/")
}

function decode (morse) {
    let morseInArray = getMorseCharacterList(morse);
    let result = "";
    for (const elem of morseInArray) {
        result += translateMorseCharacter(elem);
    }
    console.log(result);
}

/********START*********
***********************/
validToMorse.addEventListener("submit", () => {
    
})

// decode(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
// encode("Hello, world");

