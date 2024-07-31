const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    auth0Id: {
        type: String,
        require: true
    },
    email: {
        type:String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    addressLine1: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    }
})

const User = mongoose.model("User", userSchema);

export default User;

//auth0Id, email, name, addressLine1, city, country
