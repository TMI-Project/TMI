const Joi = require('joi');
const Account = require('../../models/account');
const { createIndexes } = require('../../models/account');

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

    }else if(req.body.password !== req.body.Rpassword){
        res.status(400).json({error: "비밀번호와 재확인 비밀번호가 동일하지않습니다."})
        res.redirect("/account/register");
    }

    let existing = null;
    try {
        existing = Account.findByEmailOrID(req.body);
    }catch(e){
        res.status(500).json({ error : e.toString() });
        return;
    }

    if(existing.email || existing.ID){
        res.status(409).json({key : existing.email === req.body.email ? 'email' : 'ID'});
        return;
    }
    
    let account = null;
    try {
        account = await Account.localRegister(req.body);
    } catch(e) {
        res.status(500).json({ error: e.toString() , code : "회원가입코드"});
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
