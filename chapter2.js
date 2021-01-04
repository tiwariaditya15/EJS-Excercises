// excercise 1
let str = "";
for(let i = 0;i < 7; i++){
    for(let j = 0;j <= i; j++){
        str += "#";
    }
    str += "\n";
}

console.log(str);

// excercise 2
for(let i = 1;i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }else if(i % 3 === 0) {
        console.log("Fizz");
    }else if(i % 5 === 0){
        console.log("Buzz");
    }else{

    }     
}

// excercise 3
let max = 8;
let matrix = "";
for(let row = 1;row <= max; row++){
    for(let col = 1;col <= max; col++){
        if(row % 2 !== 0){
            if(col % 2 !== 0){
                matrix += " ";
            }else{
                matrix += "#";
            }
        }else{
            if(col % 2 === 0){
                matrix += " ";
            }else{
                matrix += "#";
            }
        }
    }
    matrix += "\n";
}
console.log(matrix);

