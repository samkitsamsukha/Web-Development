import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            uniques: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: true,
            uniques: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        }
    }, 
    {timestamps: true}
);

export const User = mongoose.model('User', UserSchema);