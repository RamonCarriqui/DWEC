/*Write a function that can take in any number of arguments, and returns the sum of all of the arguments.*/

function myFunction(...arguments){
    let sum = 0;
    for (num of arguments) {
        sum += num;
    }

    return sum;
}

document.write(myFunction(5,5,5,5));
