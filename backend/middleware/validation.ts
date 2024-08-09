import { error } from "console";
import { Request, Response, NextFunction } from "express";;
import { body, validationResult } from 'express-validator';

export const validateMyRequest = (req: Request, res: Response, next : NextFunction) => {
    const getValidate = validationResult(req);

    if(!getValidate.isEmpty()) {
        return res.status(400).json( {errors: getValidate.array()})
    }
    next();
}


export const validatorRequest = [
    body("name").isString().notEmpty().withMessage("Name is required"),
    body("addressLine1").isString().notEmpty().withMessage("Address is required"),
    body("city").isString().notEmpty().withMessage("City is required"),
    body("country").isString().notEmpty().withMessage("Country is required"),
];

export const validateMyRestaurantRequest = [
    body("restaurantName").notEmpty().withMessage("Restaurant name is required"),
    body("city").notEmpty().withMessage("City is required"),
    body("country").notEmpty().withMessage("Country is required"),
    body("deliveryPrice")
      .isFloat({ min: 0 })
      .withMessage("Delivery price must be a positive number"),
    body("estimatedDeliveryTime")
      .isInt({ min: 0 })
      .withMessage("Estimated delivery time must be a postivie integar"),
    body("cuisines")
      .isArray()
      .withMessage("Cuisines must be an array")
      .not()
      .isEmpty()
      .withMessage("Cuisines array cannot be empty"),
    body("menuItems").isArray().withMessage("Menu items must be an array"),
    body("menuItems.*.name").notEmpty().withMessage("Menu item name is required"),
    body("menuItems.*.price")
      .isFloat({ min: 0 })
      .withMessage("Menu item price is required and must be a postive number"),
    validateMyRequest,
]

