import { Request, Response } from "express";
import Restaurant from "../models/restaurant";
import { Result } from "express-validator";
import cloudinary from 'cloudinary';
import mongoose from "mongoose";
const express = require('express');

const createCurrentUser = async(req : Request, res : Response) => {
    const findRestaurant = await Restaurant.findOne({ user: req.userId});

    if (!findRestaurant) {
        return res.status(409).json({ message: "Restaurant already exists"});
    }

    const restaurant = new Restaurant(req.body);
    restaurant.image = imageUrl;
    restaurant.user = new mongoose.Types.ObjectId(req.userId);
    restaurant.lastUpdated = new Date();

    await restaurant.save();

    res.status(201).send(restaurant);
}

const updateCurrentUser = async() => {

}

const getCurrentUser = async() => {

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
