function solution(numbers) {
    var answer = [];
    for(let i = 0; i < numbers.length ; i++){
        console.log(answer[i]);
        answer[i] = numbers[i] * 2;
    }
    return answer;
}