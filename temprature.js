/**
 * Created by Chalise on 1/22/2019.
 */

/*
Q3. The Temperature Converter

Store a celsius temperature into a variable.
    Convert it to fahrenheit and output "NN°C is NN°F".
    Now store a fahrenheit temperature into a variable.
    Convert it to celsius and output "NN°F is NN°C."*/

var celsius = 37;
var farenheit = 99;

function cel_to_far(t) {
    return (t * 9/5) + 32;
}

function far_to_cel(t) {
    return (t - 32) * 5/9;
}

console.log(celsius,'celsius', "is" ,cel_to_far(celsius), "farenheit");
console.log(farenheit, "farenheit", "is", far_to_cel(farenheit), "Celsius");
