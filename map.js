const input = '{ "value": 10, "targetDate": "2020-03-01" } \n {"value": 11, "targetDate": "2020-02-01"} \n {"value": 12, "targetDate": "2020-01-01"} \n {"value": 20, "targetDate": "2020-01-01"} \n {"value": 10, "targetDate": "2020-01-01"}';
const map = new Map();

const data = input.split('\n')
    .filter(t => !!t)
    .map(e => JSON.parse(e))
    .forEach(({value, targetDate}) => {
        map.set(targetDate, value)
    })

console.log(map);
