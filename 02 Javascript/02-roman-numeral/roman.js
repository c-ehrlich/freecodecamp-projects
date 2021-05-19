/**
 * convertToRoman (for FreeCodeCamp)
 * converts an integer to Roman Numeral
 */

 function convertToRoman(num) {
    // input checks
    // * function needs exactly one parameter
    // * parameter must be an integer
    // * integer must be between 1 and 3999 inclusive
    if (num < 1 || num > 3999 || !Number.isInteger(num) || arguments.length != 1) {
      return "please enter an integer between 1 and 3999";
    }
    console.log(arguments.length);
  
    // get each digit of the input number
    let thousands = Math.floor(num / 1000);
    let hundreds = Math.floor((num - thousands * 1000) / 100);
    let tens = Math.floor((num - thousands * 1000 - hundreds * 100) / 10);
    let ones = Math.floor((num - thousands * 1000 - hundreds * 100 - tens * 10))
  
    // define arrays of roman numeral components
    let rn1000 = ["", "M", "MM", "MMM"];
    let rn100 = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let rn10 = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let rn1 = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  
    // build roman numeral string
    let returnString = rn1000[thousands] + rn100[hundreds] + rn10[tens] + rn1[ones];
  
    return returnString;
  }
  
  /**
   * TESTS
   * uncomment as necessary
   * 
   * convertToRoman(2); // should return the string II.
   * convertToRoman(3); // should return the string III.
   * convertToRoman(4); // should return the string IV.
   * convertToRoman(5); // should return the string V.
   * convertToRoman(9); // should return the string IX.
   * convertToRoman(12); // should return the string XII.
   * convertToRoman(16); // should return the string XVI.
   * convertToRoman(29); // should return the string XXIX.
   * convertToRoman(44); // should return the string XLIV.
   * convertToRoman(45); // should return the string XLV.
   * convertToRoman(68); // should return the string LXVIII
   * convertToRoman(83); // should return the string LXXXIII
   * convertToRoman(97); // should return the string XCVII
   * convertToRoman(99); // should return the string XCIX
   * convertToRoman(400); // should return the string CD
   * convertToRoman(500); // should return the string D
   * convertToRoman(501); // should return the string DI
   * convertToRoman(649); // should return the string DCXLIX
   * convertToRoman(798); // should return the string DCCXCVIII
   * convertToRoman(891); // should return the string DCCCXCI
   * convertToRoman(1000); // should return the string M
   * convertToRoman(1004); // should return the string MIV
   * convertToRoman(1006); // should return the string MVI
   * convertToRoman(1023); // should return the string MXXIII
   * convertToRoman(2014); // should return the string MMXIV
   * convertToRoman(3999); // should return the string MMMCMXCIX
   */
  