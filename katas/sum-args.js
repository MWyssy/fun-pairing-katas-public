/* The function sumArgs should accept any number of arguments, and add them together. 
If given one argument, it should return that. If it is not given arguments, 
it should return 0 */

function sumArgs(...args) {
    if (args.length === 0) {
        return 0;
    }
 
    let sum = args.reduce((sum, number) => sum + number, 0);

    return sum; 
}

module.exports = sumArgs;
