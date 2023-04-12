const UserModel = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');



const registerUser = async(request, response) => {
    const newUser = request.body;
    const encryptedPassword = await bcrypt.hash(newUser.password, 10);

try{

    let user = new UserModel({
        name: newUser.name,
        email: newUser.email,
        password: encryptedPassword
    });
    await user.save();
    return response.status(201).json({
        message: "User successfully registered!"
    })

    }catch(error){
        return response.status(500).json({
            message: "There was an error",
            error
        })
    }
}


const loginUser = async (request, response) => {
    
    const incomingCredentials = request.body;

    let foundUser = await UserModel.findOne({
        email: incomingCredentials.email
    });

    if(foundUser) {
        const matchingPassword = await bcrypt.compare(incomingCredentials.password, foundUser.password);

        if(matchingPassword){
            const accessToken = jwt.sign({
                email: foundUser.email,
                name: foundUser.name
            }, process.env.SECRETKEY)

            return response.status(200).json({
                message: `Hi! ${foundUser.name} You successfully logged in`,
                token: accessToken
            })
        } else {
            return response.status(401).json({
                message: `Password is invalid, Please try again`
            })
        }
    }else {
        return response.status(404).json({
            message: "User does not exist!!"
        })
    }
    
}



const updateUser = async(request, response) => {
    const id = request.params.id;
    const incomingData = request.body
    
    try{

        let userData = await UserModel.findByIdAndUpdate(id, incomingData, {returnOriginal: false});

        return response.status(200).json({
            message: `Successfully updated the user!`,
            data: userData
        })
    }catch(error){
        return response.status(500).json({
            message: `There was an error`
        })
    }
}


const deleteUser = async(request, response) => {
    const id = request.parms.id;

    try{

        let userData = await UserModel.findByIdAndDelete(id);

        return response.status(200).json({
            message:   `Successfully deleted the user`
        })

    }catch(error){
        return response.status(500).json({
            message: `There was an error`,
            error
        })
    }
}


const getUserById = async(request, response) => {
    const id = request.params.id;
    try {

        let userData = await UserModel.findById(id);
        
        return response.status(200).json({
            message: `Successfully fetched the user ${userData.name}`,
            data: userData
        })

    } catch(error){
        return response.status(500).json({
            message: `There was an error`,
            error
        })
    }

}


const getAllUsers = async (request, response) => {
    
    try {

        let data = await UserModel.find();

        return response.status(200).json({
            message: "Successfully fetched the users!",
            data
        })

    }catch(error){
        return response.status(500).json({
            message: "There was an error",
            error
        })
    }
}


module.exports = {
    loginUser,
    registerUser,
    deleteUser,
    updateUser,
    getAllUsers,
    getUserById
}