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
    const iter = (encoded, decoded) => {
        if (encoded === '') return decoded
        const code = encoded.slice(0, 10)
        if (code.includes('*')) decoded += ' '
        else {
            let morse = ""
            for (let index = 0; index < code.length; index += 2) {
                const number = code.slice(index, index + 2)
                if (number === '11') morse += '-'
                if (number === '10') morse += '.'
            }
            decoded += MORSE_TABLE[morse]
        }
        return iter(encoded.slice(10), decoded)
    }
    return iter(expr, '')
}

module.exports = {
    decode
}