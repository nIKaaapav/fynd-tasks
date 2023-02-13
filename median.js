let numbers = [7,4,6,9,3,8];

const medianValue = (arr) => {
    arr.sort((a, b) => a - b)

    if (arr.length % 2 != 0) {
        let middleIndex = Math.floor(arr.length/2)
        return arr[middleIndex]
    } else {
        let middleIndex = Math.floor(arr.length/2)
        return (arr[middleIndex] + arr[middleIndex - 1])/2
    }
}

numbers.reduce((a, b) => {
    const newArray = [...a, b];
    console.log(medianValue(newArray));

    return newArray;
}, []);
