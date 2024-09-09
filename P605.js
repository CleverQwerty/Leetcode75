# P605: Can Place Flowers

##################### BETTER SOLUTION #######################
# Time Complexity: O(n)
# Space Complexity: O(1)
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (n===0) return true;

    for (var i=0; i<flowerbed.length;i++){
        if (flowerbed[i]===0)
        {
            var prev = i===0 || flowerbed[i-1] === 0;
            var next = i===flowerbed.length-1 || flowerbed[i+1]===0;
            if (prev && next){
                flowerbed[i] = 1;
                n--;
            }
        }
        if (n===0) return true;
        
    }
    return n===0;
};

##################### BASIC SOLUTION #########################
# Time Complexity: O(n)
# Space Complexity: O(1)

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    var temp;
    var prev, current, next;
    if (n==0) return true;
    if (flowerbed.length==0){
        return false;
    }
    if (flowerbed.length==1){
        if (flowerbed[0]==0){
            flowerbed[0]=1;
            n--;
        }
        if (n==0) return true;
        else return false;
    }
    for (var i=0; i<flowerbed.length; i++){
        if (n==0) return true;
        current = flowerbed[i];
        if (i==0){
            next = flowerbed[i+1];
            if ((current==0)&&(next==0)){
                flowerbed[i]=1;
                n--;
            }
        }
        else if (i==flowerbed.length-1){
            prev = flowerbed[i-1];
            if ((current==0)&&(prev==0)){
                flowerbed[i] = 1;
                n--;
            }

        }
        else{
            prev = flowerbed[i-1];
            next = flowerbed[i+1];
            if ((current==0)&&(prev==0)&&(next==0)){
                flowerbed[i] = 1;
                n--;
            }

        }
    }
    if (n==0) return true;
    else return false;
};
