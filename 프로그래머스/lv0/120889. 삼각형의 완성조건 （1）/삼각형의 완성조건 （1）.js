function solution(sides) {
    var answer = 0;
    sides = sides.sort((a,b)=>a-b);
    answer = sides[0]+sides[1] > sides[2] ? 1:2 
    return answer;
}