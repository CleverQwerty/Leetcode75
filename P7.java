# Time complexity = O(n) // n = no. of digits in the integer
# Space complexity = O(1)

class Solution {
    public int reverse(int x) {
        int result = 0;
        int lastDigit;
        while (x!=0){
            lastDigit = x%10;
            x = x/10;

            if ((result > Integer.MAX_VALUE/10) || ((result == Integer.MAX_VALUE / 10)&&(lastDigit>7)))
            return 0;
            if ((result < Integer.MIN_VALUE/10) || ((result == Integer.MIN_VALUE/10)&&(lastDigit<-8)))
            return 0;

            result = result*10 + lastDigit;
        }
        return result;
    }
}
