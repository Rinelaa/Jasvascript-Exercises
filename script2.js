const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mergeArrays(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }

    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }

    console.log("Merged Array:", nums1);
}

rl.question("Enter the nums1 elements separated with a comma: ", (nums1Input) => {
    let nums1 = nums1Input.split(",").map(Number);
    
    rl.question("Enter the number of elements of nums1: ", (mInput) => {
        let m = parseInt(mInput);

        rl.question("Enter the nums2 elements separated with a comma: ", (nums2Input) => {
            let nums2 = nums2Input.split(",").map(Number);
            
            rl.question("Enter the number of elements in nums2: ", (nInput) => {
                let n = parseInt(nInput);

                
                mergeArrays(nums1, m, nums2, n);
                rl.close(); 
            });
        });
    });
});