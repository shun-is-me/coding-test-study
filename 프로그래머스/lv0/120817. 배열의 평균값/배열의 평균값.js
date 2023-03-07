function solution(numbers) {
    var answer = 0;
    for(let i in numbers){
        answer = answer + numbers[i];
    }
    answer = answer / (numbers.length)
    return answer;
}