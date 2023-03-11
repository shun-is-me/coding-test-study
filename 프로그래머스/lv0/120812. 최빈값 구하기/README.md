# [level 0] 최빈값 구하기 - 120812 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120812#) 

### 성능 요약

메모리: 34.6 MB, 시간: 11.41 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<p>최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 <code>array</code>가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>0 &lt; <code>array</code>의 길이 &lt; 100</li>
<li>0&nbsp;≤&nbsp;<code>array</code>의 원소 &lt; 1000</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>array</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[1, 2, 3, 3, 3, 4]</td>
<td>3</td>
</tr>
<tr>
<td>[1, 1, 2, 2]</td>
<td>-1</td>
</tr>
<tr>
<td>[1]</td>
<td>1</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>[1, 2, 3, 3, 3, 4]에서 1은 1개 2는 1개 3은 3개 4는 1개로 최빈값은 3입니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>[1, 1, 2, 2]에서 1은 2개 2는 2개로 최빈값이 1, 2입니다. 최빈값이 여러 개이므로 -1을 return 합니다.</li>
</ul>

<p>입출력 예 #3</p>

<ul>
<li>[1]에는 1만 있으므로 최빈값은 1입니다.</li>
</ul>

<hr>

<p>※ 공지 - 2022년 10월 17일 제한 사항 및 테스트케이스가 수정되었습니다.</p>

//풀이에 대한 나의 설명
function solution(array) {
let arr = [];
let count = 0;
let num = 0;
let max = 0;
let result = 0;   //변수가 조금 많네요...

//이 함수로 새로운 배열 arr에 카운트를 해줬어요. arr[숫자] = 카운트 수
for(let i = 0; i < array.length; i++){ 
    count = array[i];
    if(arr[count] === undefined)
        arr[count] = 1;
    else arr[count] += 1;
}

//이 함수를 통해서 arr의 카운트 수를 비교해줬습니다.
for(let i = 0; i < arr.length; i++){
    if(max < arr[i]) {
        max = arr[i]; //큰 값보다 크다면 값이 변경되고 하고
        result = i; //result엔 최빈값을 넣어야하기때문에 i를 줬어요
        num = 0; //이건 최빈값이 여러개 일때를 위해서 사용한 변수인데 else if문에서 마저 설명
    }
		/*최빈값이 여러개라는 뜻은 arr배열의 값이 같다는 것이므로 같을때는 새로운 변수 num이 1씩
		증가되도록 해주었어요! 그래서 만약에 값이 2인값이 계속 되다가 3이 나오면 위의 if문을
	  실행되고 num을 다시 0으로 만들어주어야지 밑에 if문에 걸리지 않을수 있습니다.*/
    else if(max === arr[i]){
        num += 1;
    }
}
// num이 1보다 크다면 = 최빈값이 여러개라면 
if(num >= 1) result = -1

return result;

}

> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
