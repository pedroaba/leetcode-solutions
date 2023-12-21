function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const arrayLength = m + n;  
  for (let i = m; i < arrayLength; i++) {
    nums1[i] = nums2[i - m];
  }

  console.log(nums1.sort((a, b) => {
    if (a < b) {
      return -1
    } else if (a > b) {
      return 1
    }

    return 0
  }))
};


merge([1,2,3,0,0,0], 3, [2,5,6], 3);