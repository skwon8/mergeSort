// create a helper function that takes 2 already sorted array, and combines them into one sorted array and returns that new sorted array.

const combineSortedArrays = (arr1, arr2) => {
    //  result array that will contain values from both the input arrays.
    let result = []
    let i = 0;
    let j = 0;

    // while the itterater for the first array is less than the length of the first array, and while the itterator of the second array is less than the length of the second array.
    while (i < arr1.length && j < arr2.length) {
        // comepare the value at the first array at index "i" with the value at the second array at index "j" t osee which one is smaller.
        if (arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++;
        } else {
            result.push(arr2[j])
            j++;
        }
    }

    // at the end
    return result
}


console.log(combineSortedArrays([1,3,5,5,6], [2,3,4,9])) // [1,2,3,3,4,5,5,6,9]