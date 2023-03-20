function solution(numbers) {
    var answer = 0;
    let max = 0;
    let second = 0;
    let count = 0;
    for(let i in numbers){
        if(numbers[i] > max){
            max = numbers[i];
            count = i;
        }
    }
    for(let j in numbers){
        if(j !== count && numbers[j]>second){
            second = numbers[j];
        }
    }
    answer = max * second;
    return answer;
}