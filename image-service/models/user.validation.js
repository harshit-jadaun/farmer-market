import { body, validationResult } from "express-validator";

export const registerValidation = [

  body("name")
    .notEmpty()
    .withMessage("Name required"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password min 6"),

  body("mobile_no")
    .isLength({ min: 10, max: 10 })
    .withMessage("Mobile invalid"),

  body("role")
    .notEmpty()
    .withMessage("Role required"),

];


export const validate = (req, res, next) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {

    return res.status(400).json({

      errors: errors.array()

    });

  }

  next();

};