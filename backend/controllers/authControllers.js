const {validationResult} =  require('express-validator');
const bcrypt = require('bcrypt');
const loginModele = require('../models/loginModel');

exports.login = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return
    const email = req.body.email;
    const password = req.body.password;
    try{
    const hashedPassword = await bcrypt.hash(password, 12)

    const userDetails = {
        email: email,
        password: hashedPassword
    }

    const result = await loginModele.save(userDetails);
    res.status(201).json({message: 'user connected successfully'});
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        };
        next(err);
    };
}

