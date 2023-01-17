const repeatString = function(word, num) {
    if (num == -1) return "ERROR";
    let ans = "";
    while(num--){
        ans += word;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
