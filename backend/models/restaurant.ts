const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        default: () => new mongoose.Schema.ObjectId 
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

//user, restaurantName, city, country, deliveryPrice, estimatedDeliveryTime, cuisines, menuItems, imageUrl, lastUpdated
//menuItemSchema (_id, name: price)

const RestaurantSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    restaurantName: {
        type: String,
        required: true
    },
    city: {
        type: String, 
        required: true
    },
    country: {
        type: String,
        required: true
    },
    deliveryPrice: {
        type: Number,
        required: true
    },
    estimatedDeliveryTime: {
        type: Number,
        required: true
    },
    cuisines: [{type: String, require: true}],
    menuItems: [menuItemSchema],
    imageUrl: {
        type: String, 
        required: true
    },
    lastUpdated: {
        type: Date,
        required: true
    }
})

const Restaurant = new mongoose.model("Restaurant", RestaurantSchema);
export default Restaurant;