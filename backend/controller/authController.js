import User from "../models/User.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        User.findOne({ username: req.body.username})
            .then(async (user) => {
                if (!user) {
                    const password = await bcryptjs.hash(req.body.password, 10);
                    const newUser = new User({
                        username: req.body.username,
                        email: req.body.email,
                        password: password
                    });
                    const user = await newUser.save();
                    return res.status(201).json({
                        success: true,
                        message: "User created successfully",
                        data: user
                    })
                }
                if (user) {
                    return res.status(401).json({
                        success: false,
                        message: "Username already exists"
                    })
                }
            })

    } catch (err) {
        console.error("Error during registration:", err);
        res.status(400).json({ message: "Some error occurred" });
    }
}
export const login = async (req, res) => {
    const {username,password}=req.body;
    try{
        User.findOne({username:username})
        .then(async(user)=>{
            if(!user){
                return res.status(400).json({
                    success:false,
                    message:"User not found"
                })
            }
            const isMatch=await bcryptjs.compare(password,user.password);
            if(!isMatch){
                return res.status(400).json({
                    success:false,
                    message:"Invalid credentials"
                })
            }
            const token=jwt.sign({
                userId:user._id,
                username:user.username
            },process.env.JWT_SECRET,{expiresIn:"1d"});
            return res.status(200).json({
                success:true,
                message:"Logged in successfully",
                token:token
            })
        })     
    }
    catch(err){
        console.error("Error during login:", err);
        res.status(400).json({ message: err.message });
    }
}
// export const login = async (req, res) => {
//     try {
//         const user = req.body.email;
//         User.findOne({ email: user})
//             .then((user) => {
//                 if (!user) {
//                     return res.status(400).json({
//                         success: false,
//                         message: "User not found"
//                     })
//                 }
//                 bcryptjs.compare(req.body.password, user.password)
//                     .then((isMatch) => {
//                         if (!isMatch) {
//                             return res.status(400).json({
//                                 success: false,
//                                 message: "Invalid credentials"
//                             })
//                         }
//                         const token = jwt.sign({
//                             userId: user._id,
//                             email: user.email,
//                         }, process.env.JWT_SECRET, { expiresIn: "1d" });
//                         return res.status(200).json({
//                             success: true,
//                             message: "Logged in successfully",
//                             token: token
//                         })
//                     })
//                     .catch((err) => {
//                         console.error("Error during login:", err.message);
//                         res.status(400).json({ message: err.message });
//                     })
//             })
//             .catch((err) => {
//                 console.error("Error during login:", err);
//                 res.status(400).json({ message: err.message });
//             })
//     }
//     catch (err) {
//         console.error("Error during login:", err);
//         res.status(400).json({ message: err.message });
//     }
// }