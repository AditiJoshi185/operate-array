# oprerate-array
oprerate-array is a package that provides various functions to easily and efficiently operate on arrays.


## Installation

```bash
$ npm install operate-array --save
```

## Usage

#### `deleteElement(array, element, occurrence)`

Deletes the element from the array as per the specified occurrences from the left and returns a new array with remaining elements.
If no occurrence is specified it will delete all the occurrences of that element in that array.

```javascript
var operator = require('operate-array');

var resultArray = operator.deleteElement([1, 2, 3, 4, 4, 5], 4);

console.log(resultArray);
// [1, 2, 3, 5];
```

```javascript
var operator = require('operate-array');

var resultArray = operator.deleteElement([1, 2, 3, 4, 4, 5], 4, 1);

console.log(resultArray);
// [1, 2, 3, 4, 5];
```

#### `trim(array, startIndex, endIndex)`

Deletes the elements in the range of the start and end index both inclusive and returns a new array with remaining elements

```javascript
var operator = require('operate-array');

var resultArray = operator.trim([1, 2, 3, 4, 4, 5], 2, 4);

console.log(resultArray);
// [1, 2, 5];
```

## Run Tests

```bash
$ npm install
```
```bash
$ npm run test
```

* Test 1 : Delete all occurences of an element.
* Test 2 : Delete one occurences of an element.
* Test 3 : Delete all occurences of an element in an empty array.
* Test 4 : Delete one occurences of an element in an empty array.
* Test 5 : Delete an element not present in array.
* Test 6 : Trim/Remove elements the array with specified index.
* Test 7 : Trim/Remove elements the array with specified index in an empty array.
* Test 8 : Trim/Remove elements the array with specified index in an empty array.
* Test 9 : Trim/Remove elements the array with specified index in an empty array.
