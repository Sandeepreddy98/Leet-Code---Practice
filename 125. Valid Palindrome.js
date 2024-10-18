// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// O(n) - time complexity and using inbuilt methods.

function validPalindrome(string) {
  return string === string.split('').reverse().join('')
}

// Using For loop

function validPalindrome(string) {
  for (let i = 0; i < Math.floor(string / 2); i++) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }
  return true;
}

// Using while loop - Time Complexity - O(n),Space Complexity - O(1) 
function validPalindrome(string){
  let left = 0
  let right = string.length-1
  while(left <= right){
    if(string[left] !== string[right]){
      return false
    }
    left++
    right--
  }
  return true
}

console.log(validPalindrome("amanaplanacanalpanama"));