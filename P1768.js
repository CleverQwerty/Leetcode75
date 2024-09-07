# 1768: Merge Strings Alternately

# Time complexity = O(n^2)
# Space complexity = O(n)

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    var len1 = word1.length;
    var len2 = word2.length;
    var counter1 = counter2 = 0;
    var merged = '';
    while ((counter1<len1)&&(counter2<len2)){
        merged = merged + word1[counter1] + word2[counter2];
        counter1++;
        counter2++;
    }
    if (counter1<len1){
        merged = merged+word1.substring(counter1,len1);
    }
    else if (counter2<len2){
        merged = merged+word2.substring(counter2,len2);
    }
    return merged;
};
