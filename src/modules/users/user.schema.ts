import mongoose, {Schema, model} from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})


export const UserModel = model('User', userSchema);

