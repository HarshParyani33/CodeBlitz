import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        required: true,
    },
    constraints: {
        type: String,
        required: true,
    },
    inputFormat: {
        type: String,
        
    },
    outputFormat: {
        type: String,
        
    },
    sampleInput: {
        type: String,
        
    },
    sampleOutput: {
        type: String,
        
    },
    HiddenTestCases: {
        type: [String],
        required: true,
    },
    codeTemplates: {
        type: Map,
        of: String, // Key: language (e.g., 'python', 'javascript'), Value: template
        required: true,
    },
    testCases: [
        {
            input: { type: String, required: true },
            output: { type: String, required: true },
            isHidden: { type: Boolean, default: false }, // Public or hidden
        },
    ],
    timeLimit: {
        type: Number, // in milliseconds
        required: true,
    },
    memoryLimit: {
        type: Number, // in megabytes
        required: true,
    },
    
},{timestamps:true});

export const Question = mongoose.model('Question', questionSchema);