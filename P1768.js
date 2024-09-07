# 1768: Merge Strings Alternately

####################################################### BEST SOLUTION ############################################################
# Time complexity = O(n)
# Space complexity = O(n)
# This solution is better because the merged string is first formed as an array giving it O(1) access time, thus reducing time and space complexity.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let merged = [];
    let len1 = word1.length;
    let len2 = word2.length;
    let i=0;

    while((i<len1) && (i<len2)){
        merged.push(word1[i]);
        merged.push(word2[i]);
        i++;
    }
    if (i<len1){
        merged.push(word1.slice(i));
    }
    else if (i<len2){
        merged.push(word2.slice(i));
    }
    return merged.join('');
};

####################################################### OTHER SOLUTION 1 ############################################################
# Time complexity = O(max(n,m))
# Space complexity = O(n+m)
# This solution uses substring which is time complexity heavy.

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
