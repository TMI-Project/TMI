
var currentTitle = document.getElementById('current-year-month'); //무슨 변수지..
var calendarBody = document.getElementById('calendar-body'); //무슨 변수지222
var today = new Date(); //오늘 날짜
var date = new Date(); //today의 날짜를 세주는 역할
var monthFirst = new Date(today.getFullYear(), today.getMonth(), 1); //이번 달의 1day
var dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; //요일
var monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December']; //달        var leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] //윤년 달의 마지막일수
var leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] //윤년인 달의 마지막일수
var notleapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] //윤년이 아닌 달의 마지막일수
var pageFirst = monthFirst; //??
var pageYear; //윤년 체크를 하고 결과(배열)를 담는 역할
if (monthFirst.getFullYear() % 4 === 0) {
    pageYear = leapYear;
} else {
    pageYear = notleapYear;
}
function showCalendar() { //현재 달
    let monthCnt = 100; //왜 100을 준거지...
    let cnt = 1; //day 숫자
    //Calendarmonth.innerHTML = (today.getMonth()+1)+"월";
    for (var i = 0; i < 6; i++) { //week만들기
        var $tr = document.createElement('tr'); //줄바꿈 요소 생성
        $tr.setAttribute('id', monthCnt); //???
        for (var j = 0; j < 7; j++) { //day만들기
            if ((i === 0 && j < monthFirst.getDay()) || cnt > pageYear[monthFirst.getMonth()]) { 
                //첫번째 주에서 시작하는 요일부터 날짜 출력 || 달력 출력 종료 조건
                var $td = document.createElement('td');
                $tr.appendChild($td);
            } else {
                var $td = document.createElement('td');
                $td.textContent = cnt;
                $td.setAttribute('id', cnt);
                $tr.appendChild($td);
                cnt++;
            }
        }
        monthCnt++;
        calendarBody.appendChild($tr);
    }
}
showCalendar();
function removeCalendar() { //달력 업데이트라는데...
    let catchTr = 100; //이건 또 뭘까
    for (var i = 100; i < 106; i++) {
        var $tr = document.getElementById(catchTr);
        $tr.remove();
        catchTr++;
    }
}
function prevCalendar() { //이전 달
    today = new Date(today.getFullYear(), today.getMonth()-1, today.getDate());
    showCalendar(); //달력 cell을 만들고 출력
}
function nextCalendar() { //다음 달
    today = new Date(today.getFullYear(), today.getMonth()+1, today.getDate());
    showCalendar(); //달력 cell을 만들고 출력
}