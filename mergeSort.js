const mergeSort = (arr)=>{

    if(arr.length<=1){
        return arr;
    }    
    //goal is to recieve one unsorted array and break that arrray up into halves
    let mid = Math.floor(arr.length/2)
    //arr.slice() lets you create a new sub array form the original array
    let leftHalf = arr.slice(0, mid);
    console.log("left half -->", leftHalf)

    let rightHalf = arr.slice(mid);
    console.log("right half -->", rightHalf)

    // mergeSort(leftHalf)
    // mergeSort(rightHalf)
    return combineSortedArrays(mergeSort(leftHalf), mergeSort(rightHalf))


}


console.log(mergeSort([5,4,0,9,2,3,1]))