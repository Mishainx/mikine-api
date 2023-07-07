import userModel from "../models/user.model";

export default class UserManager{
    constructor(){}

    get = async()=>{
        try{
            return await userModel.find().lean();
        }
        catch (err) {
            throw err;
        }
    }

    getId = async(userId)=>{
        try {
            const selectedUser = await userModel.findById(userId)
            return selectedUser
        }
        catch (err) {
            throw err;
        }
    }

    getOne = async(prop)=>{
        try {
            const selectedUser = await userModel.findOne(prop)
            return selectedUser
        }
        catch (err) {
            throw err;
        }
    }
    
    create = async(user)=>{
        try{
            const newUser = new userModel(user);
            await newUser.save();
            return newUser;
        }
        catch (err) {
            throw err;
        }   
    } 
    
    delete = async(userId)=>{
        try {
            const result = await userModel.findByIdAndDelete(userId);
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    updateProperty = async(id,property)=>{
        try {
            let result = await userModel.findByIdAndUpdate({_id:id},property)
            return result
        }
        catch (err) {
            throw err;
        }
    }
}