import { Request, Response } from "express";
import Restaurant from "../models/restaurant";
import { Result } from "express-validator";
import cloudinary from 'cloudinary';
import mongoose from "mongoose";
const express = require('express');

const createCurrentUser = async(req : Request, res : Response) => {
    try {
    const findRestaurant = await Restaurant.findOne({ user: req.userId});

    if (!findRestaurant) {
        return res.status(409).json({ message: "Restaurant already exists"});
    }
    const imageUrl = UploadImage(req.file as Express.Multer.File)
    const restaurant = new Restaurant(req.body);
    restaurant.image = imageUrl;
    restaurant.user = new mongoose.Types.ObjectId(req.userId);
    restaurant.lastUpdated = new Date();

    await restaurant.save();

    res.status(201).send(restaurant);
} catch(error) {
    res.status(500).send(error);
}
}

const updateCurrentUser = async(req: Request, res : Response) => {
    
    try {
        const restaurant = await Restaurant.findOne({ user: req.userId });

        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not Found"})
        }

        restaurant.restaurantName = req.body.restaurantName;
        restaurant.city = req.body.city;
        restaurant.country = req.body.country;
        restaurant.deliveryPrice = req.body.deliveryPrice;
        restaurant.estimtedDeliveryTime = req.body.estimtedDeliveryTime;
        restaurant.cuisines = req.body.cuisines;
        restaurant.menuItems = req.body.menuItems;
        restaurant.lastUpdated = new Date();

        if (req.file) {
            const imageUrl = UploadImage(req.file as Express.Multer.File);
            restaurant.image = imageUrl
        }

        await restaurant.save;
        res.status(200).send(restaurant);

    }catch(error) {
        res.status(500).send(error)
    }
}

const getCurrentUser = async(req : Request, res : Response) => {
    try {
    const getCurUser = await Restaurant.findOne({ user: req.userId});

    if(!getCurUser) {
       return res.status(404).json({ message: "Restaurant not Found"});
    }
    res.json(getCurUser);

    } catch(error) {
        res.status(500).send(error);
    }
}

const UploadImage = async(file: Express.Multer.File) => {

    const image = file;
    const base64Image = Buffer.from(image.buffer).toString("base64");
    const dataURI = `data:${image.mimetype};base64,${base64Image}`;
  
    const uploadResponse = await cloudinary.v2.uploader.upload(dataURI);
    return uploadResponse.url;
}

export default {
    createCurrentUser,
    updateCurrentUser,
    getCurrentUser
}
