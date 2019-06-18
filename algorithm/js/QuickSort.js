function partition(array, left, right) {
    let index = Math.floor((right+left)/2);
    let i = left, j = right;

    while(i <= j) {
        while(array[i] < array[index]) {
            i++;
        }
        while(array[j] > array[index]) {
            j--;
        }
        if(i <= j) {
            console.log(array[i], array[j]);
            [array[i], array[j]] = [array[j], array[i]];
            console.log(array[i], array[j]);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(array, left, right) {
    let pivotIndex;
    if(array.length > 1) {
        povitIndex = partition(array, left, right);
        if(left < povitIndex - 1) {
            right = povitIndex - 1;
            quickSort(array, left, right);
        }
        if(povitIndex < right) {
            left = povitIndex;
            quickSort(array, left, right);
        }
    }
    return array;
}

quickSort(candidates, 0, candidates.length - 1);