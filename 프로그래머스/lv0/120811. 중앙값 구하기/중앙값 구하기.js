function solution(array) {
    var answer = 0;
    let tmp = 0;
    let len = Math.floor(array.length / 2);
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length ; j++){
            if(array[i]>array[j]){
                tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
        }
    }
    
    answer = array[len];
    
    return answer
}