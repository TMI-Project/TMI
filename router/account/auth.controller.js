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
        maxAge: 1000 * 60 * 60 * 24 * 7
    });
    
    res.cookie('login', 'succes', {maxAge: 1000 * 60 * 60 * 24 * 7});

    res.redirect('/');
};
