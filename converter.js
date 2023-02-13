const Converter = {
    radian: (180 / Math.PI),
    deg2Rad(deg) {
        return deg / this.radian;
    },
    rad2deg(rad) {
        return rad * this.radian;
    }
}

let result = '';

let input = '1,2,3,4,5';

input.split(',')
    .filter(t => !!t)
    .map(i => parseInt(i, 10))
    .forEach(ang => {
        const rad = Converter.deg2Rad(ang);
        const degPlus10 = Converter.rad2deg(rad + 0.174);
        result += `${rad} - ${degPlus10} \n`
    });

console.log(result);

/*
    BUG REPORT: arrow functions dont have a own context. it will take from the scope above 
**/
