const reverseString = function(string) {
    let temp = string.split('');
    temp = temp.reverse();
    let ans = temp.join('');
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
