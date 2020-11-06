var socket = io()

/* 접속 되었을 때 실행 */
socket.on('connect', function () {
  /* 이름을 입력받고 */
  var name = prompt('반갑습니다!', '');

  /* 이름이 빈칸인 경우 */
  if (!name) { name = '익명'; }

  /* 서버에 새로운 유저가 왔다고 알림 */
  socket.emit('newUser', name);

});

/* 서버로부터 데이터 받은 경우 */
socket.on('update', function (data) {
  console.log(data)
  var chat = document.getElementById('chat')

  var message = document.createElement('div');
  var time = document.createElement('p');
  var node = document.createTextNode(`${data.name}: ${data.message}`);
  var data_time = `${data.time}`;
  var exsecn = data_time.split(",");
  console.log(exsecn);
  var tnode = document.createTextNode(exsecn[0] + "시 " + exsecn[1] + "분");
  var className = '';

  // 타입에 따라 적용할 클래스를 다르게 지정
  switch (data.type) {
    case 'message':
      className = 'other';
      break;

    case 'connect':
      className = 'connect';
      break;

    case 'disconnect':
      className = 'disconnect';
      break;
  }

  message.classList.add(className);
  time.appendChild(tnode);
  chat.appendChild(time);
  message.appendChild(node);
  chat.appendChild(message);
})

function enterkey() {
  if (window.event.keyCode == 13 && document.getElementById('input').value != '') {
    send();
  }
}

function send() {
  // 입력되어있는 데이터 가져오기
  var message = document.getElementById('input').value;

  // 가져왔으니 데이터 빈칸으로 변경
  document.getElementById('input').value = '';

  //챗을 지정함
  var chat = document.getElementById('chat');

  //현재 시간 표시
  let today = new Date();
  var time = document.createElement('p');
  var exsecn = today.toLocaleTimeString().split(':');
  var tnode = document.createTextNode(exsecn[0] + "시 " + exsecn[1] + "분");

  time.classList.add('time');
  time.appendChild(tnode);
  chat.appendChild(time);

  // 내가 전송할 메시지 클라이언트에게 표시
  var msg = document.createElement('div');
  var node = document.createTextNode(message);

  msg.classList.add('me');
  msg.appendChild(node);
  chat.appendChild(msg);

  // 프로필 사진 표시
  const image = new Image();
  image.classList.add('prf');
  image.src = '/images/icon/profile.png';
  image.alt = "프로필";
  chat.appendChild(image);

  //서버로 message, time 이벤트 전달 + 데이터와 함께
  socket.emit('message', { type: 'message', message: message, time: exsecn })
}