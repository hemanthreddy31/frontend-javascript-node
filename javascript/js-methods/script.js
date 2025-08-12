let arr = [1,2,3,4,5,6];
console.log(arr)
console.log(arr.pop())
console.log(arr)

Array.prototype.myPop = function() {
    if (this.length === 0) {
        return undefined;
    }
    const lastElement = this[this.length - 1];
    this.length = this.length - 1;
    return lastElement;
};

console.log(arr.myPop()); 
console.log(arr); 
