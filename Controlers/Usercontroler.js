// 1 import userschema or model
const users = require('../Models/Userschema');

// import jwt
   const jwt = require('jsonwebtoken')

// register logics 
exports.register = async (req, res) => { // Corrected order of parameters (req, res) otherwise it will generate error
    console.log("inside register method");
    // accept data from client
    const { username, email, password } = req.body;
    console.log(username, email, password);
    try {
        // check if the email is already registered
        
        const existingUser = await users.findOne({ email: email });
        if (existingUser) {
           
            // return res.status(406).json({ message: "Email already registered" });
            res.status(406).json("user already exists"); // Changed message for clarity
        } else {
            // Proceed with registration logic here
            // For now, sending a success message
            const newuser = new users({
                username,
                email,
                password,
                github: "",
                livelink: "",
                profile: ""
            });
            await newuser.save();
            res.status(200).json(newuser);
        }
    } catch (err) {
        res.status(500).json("Register failed");
    }
};


 // LOGIN CODE 


exports.login = async (req, res) => {
    // Accept data from client
    const { email, password } = req.body;
    try {
        // Check if email and password match an existing user
        const existingUser = await users.findOne({ email, password });
        if (existingUser) {
            const token=jwt.sign({userId:existingUser._id},"super2024") // to pass token 
            console.log(token);
            res.status(200).json({existingUser,token});
        } else {
            res.status(404).json("Invalid email or password");
        }
    } catch (err) {
        res.status(500).json("Login failed: " + err);
    }
};

