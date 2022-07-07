/*
    nums = [2,7,11,15]
    target = 9
    nums[0] + nums[1] == 9
    nums[0] = 2
    nums[1] = 7
*/

function twoSum(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++) {
            if(i == j){
                continue
            }
            if(nums[i] + nums[j] == target) {
                return [i , j]
            }
        }
    }
}

console.log(twoSum([3,2,4], 6));