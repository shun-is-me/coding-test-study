function solution(n, k) {
    var answer = 0;
    let re_n = Math.floor(n/10);
    k = k - re_n;
    console.log(k);
    answer = (12000 * n)+(2000 * k);
    console.log(answer);
    return answer;
}