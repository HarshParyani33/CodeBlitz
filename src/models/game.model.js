import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
    user1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    user2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        
    },
    status: {
        type: String,
        enum: ['waiting', 'in-progress', 'completed'],
        default: 'waiting',
    },
    score: {
        user1: {
            type: Number,
            default: 0,
        },
        user2: {
            type: Number,
            default: 0,
        },
    },
    winner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    startTime: {
        type: Date,
        default: Date.now,
    },
    ratingChange: {
        type: Number,
        default: 0,
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true,
    },
},{ timestamps: true });

export const Game = mongoose.model('Game', gameSchema);

