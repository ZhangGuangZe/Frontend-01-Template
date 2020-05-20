function match(string) {
    let state = start;
    for(let c of string) {
        state = state(c);
    } 
    return state === end;

    function start(c) {
        if(c === 'a')
            return findA;
        else 
            return start;
    }

    function end(c) {
        return end;
    }

    function findA(c) {
        if(c === 'b')
            return findB;
        else 
            return start(c);
    }

    function findB(c) {
        if(c === 'c')
            return findC;
        else 
            return start(c);
    }

    function findC(c) {
        if(c === 'a')
            return find2A;
        else 
            return start(c);
    }

    function find2A(c) {
        if(c === 'b')
            return find2B;
        else 
            return start(c);
    }

    function find2B(c) {
        if(c === 'x')
            return end;
        else 
            return findB(c);
    }
}

console.log(match("abcabcabx"));