import User from '../models/user';
import { Request, Response } from 'express';


const createCurrentUser = async(req: Request, res: Response) => {
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

const getCurrentUser = async (req: Request, res: Response) => {

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

const updateCurrentUser = async(req : Request, res : Response) => {
    try {
        const user = await User.findById(req.userId);
        const { name, addressLine1, country, city } = req.body;

        if (!user) {
            res.status(404).json({ message: "User not found"}
            )
        }
        user.name = name;
        user.addressLine1 = addressLine1;
        user.country = country;
        user.city = city;

        await user.save();
        
        res.send(user);
    //name, addressLine1, country, city

    } catch(error) {
        res.send(500).send(error)
    }
}

export default { createCurrentUser, getCurrentUser, updateCurrentUser }