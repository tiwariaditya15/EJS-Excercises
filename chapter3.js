// excercise 1

function min(first, second){
    if(first > second) return first;
    return second;
}

console.log(min(30, 20));


// excercise 2
function countBs(str){
    let counts = 0;
    for(let word = 0;word < str.length; word++){
        if(str[word] === 'B') counts++;
    }
    return counts;
}

console.log(countBs("AbaBBBBasb"));

// excercise 3
function countBs(str, second){
    let counts = 0;
    for(let word = 0;word < str.length; word++){
        if(str[word] === 'B') counts++;
        if(str[word] === second) counts++;
    }
    return counts;
}

console.log(countBs("AbaBBBBasb", 'a'));