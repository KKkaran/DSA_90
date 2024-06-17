// You are given an integer array nums. You are initially positioned at the array's first index,
// and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

var canJump = function (nums) {
 
  if (nums.length === 0) return 0
  if(nums.length === 1) return 1

   let maxReach = 0; // To keep track of the maximum index we can reach
  
   for (let i = 0; i < nums.length; i++) {
    //  if (i > maxReach) {
    //    // If the current index is greater than the maximum index we can reach,
    //    // it means we can't move forward anymore
    //    return false;
    //  }
     // Update the maximum reach
     maxReach = Math.max(maxReach, i + nums[i]);

     // If we can reach or surpass the last index, return true
       if (maxReach >= nums.length - 1) {
         return i+1
       //return true;
     }
   }

   return false;
};

console.log(canJump([2,3,0,1,4]))