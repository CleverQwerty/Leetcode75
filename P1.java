# Time complexity = O(n)
# Space complexity = O(n)

class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer,Integer> map = new HashMap<>();
        int[] result = {-1, -1};
        for (int i =0; i<nums.length; i++){
            if (map.containsKey(nums[i])){
                result[0] = map.get(nums[i]);
                result[1] = i;
                return result;
            }
            map.put(target-nums[i], i);
        }
        return result;
    }
}
