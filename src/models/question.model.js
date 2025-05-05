import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({},{ timestamps: true });

const Question = mongoose.model('Question', questionSchema);