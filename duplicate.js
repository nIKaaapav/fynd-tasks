const arr = [1, 2, 3, 4];

Array.prototype.duplicate = function() {
    return this.concat(this);
};

console.log(arr.duplicate());
