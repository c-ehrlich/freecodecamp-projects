// rot13
// outputs the rot13 of a string
// works only on uppercase strings (as demanded by the project brief)

function rot13(str) {

    // create cipher array
    function replaceChar(match) {
      let cipherChars = {
        'A': 'N',   'N': 'A',
        'B': 'O',   'O': 'B',
        'C': 'P',   'P': 'C',
        'D': 'Q',   'Q': 'D',
        'E': 'R',   'R': 'E',
        'F': 'S',   'S': 'F',
        'G': 'T',   'T': 'G',
        'H': 'U',   'U': 'H',
        'I': 'V',   'V': 'I',
        'J': 'W',   'W': 'J',
        'K': 'X',   'X': 'K',
        'L': 'Y',   'Y': 'L',
        'M': 'Z',   'Z': 'M'
      };
      return cipherChars[match];
    }
  
    // run all uppercase letters through the cipher array
    str = str.replace(/[A-Z]/g, replaceChar);
  
    return str;
  }
  
  /**
   * TESTS
   * uncomment as necessary 
   *  
   * rot13("SERR PBQR PNZC"); // should decode to the string FREE CODE CAMP
   * rot13("SERR CVMMN!"); // should decode to the string FREE PIZZA!
   * rot13("SERR YBIR?"); // should decode to the string FREE LOVE?
   * rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."); // should decode to the string THE QUICK  BROWN FOX JUMPS OVER THE LAZY DOG.
   */
  