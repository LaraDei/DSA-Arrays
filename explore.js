const array = require('./samples')

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    arr.pop();
    arr.pop();
    arr.pop();

    return arr;
}
//console.log(main())

//5. URLify a string

function URLify(string) {
    return string.trim().replace(/\s/g, '%20');
  }
 // console.log(URLify('www.thinkful.com /tauh ida parv een'))

// 6. Filtering an array
function filter(arr){
    let filteredArr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= 5){
        filteredArr.push(arr[i])
        }
    }
    return filteredArr
}
//console.log(filter([1,5,10,12,11,2,3,7]))

//7. Max sum in the array

function findMax(arr){
    return Math.max(...arr)
}
//console.log(findMax([1, -30, 4, 21, 100000]))
// 8. Merge arrays
function findMaxOfTwo(arr1, arr2){
    let newArr = arr1.concat(arr2)
    //console.log(newArr)
    let sortedArr = []
    return newArr.sort((a,b)=> {return a-b})
}
//console.log(findMaxOfTwo([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]))

//9. Remove characters
function remove(str, characters){
    let regex = new RegExp(`[${characters}]`, 'ig')
    console.log(regex)
    return str.replace(regex, '')
}
//console.log(remove('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))

//10. Products

function production(arr){
   return arr.map((a,b) => {
        return arr.slice(0, b).concat(arr.slice((b+1),(arr.length)))
            .reduce((a,b) => a*b)
    })
}
//console.log(production([1, 3, 9, 4]))

//11. 2D array

function arraySearch(arr){
    const firstArr = JSON.parse(JSON.stringify(arr));
    let newArr = arr;

    firstArr.map((row, rowAlt) => {
        row.map((item, arrAlt) => {
            if (item === 0) {
                newArr[rowAlt].forEach((num, i) => newArr[rowAlt][i] = 0)
                newArr.forEach(newRow => newRow[arrAlt] = 0)
            }
        })
    })
    return newArr;
}
//console.log(arraySearch([[1,0,1,1,0],[0,1,1,1,0],[1,1,1,1,1],[1,0,1,1,1],[1,1,1,1,1]]))

//12. String rotation

function isRotated(str1, str2){
    if (!str1 || !str2) {
        return false;
    }
    if (str1.length !== str2.length) {
        return false; 
    }
    return (str1 + str1).includes(str2);
}
console.log(isRotated('amazon', 'azonma'))
console.log(isRotated('amazon', 'azonam'))