function minPages(arr,k) {
    let n = arr.length;
    let sum = 0, max = 0;
    for(let i=0; i<arr.length; i++) {
        sum = sum + arr[i];
        max = Math.max(max, arr[i]);
    }

    let low = max, high = sum, res = 0;

    while(low <= high) {
        let mid = Math.floor((low + high)/2);
        if(isFeasable(arr, k, mid)) {
            res = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return res;
} 

function isFeasable(arr, k, ans) {
    let req = 1, sum = 0;
    for(let i=0; i<arr.length; i++) {
        if((sum + arr[i]) > ans) {
            req++;
            sum = arr[i];
        } else {
            sum = sum + arr[i];
        }
    }
    return (req <= k);
}

let arr = [10,5,20], k=2, max = 20;

console.log(minPages(arr,k,max));

// Time Complexity : O( N * log(sum -  max)) or if we take only upper bound - O( N * log(sum))