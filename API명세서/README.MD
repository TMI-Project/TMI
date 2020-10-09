<!-- @format -->

# API 명세서

## 회원가입과 로그인

### 회원가입

```txt
POST /account/register
```

- Request

```txt
{
    필수요소
    Name : String,
    email : String,
    ID: String,
    password: String,

    선택요소
    nickname: String,
    gender: String,
    Byear: Number, Bmonth: Number, Bday: Number,
    agency: String,
}
```

- Response

```txt
SUCCESS {"code": 200, message: "Succes"}
```

```txt
FAIL {"code": 400, message: "이메일 양식을 맞춰주시고, 비밀번호는 최소 6글자입니다."}
FAIL {"code": 400, message: "비밀번호와 재확인 비밀번호가 동일하지않습니다."}
FAIL {"code": 500, message: "error mesage"}
FAIL {"code": 500, message: "Cookie seeting error"}
```

### 로그인

```txt
POST /account/login
```

- Request

```txt
{
    ID: String,
    password: String
}
```

- Response

```txt
SUCCESS {"Succes":쿠키 발급}
```

```txt
FAIL {"code": 403, message: "아이디, 또는 비밀번호가 틀렸습니다."}
```
