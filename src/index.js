const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let messageConverted = [];
    let exprConverted = [];
    let message = "";

    expr.split(/(.{10})/).filter(O => O).map(function (word) {
        let morseWord = word.split("00").join("").split("10").join(".").split("11").join("-").split("**********").join("   ");
        exprConverted.push(morseWord);
    });

    message = exprConverted.join(" ");

    message.split("   ").map(function (word) {
        word.split(" ").map(function (letter) {
            messageConverted.push(MORSE_TABLE[letter]);
        });
        messageConverted.push(" ");
    });

    return messageConverted.join("").trim();
}

module.exports = {
    decode
}