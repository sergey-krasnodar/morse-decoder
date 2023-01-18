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
    ' ':      ' '
};



function decode(expr) {
  let arr = [];
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let result = "";
  arr = expr.match(/.{10}/g)
  arr.map(item => {
    item.split().map(el => {
      if (el !== '**********') {
        arr1.push(el.match(/.{2}/g));
      } else if (el === '**********') {
        arr1.push([' '])
      }
    })
  })

  arr1.forEach(item => {
    for (let i = 0; i < item.length; i++) {
      if (item[i] === '00') {
        item[i] = '';
      } else if (item[i] === '10') {
        item[i] = '.';
      } else if (item[i] === '11') {
        item[i] = '-';
      } else if (item[i] === ' ') {
        item[i] = ' ';
      }
    }
  })

  arr1.forEach(item => {
    arr2.push(item.join(''))
  })

  arr2.forEach(item => {
    for (let key in MORSE_TABLE) {
      if (item === key) {
        arr3.push(MORSE_TABLE[key])
      }
    }
  })

  result = arr3.join('')

  return result;
}

module.exports = {
  decode

}