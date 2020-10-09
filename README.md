<!-- @format -->

# ICT Project - 대회 모음 웹사이트

## Commit Rule

```txt
[FIX] 버그 수정 시

[ADD] 코드 추가 시

[Update] 코드 변경 시

[Remove] 코드 삭제 시

[Create] 파일 생성 시

[Delete] 파일 삭제 시
```

**[깃 다루는 방법](./GitCommand.md)**

## 실행 방법

```txt
package.json
package.lock.json
yarn.lock
yarn-error.log
.env
node_module
```

<<<<<<< HEAD

```txt
1. 해당 파일들을 루트디렉토리에 올린다.
2. npm install yarn
3. yarn add nodemon
4. yarn start, yarn start:dev
=======
    1. gh repo clone iseolin76/TMI
    2. 눈치껏 .env파일을 생성하거나, 관계자들에게 구한다.
    3. npm install yarn
    4. npm install morgan
    4. yarn add nodemon
    5. yarn start, yarn start:dev
>>>>>>> 9035d9a53b03e5b573f04e2dbe00e7e3a144cff1
```

## INDEX

### 피드, 캘린더, 커뮤니티

```txt
<<<<<<< HEAD
각 피드, 캘린더, 커뮤니티 페이지로 이동한다.
각 peed/auth 등의 사이트에 들어가 로그인을 검증 후 각 페이지로 이동한다.
로그인시에만 사용 가능하다.
=======
    각 피드, 캘린더, 커뮤니티 페이지로 이동한다.
    각 peed/auth 등의 사이트에 들어가 로그인을 검증 후 각 페이지로 이동한다.
    로그인시에만 사용 가능하다.
>>>>>>> 9035d9a53b03e5b573f04e2dbe00e7e3a144cff1
```

#### Alarm

```txt
<<<<<<< HEAD
캘린더, 피드, 커뮤니티에서 활동을 핢으로써 생기는
각 활동들에 대한 알람을 여기에 표기한다. 로그인시에만 사용 가능하다.
=======
    캘린더, 피드, 커뮤니티에서 활동을 핢으로써 생기는
    각 활동들에 대한 알람을 여기에 표기한다, 로그인시에만 사용 가능하다.
>>>>>>> 9035d9a53b03e5b573f04e2dbe00e7e3a144cff1
```

### Chatting

```txt
해당 커뮤니티의 유저들과 대화를 할 수 있는 채팅으로 넘어가는 버튼.
로그인시에만 사용 가능하다.
```

### Notice

```txt
해당 사이트의 공지사항들을 볼 수 있도록 만든 버튼.
로그인시에만 사용이 가능하다.
```

### Search Box

```txt
왼쪽에서 대회부문, 또는 커뮤니티에 대해서 검색할것인지
검색 전 필터링이 가능하다.
```

### 로그인

```txt
    로그인을 하기 위해 눌러야 하는 버튼이며,
    해당 페이지로 넘어갈 경우 회원가입으로 가는 버튼을 확인할 수 있다.
```

### 카테고리 별 인기 게시물

```txt
로그인 전
    - 디폴트 인기 카테고리 3개

로그인 후
    - 디폴트 인기 카테고리 3개, 개인설정에서 변경 가능

    노출되는 게시물은 추천순이며, 추천은 한 계정으로 한 게시물에 한번밖에 못한다.
    만약 하루동안 올라온 게시물이 부족하다면, 그 전날의 게시물이라도 가져와 띄운다.
```

```txt
구조 : 커뮤니티 -> 카테고리 -> 게시판 -> 게시물

    카테고리 종류
        1. 자유 게시판
        2. 팁 게시판
        3. 구인 게시판
```

### 슬라이드 포스터

```text
슬라이드를 넘기면서 여러 대회 포스터들을 보여줌
```

```txt
위에서부터 신규, 아래로 갈수록 마감 임박
신규의 기준은 신청시작하는 날짜이며, 마감임박의 기준은 신청종료되는 날짜의 일주일전까지다.
슬라이드는 한칸에 최대 6개, 한 슬라이드 당 5초동안 머물 수 있다.
```

### 대회 안내 게시물

```txt
1. 설정 기준
    규모가 큰것부터, 또는 사용자가 관심설정한 내용

2. 비로그인 상태, 또는 미 설정시 추천순
    추천 광고 추천
```

## 회원가입

```txt
필수 정보
    1. 이름
    2. 이메일
    3. 아이디
    4. 비밀번호

선택
    1. 소속기관
    2. 생년원일

내 정보에서 다룰 정보들
    1. 닉네임
    2. 성별
<<<<<<< HEAD
    3. 나이
    4. 경력
    5. 전문분야(리스트 중 최대 3개 선택, 추후 자신의 프로필에 자기소개 작성 가능)
    6. 지역
    7. 직업
    8. 관심분야
=======


>>>>>>> 9035d9a53b03e5b573f04e2dbe00e7e3a144cff1
```

## 사용 프로그램

### 프론트엔드

```txt
EJS/CSS/JS
```

### 백엔드

#### 프레임워크

```txt
express.js
```

#### DBMS

```txt
MongoDB
```

</br>

### 기타

#### 버전관리

```txt
Github
```

#### 웹 호스팅

```txt
AWS
```

#### 직렬화 포맷

```txt
JSON
```
