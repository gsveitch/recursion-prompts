// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
    if (n < 0) {
        return null;
    } else if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
    return array.length === 0 ? 0 : array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
    if (array.length === 0) {
        return 0;
      } else if (Array.isArray(array[0])) {
        return arraySum(array[0]) + arraySum(array.slice(1));
      } else {
        return array[0] + arraySum(array.slice(1));
      }
};

// 4. Check if a number is even.
var isEven = function(n) {
    if (n === 0) {
        return true;
    } else if (n === 1) {
        return false;
    } else if (n > 0) {
        return isEven(n - 2);
    } else {
        return isEven(n + 2);
    }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    if (n === 0) {
        return 0;
    } else if (n > 0) {
        return n - 1 + sumBelow(n - 1)
    } else {
        return n + 1 + sumBelow(n + 1);
    }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
    if (x - y === 1 || y - x === 1 || y === x) {
        return [];
    }
    if (x < y) {
        return range(x, y - 1).concat(y - 1);
    }
    if (x > y) {
        return range(x, y + 1).concat(y + 1);
    } 
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    if (exp === 0){
        return 1;
    } else if (exp > 0){
        return base * exponent(base, exp - 1);
    } else if (exp < 0){
        return 1 / exponent(base, -exp);
    }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    if (n === 0 || n % 1 !== 0) {
        return false;
    }
    if (n === 1) {
        return true;
    }
    return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
    return string.length === 1 ? string : reverse(string.slice(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    string = string.toLowerCase();
    for (var i = 0; i < string.length; i++){
      if (string[i] == ' ') {
        string = string.slice(0, i) + string.slice(i + 1);
      }
    }
    return string[0] !== string[string.length - 1] ? false 
    : string.length === 0 ? true 
    : palindrome(string.slice(1, string.length - 1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
    if (y === 0){
        return NaN;
    } else if (x <= 0 && y < 0) {
        return x > y ? x : modulo(x - y, y);
    } else if (x >= 0 && y > 0) {
        return x < y ? x : modulo(x - y, y);
    } else if (x < 0 && y > 0) {
        return modulo(x, -y);
    }
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
    if (x < 0 && y < 0) {
        x = -x;
        y = -y;
    }
    if (y === 0 || x === 0) {
        return 0;
    }
    return y === 1 ? x : x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y, c = 0) {
    if (y === 0) {
        return NaN;
      }
      if (x < 0 && y < 0) {
        return divide(-x, -y);
      }
      if (x < 0 || y < 0) {
        return -(divide(-x, y));
      }
      if (x < y) {
        return c;
      }
      return divide(x - y, y, c += 1);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
    if (x <= 0 || y <= 0) {
        return null;
    }
    if (x === y) {
    return x;
    }
    if (x > y) {
    return gcd(x - y, y);
    }
    if (x < y) {
    return gcd(x, y - x);
    }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    if (str1.length === 0 && str2.length === 0) {
        return true;
    }
    return str1[0] !== str2[0] ? false : compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
    return str.length === 1 ? [str[0]] : [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
    return array.length === 1 ? array : reverseArr(array.slice(1)).concat(array[0]);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    if (Array.isArray(value)) {
        var result = [];
        for (let i = 0; i < length; i++){
            result.push(value);
        }
        return result;
    }
    return length === 1 ? [value] : buildList(value, length - 1).concat(value);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
    if (array.length === 0) {
        return 0;
    } 
    return array[0] === value ? 1 + countOccurrence(array.slice(1), value) : 0 + countOccurrence(array.slice(1), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
    return array.length === 0 ? [] : [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key, c = 0) {
    for (let k in obj) {
        if (k === key){
            c += 1;
        }
        if (typeof obj[k] === 'object'){
            c += countKeysInObj(obj[k], key, c = 0);
        }
      }
      return c;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value, c = 0) {
    for (let key in obj){
        if (obj[key] === value){
            c += 1;
        }
        if (typeof obj[key] === 'object'){
            c += countValuesInObj(obj[key], value, c = 0);
        }
      }
      return c;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
    for (let k in obj){
        if (k === key){
            obj[newKey] = obj[k];
            delete obj[k];
        }
        if (typeof obj[k] === 'object'){
            replaceKeysInObj(obj[k], key, newKey)
        }
    }
    return obj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
    if (n <= 0) {
        return null;
    }
    if (n === 1) {
        return [0, 1];
    }
    let s = fibonacci(n - 1);
    return s.concat(s[s.length - 1] + s[s.length - 2]);
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    if (n < 0){
        return null;
    }
    if (n === 0) {
        return 0;
    }
    return n <= 2 ? 1 : nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
    return input.length === 0 ? [] : [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
    return array.length === 0 ? [] 
    : [array[0][0].toUpperCase() + array[0].slice(1)].concat(capitalizeFirst(array.slice(1)));
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj, c = 0) {
    for (let key in obj){
        if (obj[key] % 2 === 0) {
            c += obj[key];
        }
        if (typeof obj[key] === 'object'){
            c += nestedEvenSum(obj[key], c = 0)
        }
    }
    return c;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
    return arrays.reduce( (seed, val) => seed.concat(Array.isArray(val) ? flatten(val) : [val]), [] );
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
    if (str.length === 0) {
        return obj;
    } else if (obj[str[0]]) {
        obj[str[0]] += 1;
        return letterTally(str.slice(1), obj);
    } else {
        obj[str[0]] = 1;
        return letterTally(str.slice(1), obj);
    }
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
    if (list.length === 1) {
        return list[0];
    }
    return list[0] === list[1] ? compress(list.slice(1)) : [list[0]].concat(compress(list.slice(1)));
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
    return array.length === 0 ? [] : [array[0].concat(aug)].concat(augmentElements(array.slice(1), aug));
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
    if (array.length === 1) {
        return array[0];
    }
    if (array[0] === array[1] && array[0] === 0) {
        return minimizeZeroes(array.slice(1));
    }
    return [array[0]].concat(minimizeZeroes(array.slice(1)));
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
    if (array.length === 0) {
        return [];
    } else if (array.length % 2 === 0) {
        let neg = array.slice(-1);
        neg = neg < 0 ? neg : -neg;
        return alternateSign(array.slice(0, -1)).concat(neg);
    } else {
        let pos = array.slice(-1);
        pos = pos > 0 ? pos : -pos;
        return alternateSign(array.slice(0, -1)).concat(pos);
    }
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
    var spell = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    if (str.length === 0) {
        return '';
    }
    for (var i = 0; i < 10; i++){
        if (str[0] === i.toString()){
            return spell[i] + numToText(str.slice(1));
        }
    }
    return str[0] + numToText(str.slice(1));
};

// *** EXTRA CREDIT ***
// GOOGLE AND USE -------> document.body    element.childNodes      element.classList

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node = document.body, count = 0) {
    node.childNodes.forEach((child) => {
        if (child.nodeName === tag.toUpperCase()) {
            count += 1;
        }
        count += tagCount(tag, child, count = 0)
    });
    return count;
};

// 37. Write a function for binary search that return the index of the target in the given array or null if not found.
// var sampleArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(sampleArray, 5)) will return '5'
// console.log(binarySearch(sampleArray, 30)) will return 'null'

var binarySearch = function(array, target, min = 0, max = array.length) {
    let midPoint = min + Math.floor((max - min)/2);
    if (array[midPoint] === target) {
        return midPoint;
    }
    if (midPoint >= max || midPoint === min) {
        return null;
    }
    if (target < array[midPoint]) {
        return binarySearch(array, target, min, max = midPoint);
    }
    if (target > array[midPoint]) {
        return binarySearch(array, target, min = midPoint, max);
    }
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
    if (array.length < 2) {
        return array;
    }
    var midPoint = Math.floor(array.length / 2);
    var subLeft = mergeSort(array.slice(0, midPoint));
    var subRight = mergeSort(array.slice(midPoint));
    var merge = function(node1, node2) {
        var result = [];
        while (node1.length > 0 && node2.length > 0)
            result.push(node1[0] < node2[0] ? node1.shift() : node2.shift());
        return result.concat(node1.length? node1 : node2);
        }
    return merge(subLeft, subRight);
};


//WOO HOO!