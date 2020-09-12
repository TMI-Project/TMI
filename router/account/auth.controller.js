const Joi = require('joi');
const Account = require('../../models/account');

exports.localRegister = async (req, res) => {
    console.log(req.body);

    const schema = Joi.object()
        .keys({
            Name: Joi.string().required(),
            email: Joi.string().email().required(),
            ID: Joi.string().required(),
            password: Joi.string().min(6).required(),
        })
        .unknown();

    const result = schema.validate(req.body);
    const { password, Rpassword } = req.body;

    if (result.error) {
        console.log(res.body);
        return res.status(400).json({
            error: '이메일 양식을 맞춰주시고, 비밀번호는 최소 6글자입니다.',
        });
    }

    if (password !== Rpassword) {
        return res.status(400).json({
            error: '비밀번호와 재확인 비밀번호가 동일하지않습니다.',
        });
    }

    const existing = await Account.findByEmailOrID(req.body);
    if (existing) {
        return res.status(409).json({
            key: existing.email === req.body.email ? 'email' : 'ID',
        });
    }

    const account = await Account.localRegister(req.body);
    const token = await account.generateToken();
    res.cookie('access_token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    res.redirect('/');
};
exports.localLogin = async (req, res) => {
    // 데이터 검증
    const schema = Joi.object()
    .keys({
        ID: Joi.string().required(),
        password: Joi.string().required()
    });
    const result = schema.validate(req.body);

    if(result.error) {
        res.status = 400; //Bad Request
        return;
    }

    const { ID, password } = req.body;
    
    const account = await Account.findByEmailOrID(req.body);
    console.log(typeof(account));

    if(!account || !account.validatePassword(password)){
        //유저가 존재하지 않거나 || 비밀번호가 일치하지 않으면
        return res.status(403).json({
            error: '아이디가 틀렸거나, 비밀번호가 일치하지 않습니다.',
        });
    }

    let token = null;
    try {
        token = await account.generateToken();
    } catch (e) {
        res.status(403).json({
            error: e
        });
    }
    res.cookie('access_token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7 });

    res.cookie('login', 'succes', {maxAge: 1000 * 60 * 60 * 24 * 7});
    res.redirect('/');
};