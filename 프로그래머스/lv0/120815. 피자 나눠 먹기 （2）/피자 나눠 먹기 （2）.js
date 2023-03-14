function solution(n) {
    var answer = 0;
    let num = 6;
    let min = 1;
    for(let i = 2 ; i <= Math.min(n,num);i++){
        if(n % i === 0 && num % i ===0){
            min = i;
        }
    }
    answer = ((n * num)/ min) / num
    
    return answer;
}