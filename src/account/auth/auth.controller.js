const Joi = requrie('joi');
const Account = requrie('models/Account');

exports.localRegister = async (ctx) => {
    const schema = Joi.object().keys({
        username: Joi.string().alphanum().min(4).max(15).required(),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(6)
    });

    const result = schema.validate(ctx.request.body);

    if(result.error){
        ctx.status = 400;
        return;
    }
    //TODO: 아이디 / 이메일 중복처리 구현

    let account = null;
    try {
        account = await Account.localRegister(ctx.request.body);
    } catch(e) {
        ctx.throw(500, e);
    }

    let token = null;
    try {
        token = await account.generateToken();
    } catch(e) {
        ctx.throw(500, e);
    }
    ctx.cookies.set('access_token', token, {httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7});
    ctx.body = account.profile;
    

}

//로컬 로그인
exports.localLogin = async (ctx) => {
    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });
    
    const result = schema.validate(ctx.request.body);

    if(result.error){
        ctx.status = 400;
        return;
    }

    const { email, password } = ctx.request.body;

    let account = null;

    try{
        account = await Account.findByEmail(email);
    } catch(e){
        ctx.throw(500, e);
    }


    if(!account || !account.validatePassword(password)){
        ctx.status = 403;
        return;
    }

    let token = null;
    try {
        token = await account.generateToken();
    } catch(e) {
        ctx.throw(500, e);
    }

    ctx.cookies.set('access_token', token, {httpOnly : true, maxAge: 1000 * 60 * 60 * 24 * 7})

    ctx.body = account.profile;
};