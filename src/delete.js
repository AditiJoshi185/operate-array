exports.deleteElement = function (array, element, occurrence) {
    let deleteAllElementOccurrence = occurrence ? 0 : 1;
    let arr = [...array];
    for (let ele = 0; ele < arr.length; ele++) {
        if (deleteAllElementOccurrence && arr[ele] == element) {
            arr = [...arr.slice(0, ele), ...arr.slice(ele + 1, arr.length)];
            occurrence--;
        }
        if (!deleteAllElementOccurrence && arr[ele] == element && occurrence) {
            arr = [...arr.slice(0, ele), ...arr.slice(ele + 1, arr.length)];
            occurrence--;
        }
    }
    return arr;
}

exports.trim = function (array, startIndex, endIndex) {
    if(startIndex < 0 || endIndex < 0)
        throw new RangeError('Index must be greater than or equal to zero');
    let arr = [...array];
    return [...arr.slice(0, startIndex), ...arr.slice(endIndex + 1, arr.length)];
}