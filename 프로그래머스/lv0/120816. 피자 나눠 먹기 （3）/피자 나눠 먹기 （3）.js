function solution(slice, n) {
    var answer = 1;
    let sum = 0;
    for(let i = 1; sum < n; i++){
        sum = slice * i;
        answer = i;

    }
    return answer;
}