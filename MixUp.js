/**
 * Created by Chalise on 1/22/2019.
 */
/*
Q4. The MixUP

Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

    mixUp('mix', 'pod'); // Outputs: 'pox mid'
    mixUp('dog', 'dinner'); // Outputs:  'dig donner'
    */

function mixUp(str1 , str2) {
    if (str1.length >= 2 && str2.length >= 2){
        var tem1 = str1.slice(0,2);
        var tem2 = str2.slice(0,2);
        var mix1 = tem2 + str1.slice(2,str1.length);
        var mix2 = tem1 + str2.slice(2,str2.length);
        return mix1 + " " + mix2;
    }
}

console.log(mixUp("jelly","bin"));