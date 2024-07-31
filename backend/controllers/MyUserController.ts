import User from '../models/user';
import { Request, Response } from 'express';

const createUser = async(req: Request, res: Response) => {
    try {
        const { auth0Id } = req.body;
    const currentUser = await User.findOne(auth0Id);

    if (currentUser) {
        return res.status(200)
    }

    const newUser = new User(req.body);

    await newUser.save

    res.status(201).send(newUser.toObject())

    }
    catch (error) {
        res.status(500).send({error: "Something went wrong"});
    }
}

const getUser = async (req: Request, res: Response) => {

    try {
        const { userId } = req.body
        const getUser = await User.findOne({ _id: userId });
        if (!getUser) {
            return res.status(404).send({ message: "User not Found"});
        }
        res.status(200).send(getUser);
    }
    catch (error) {
        res.status(500).send({message: "Can't get anything"})
    }
}

const updateUser = async (req: Request, res: Response) {
//name, addressLine1, city, country
    try {
        const { name, addressLine1, city, country } = req.body;
        const user = await User.findById(req.userId);

        if (!user) {
            res.status(404).send({message: "User not found."});
        }

        user.name = name;
        user.addressLine1 = addressLine1;
        user.city = city;
        user.country = country;

        await user.save();

        res.status(200).send(user);
        
    }
    catch(error) {
        res.status(500).send(error);
    }
}

export default { createUser, getUser, updateUser }