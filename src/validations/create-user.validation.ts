import {check} from 'express-validator';

export const create_user_validation = ()=>{
    return[
        check("x").exists().withMessage("name is required").isLength({min:4,max:40}).withMessage("name shoold be between 5 and 40 char"),
        check("email").isEmail().withMessage("input not email"),
        check("age").isNumeric().withMessage("age shoold be number")
    ];
}