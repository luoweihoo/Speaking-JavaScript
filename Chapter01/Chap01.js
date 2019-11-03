
// Set up instance data
function Point(x, y) {
    this.x = x;
    this.y = y;
}

// Methonds
Point.prototype.dist = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
};

var p = new Point(3, 5);
console.log(p.x);
console.log(p.dist());