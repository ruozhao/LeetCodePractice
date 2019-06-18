/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(nums2 == null)
        return nums1;

    let point2 = 0;
    while((nums2[point2] != null)&&(point2 < n)) {
        let point1 = m - 1;
        for(; point1 >= 0; point1--) {
            if(nums1[point1] > nums2[point2]) {
                nums1[point1 + 1] = nums1[point1];
            } else
                break;
        }
        nums1[point1 + 1] = nums2[point2];
        m++;
        point2++;
    }
    return nums1;
};