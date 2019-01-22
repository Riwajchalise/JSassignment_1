/**
 * Created by Chalise on 1/22/2019.
 */

/*Q4. The Calculator

Write a function that will take one argument (a number) and perform the following operations:
    Take half of the number and store the result.
    Square the result of #1 and store that result.
    Calculate the area of a circle with the result of #2 as the radius.*/

"use strict";

function calculator(no) {
    var half = no/2;
    var square = Math.pow(half,2);
    var area =  Math.PI * Math.pow(square,2);
    return area;
}
var result = calculator(5);
console.log(result);
