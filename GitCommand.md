# Git 명령어! 이것만 알면된다!

## Git config
1. 닉네임 세팅
``` txt
    git config --global user.name (자신의 닉네임을 넣어주세요)
```

2. 이메일 세팅
``` txt
    git config --global user.email (자신의 이메일을 입력해주세요)
```

## Git 연동하기

1. 깃 파일 생성
```txt
    자신의 최상위 디렉터리에서 git init명령어를 입력해주세요.
```

2. 깃헙 주소랑 연동하기
```txt
    git remote add origin (연동할 깃헙 주소)
```

## Git 파일 풀, 커밋, 푸쉬

1. Pull
```txt
    이는 깃헙에 저장되어있는 파일을 자신의 컴퓨터로 불러들이는 명령어입니다.
    다른 사람이 작업한 결과물을 자신의 컴퓨터로 가져오는 행위이죠
    git pull origin master
```

2. add
``` txt
    자신이 커밋할 파일을 선택하는 행동입니다.
    이 두 명령어 모두 파일을 모두 선택하는 명령어입니다.

        git add .
        git add -A
```

3. commit
``` txt
    커밋을 진행함과 동시에 커밋메세지를 남기는 명령어입니다.

    git commit -m "남길 메세지"
```

예시
```txt
    git commit -m "[ADD] TMI logo"
```

4. push
```txt
    커밋을 한 파일들을 저장소에다가 올리는 행동입니다.
    git push origin master
```
