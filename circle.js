/**
 * Created by Chalise on 1/22/2019.
 */
/*
Q2. Calculate properties of a circle, using the definitions here.

    Store a radius into a variable.
    Calculate the circumference based on the radius, and output "The circumference is NN".
    Calculate the area based on the radius, and output "The area is NN".
    Q3. The Temperature Converter*/

const r = 5;
var PI = Math.PI;

function circumference(r) {
    return 2 * PI * r;
    
}

function area(r) {
    return PI * r *r;
}


console.log("The area is", area(r));
console.log("The circumference is", circumference(r));


