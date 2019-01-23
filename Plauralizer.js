/**
 * Created by Chalise on 1/23/2019.
 */
/*
Q6. The Pluralizer

Write a function named pluralize that: takes 2 arguments, a noun and a number. returns the number and pluralized form, like "5 cats" or "1 dog".

    For example:

    pluralize('cat', 1) // Outputs: 1 cat
pluralize('cat', 2) // Outputs: 2 cats*/

function pluralizer(noun, no) {
    if (no>1){
        switch(noun){
            case 'man':
                return no + " " + "men";
            case 'person':
                return no + " " + "people";
            case 'car':
                return no + " " + "cars";
            case 'cat':
                return no + " " + "cats";
        }
    }

    else {
        return 1 + " " + noun;
    }
}

console.log(pluralizer("man",10));
console.log(pluralizer("car",1));
console.log(pluralizer("cat",10));