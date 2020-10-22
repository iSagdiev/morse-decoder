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
    let arr = [];
    let newStr = '';
    let tempArr = [];
    let newArr = [];
    for (let i = 0; i < expr.length; i = i + 2) {
        let temp = expr.substring(i, i+2);
        if (temp === '10') {
            newStr += '.';
        } else if (temp === '11') {
            newStr += '-';
        } else if (temp === '**') {
            newStr += '*'; 
        } else if (temp === '00') {
          newStr += '0';
        }
    }
    
    for (let i = 0; i < newStr.length; i = i + 5) {
        arr.push(newStr.substring(i, i+5));
        
    }
    for (let i = 0; i < arr.length; i++) {
      let temp = '';
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] !== '0') {
          temp += arr[i][j];
        }
      }
      tempArr.push(temp);
      
    }
    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i] === '*****') {
            newArr.push(' ');
        } else {
          newArr.push(MORSE_TABLE[tempArr[i]]);
        }     
    }
    
    return(newArr.join(''));
  }

module.exports = {
    decode
}