function palindrome(str) {

    // strip all non-alphanumeric characters from the string, and make lower case
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
    // iterate through half the string (rounded down)
    // and compare those characters to the ones on the opposite side of the string
    // for an even length string we know it's a palindrome after comparing half the string
    // to the other half.
    // for an odd length string, we know it's a palindrome after comparing half rounded down
    // (for example, the first 4 characters for a 9 character string)
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] != str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  /**
  * TEST CASES
  *  
  * palindrome("eye"); // should return true
  * palindrome("_eye"); // should return true
  * palindrome("race car"); // should return true
  * palindrome("not a palindrome"); // should return false
  * palindrome("A man, a plan, a canal. Panama"); // should return true
  * palindrome("never odd or even"); // should return true
  * palindrome("nope"); // should return false
  * palindrome("almostomla"); // should return false
  * palindrome("My age is 0, 0 si ega ym."); // should return true
  * palindrome("1 eye for of 1 eye."); // should return false
  * palindrome("0_0 (: /-\ :) 0-0"); // should return true
  * palindrome("five|\_/|four"); // should return false
  */