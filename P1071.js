# P1071: Greatest common divisor of strings

############################### BEST SOLUTION ##################################
# Time complexity = O(N)
# Space complexity = O(1)

## If str1+str2 = str2+str1, then there exists a GCD of strings other than "".
## In this case, find the GCD of the lengths of the strings. Use Euclidean algorithm for efficiency.
## The prefix of any of the strings from 0 to the gcd_of_lengths should give you the gcd of the strings.

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

 var calculateGCD = function(num1, num2){
    while (num1!==0){
        let temp = num1;
        num1 = num2%num1;
        num2 = temp;
    }
    return num2;
 }
var gcdOfStrings = function(str1, str2) {
    if ((str1+str2)!=(str2+str1)) return "";
    var prefix_length = calculateGCD(str1.length,str2.length);
    return str1.substring(0,prefix_length);
};
