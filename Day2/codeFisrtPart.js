const input = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,6,19,23,2,23,6,27,2,6,27,31,2,13,31,35,1,10,35,39,2,39,13,43,1,43,13,47,1,6,47,51,1,10,51,55,2,55,6,59,1,5,59,63,2,9,63,67,1,6,67,71,2,9,71,75,1,6,75,79,2,79,13,83,1,83,10,87,1,13,87,91,1,91,10,95,2,9,95,99,1,5,99,103,2,10,103,107,1,107,2,111,1,111,5,0,99,2,14,0,0];

for(let i=0; i<input.length; i+=4){
    let indexOperation = input[i];
    let firstValue = input[i+1];
    let secondValue = input[i+2];
    let resultPosition = input[i+3];
    let result;
    switch(indexOperation){
        case 1:
            result=input[firstValue]+input[secondValue];
            input[resultPosition] = result;
            break;
        case 2:
            result=input[firstValue]*input[secondValue];
            input[resultPosition] = result;
            break;
        case 99:
            console.log(input);
            break;
    }
}
