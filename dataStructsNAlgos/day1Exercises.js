// Assume an array of non - negative integers.A second array is formed by 
// shuffling the elements of the first array and deleting a random element.Given 
// these two arrays, find which element is missing in the second array.Do this in
//  linear time with constant memory use.

function findMissingNumber(arr1, arr2) {
    let sum = 0;
    arr1.forEach(num => {
        sum += num;
    });

    arr2.forEach(num => {
        sum -= num;
    });
    
    return sum;
}

// console.log(findMissingNumber([8, 3, 5, 1], [1, 5, 3])); // = 8
// console.log(findMissingNumber([1, 1, 1, 1], [1, 1, 1])); // = 1
// console.log(findMissingNumber([3, 5, 4, 8, 7, 9], [7, 4, 3, 5, 9])); // = 8



//Given a list of integers find the smallest number in the list.
// First, write a function that compares each element to every other element of 
// thelist.Return the element if all other elements in the array are larger.
// What is the time complexity for this function?
function myMin(list){

}

console.log(myMin([0, 3, 5, 4, -5, 10, 1, 90]));//-5

