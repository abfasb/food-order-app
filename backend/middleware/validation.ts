import { Request, Response } from "express";;
import { body, validationResult } from 'express-validator';

const ValidatoryRequest = (req: Request, res: Response) => {
    const getValidate = validationResult(req);

    if(!getValidate) {
        
    }
}

export const validatorRequest = [
    body("name").isString().notEmpty().withMessage("Name is required"),
    body("addressLine1").isString().notEmpty().withMessage("Address is required"),
    body("city").isString().notEmpty().withMessage("City is required"),
    body("country").isString().notEmpty().withMessage("Country is required"),
];

