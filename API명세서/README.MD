# API 명세서

### 회원가입
```
POST /account/register
```
- Request
```
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
```
SUCCESS {"code": 200, message: "Succes"}
```
```
FAIL {"code": 500, message: error message}
```