# P1431. Kids With the Greatest Number of Candies
# Time Complexity: O(n)
# Space Complexity: O(n)

######################## BETTER SOLUTION ##############################

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var max = Math.max(...candies);

    var result = candies.map(item => item+extraCandies >= max);
    return result;
};

######################## FIRST SOLUTION ##############################

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var max = candies[0];
    for (var i=1; i<candies.length;i++){
        if (candies[i]>max) max = candies[i];
    }
    var result = [];
    var temp;
    for (var i=0; i<candies.length;i++){
        temp = candies[i]+extraCandies;
        if (temp>=max){
            result.push(true);
        }
        else{
            result.push(false);
        }
    }
    return result;
    
};
