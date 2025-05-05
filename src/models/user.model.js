import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    avatar: {
        type: String,
    },
    bio: {
        type: String,
    },
    gameHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Game",
        }
    ],
    rating: {
        type: Number,
        default: 0,
    },
    github: {
        type: String,
    },

},{timestamps:true});

const User = mongoose.model("User", userSchema);