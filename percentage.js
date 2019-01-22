/**
 * Created by Chalise on 1/22/2019.
 *//*
 Q6. Given the percentage of a student, find out the division of that student. Conditions:

 Distinction if 100 > percentage >= 80
 First Division if 80 > percentage >= 60
 Second Division if 60 > percentage >= 40
 Third Division if 40 > percentage >= 32
 Else fail*/

function calcDiv(percentage) {
    var result;
    if (percentage>= 80 && percentage<=100){
        result = "Distinction";
    }

    else if(percentage>=60 && percentage<80){
        result = "First divison";
    }

    else if(percentage>=40 && percentage<60){
        result = "Second divison";
    }

    else if(percentage>=40 && percentage<32){
        result = "Third divison";
    }

    else {
        result = "Fail";
    }
    return result
}

console.log(calcDiv(55));