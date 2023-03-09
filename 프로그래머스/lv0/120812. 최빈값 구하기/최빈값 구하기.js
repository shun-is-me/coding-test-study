function solution(array) {
    var answer = 0;
    let arr = [];
    let count = 0;
    let num = 0;
    let max = 0;
    let result = 0;
    
    for(let i = 0; i < array.length; i++){
        count = array[i];
        if(arr[count] === undefined)
            arr[count] = 1;
        else arr[count] += 1;
    }
    
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    
    for(let i = 0; i < arr.length; i++){
        if(max < arr[i]) {
            max = arr[i];
            result = i;
            num = 0;
        }
        else if(max === arr[i]){
            num += 1;
        }
    }
    
    if(num >= 1) result = -1
    
    return result;
}