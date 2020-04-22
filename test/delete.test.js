const deleteElement = require('./../src/delete').deleteElement;
const trim = require('./../src/delete').trim;

test('Test 1 : Delete all occurences of a element ', () => {
    expect(deleteElement([1,8,3,4,5,4], 4)).toEqual([1,8,3,5]);
});

test('Test 2 : Delete 1 occurences of a element ', () => {
    expect(deleteElement([1,8,3,4,5,4], 4 , 1)).toEqual([1,8,3,5,4]);
});

test('Test 3 : Delete all occurences of a element in a empty array', () => {
    expect(deleteElement([], 4 , 1)).toEqual([]);
});

test('Test 4 : Delete 1 occurences of a element in a empty array', () => {
    expect(deleteElement([], 4 )).toEqual([]);
});

test('Test 5 : Delete an element not present in array', () => {
    expect(deleteElement([1,8,3,4,5,4], 9 )).toEqual([1,8,3,4,5,4]);
});

test('Test 6 : Trim/Remove elements the array with specified index', () => {
    expect(trim([1,8,3,4,5,4], 2, 7)).toEqual([1,8]);
});

test('Test 7 : Trim/Remove elements the array with specified index in an empty array', () => {
    expect(trim([], 2, 7)).toEqual([]);
});

test('Test 8 : Trim/Remove elements the array with specified index in an empty array', () => {
    expect(trim([1,8,3,4,5,4], 0, 0)).toEqual([8,3,4,5,4]);
});

test('Test 9 : Trim/Remove elements the array with specified index in an empty array', () => {
    expect(() => {trim([1,8,3,4,5,4], -1, 0);}).toThrowError(RangeError);
});
