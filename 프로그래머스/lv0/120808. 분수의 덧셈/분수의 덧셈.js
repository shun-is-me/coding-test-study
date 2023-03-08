function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    answer[0] = (numer1*denom2) + (numer2* denom1);
    answer[1] = denom1 * denom2;
    let num = 0;
    
    for(let i = 1; i <= answer[1] ; i++){
        if(answer[0]%i === 0 && answer[1]%i === 0){
            num = i;
        }
    }
    answer[0] = answer[0]/num;
    answer[1] = answer[1]/num;
    
    return answer
}
