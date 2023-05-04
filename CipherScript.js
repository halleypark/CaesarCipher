function rot13(str) {
  const cypher = {
    'A': 'N',
    'B': 'O',
    'C': 'P',
    'D': 'Q',
    'E': 'R',
    'F': 'S',
    'G': 'T',
    'H': 'U',
    'I': 'V',
    'J': 'W',
    'K': 'X',
    'L': 'Y',
    'M': 'Z',
    'N': 'A',
    'O': 'B',
    'P': 'C',
    'Q': 'D',
    'R': 'E',
    'S': 'F',
    'T': 'G',
    'U': 'H',
    'V': 'I',
    'W': 'J',
    'X': 'K',
    'Y': 'L',
    'Z': 'M',
    '?': '?',
    '!': '!',
    '.': '.' };
  let strArray = str.split(' ');
  let newArray = [];
  for (let i = 0; i < strArray.length; i++){
    let cypheredChar = [];
        
    for (let j = 0; j < strArray[i].length; j++){
      if (cypher.hasOwnProperty(strArray[i][j])){
        cypheredChar.push(cypher[strArray[i][j]]);
        if (j == strArray[i].length - 1){
          let cypheredWord = cypheredChar.join('');
          newArray.push(cypheredWord);
        }
        //console.log(cypheredChar)
        //console.log(cypher[strArray[i][j]])
      }
    }
  }
  return newArray.join(' ');
}
