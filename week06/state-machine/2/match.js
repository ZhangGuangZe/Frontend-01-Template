function match(string) {
    let findA = false;
    for(let c of string) {
        if(c == 'a')
            findA = true;
        else if(findA && c == 'b')
            return true;
        else
            findA = false;
    } 
    return false;
}

console.log(match("I acbm grot"));