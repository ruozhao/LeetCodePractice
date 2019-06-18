/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums3 = new Array();

    for(let i = 0, j = 0; i < nums1.length || j < nums2.length; ) {
        if((i < nums1.length) && ((nums1[i] <= nums2[j]) || (j >= nums2.length))) {
            nums3.push(nums1[i]);
            i++;
        }
        if((j < nums2.length) && ((nums2[j] < nums1[i]) || (i >= nums1.length))) {
            nums3.push(nums2[j]);
            j++;
        }
    }

    const nums3Len = nums3.length;
    if(nums3Len % 2) {
        let index = nums3Len >> 1;
        return nums3[index];
    } else {
        let index = nums3Len >> 1;
        return (nums3[index] + nums3[index - 1])/2;
    }
};