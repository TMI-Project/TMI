const Joi = require('joi');
const Account = require('../../models/account');

exports.localRegister = async (req, res) => {
    console.log(req.body);
    const schema = Joi.object().keys({
        Name: Joi.string().required(),
        email: Joi.string().email().required(),
        ID: Joi.string().required(),
        password: Joi.string().min(6).required(),
    }).unknown();

    const result = schema.validate(req.body);

    if(result.error){
        res.status(400).json({ error: "이메일 양식을 맞춰주시고, 비밀번호는 최소 6글자입니다."})
        console.log(result.error);
        return;
    }else if(req.body.password === req.body.Rpassword){
        res.status(400).json({error: "비밀번호와 재확인 비밀번호가 동일하지않습니다."})
        res.redirect("/account/register");
    }
    //TODO: 아이디 / 이메일 중복처리 구현

    let account = null;
    try {
        account = await Account.localRegister(req.body);
    } catch(e) {
        res.status(500).json({ error: e.toString() });
    }


    let token = null;
    try {
        token = await account.generateToken();
        res.cookie('access_token', token, {httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7});
    } catch(e) {
        res.status(500).json({error: "Cookie seeting error"});
    }

     res.redirect('/');



}

// //로컬 로그인
// exports.localLogin = async (ctx) => {
//     const schema = Joi.object().keys({
//         email: Joi.string().email().required(),
//         password: Joi.string().required()
//     });
    
//     const result = schema.validate(ctx.request.body);

//     if(result.error){
//         ctx.status = 400;
//         return;
//     }

//     const { email, password } = ctx.request.body;

//     let account = null;

//     try{
//         account = await Account.findByEmail(email);
//     } catch(e){
//         ctx.throw(500, e);
//     }


//     if(!account || !account.validatePassword(password)){
//         ctx.status = 403;
//         return;
//     }

//     let token = null;
//     try {
//         token = await account.generateToken();
//     } catch(e) {
//         ctx.throw(500, e);
//     }

//     ctx.cookies.set('access_token', token, {httpOnly : true, maxAge: 1000 * 60 * 60 * 24 * 7})

//     ctx.body = account.profile;
// };