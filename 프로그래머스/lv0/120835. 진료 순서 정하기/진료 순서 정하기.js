function solution(emergency) {
    var answer = emergency.slice().sort((a,b)=>b-a);
    const result = emergency.map(function(obj){
        return answer.indexOf(obj)+1;
    });
    return result
}