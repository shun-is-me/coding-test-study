function solution(num_list) {
    var answer = [0,0];

    for(let i in num_list){
        if(num_list[i] % 2 === 0){
            answer[0] += 1;
        }
        else answer[1] += 1;
    }
    return answer;
}