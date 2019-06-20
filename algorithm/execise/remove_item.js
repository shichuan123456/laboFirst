function max(arr) {
    if (arr.length === 1) return arr[0];
    let temp = arr.pop();
    return temp > max(arr) ? temp : max(arr); 
}


alert(max(1,2,4,2,1,3,4,2,1));