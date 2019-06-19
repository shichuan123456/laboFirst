/* 归并排序 */
function merge_sort(arr) {
    const length = arr.length;
    if (length === 1) {   
        return arr;
    }
    let midI = Math.floor(length/2) ;
    let left = arr.slice(0, midI), right = arr.slice(midI);
    return merge(merge_sort(left), merge_sort(right));
}

function merge(arr1, arr2) {
    let result = [];
    while(arr1.length && arr2.length) {
        if(arr1[0] <= arr2[0]) {
            result.push(arr1.shift())
        } else {
            result.push(arr2.shift())
        }
    }

    while(arr1.length) {
        result.push(arr1.shift())
    }

    while(arr2.length) {
        result.push(arr2.shift())
    }
    return result;
}