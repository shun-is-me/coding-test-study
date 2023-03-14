function solution(sides) {
    var answer = 0;
    let max = 0;
    let sum = 0;
    let ind = 0;
    for(let i in sides){
        if(sides[i] > max){
            max = sides[i];
        }
    }
    ind = sides.indexOf(max);
    console.log(ind)
    sides.splice(ind,1);
    
    for(let i in sides){
        console.log("zz"+sides[i]);
        sum += sides[i];
        
    }
    console.log(sum);
    if(max < sum){
        return 1
    }
    else return 2
    
    return answer;
}