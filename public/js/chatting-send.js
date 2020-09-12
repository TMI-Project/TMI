function enterkey() {
    if (window.event.keyCode == 13) {
         send();
   }
}

function send() {
      // 입력되어있는 데이터 가져오기
      var message = document.getElementById('input').value
  
      // 가져왔으니 데이터 빈칸으로 변경
      document.getElementById('input').value = ''
    
      //챗을 지정함
      var chat = document.getElementById('chat')
    
      //현재 시간 표시
      let today = new Date();
      var time = document.createElement('p')
      var exsecn = today.toLocaleTimeString().split(':')
      var tnode = document.createTextNode(exsecn[0]+"시 "+exsecn[1]+"분")
    
      time.classList.add('time')
      time.appendChild(tnode)
      chat.appendChild(time)
    
      // 내가 전송할 메시지 클라이언트에게 표시
      var msg = document.createElement('div')
      var node = document.createTextNode(message)
    
      msg.classList.add('me')
      msg.appendChild(node)
      chat.appendChild(msg)
    
      // 프로필 사진 표시
      const image = new Image();
      image.classList.add('prf')
      image.src = '/images/icon/profile.png'
      image.alt = "프로필"
      chat.appendChild(image)

      
}