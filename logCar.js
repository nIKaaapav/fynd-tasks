function logCar() {
    console.log(this.color + " " + this.brand);
};

const input = '{ "color": "Red", "brand": "BMW" } \n { "color": "Black", "brand": "Audi" } \n { "color": "Gray", "brand": "Toyota" }';

const data2 = input
    .split('\n')
    .filter(t => !!t)
    .map(e => JSON.parse(e));

const cars = data2.map(e => ({
    ...e,
    logCar: logCar
}));

cars.forEach(e => {
    e.logCar()
});
