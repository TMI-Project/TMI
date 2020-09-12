const io = require('socket.io-client')

const socket = io({
  autoConnect: true
});

socket.on('disconnect', () => {
  socket.open();
  console.log("제발")
});

socket.open();

const socket = io("http://localhost/chatting:4000"); 
console.log(socket.id); 
socket.on("connection", () => { console.log("클라이언트 연결"); });
socket.on('connect_error', (error) => {
  console.log(err);
});
socket.on('error', (error) => {
  console.log(err)
});


/* 접속 되었을 때 실행 */
socket.on('connection', function() {
  /* 이름을 입력받고 */
  var name = prompt('반갑습니다!', '')

  /* 이름이 빈칸인 경우 */
  if(!name) {
    name = '익명'
  }

  /* 서버에 새로운 유저가 왔다고 알림 */
  socket.emit('newUser', name)
})

/* 서버로부터 데이터 받은 경우 */
socket.on('update', function(data) {
  var chat = document.getElementById('chat')

  var message = document.createElement('div')
  var node = document.createTextNode(`${data.name}: ${data.message}`)
  var className = ''

  // 타입에 따라 적용할 클래스를 다르게 지정
  switch(data.type) {
    case 'message':
      className = 'other'
      break

    case 'connect':
      className = 'connect'
      break

    case 'disconnect':
      className = 'disconnect'
      break
  }

  message.classList.add(className)
  message.appendChild(node)
  chat.appendChild(message)
})

//서버로 message, time 이벤트 전달 + 데이터와 함께
socket.emit('time', {type: 'time', time: time})
socket.emit('message', {type: 'message', message: message})