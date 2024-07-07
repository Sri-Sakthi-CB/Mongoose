import mongoose, { mongo } from "mongoose";

// Defining Schema
// const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    ratings: {type: Number, required: true, min: 1, max: 10},
    money: {
        type: mongoose.Decimal128,
        required: true,
        validate: v => v >= 10,
    },
    genre: {type: Array },
    isActive: { type: Boolean},
    comments: [
        {value: {type: String}, published: {type: Date, default: Date.now}},
    ],
})


// Creating Model
const movieModel = mongoose.model("Movie", movieSchema);


// Creating New Document
const updateMany = async (id) => {
        try{
            

            // const result = await movieModel.findByIdAndDelete({_id: id});

            // const result = await movieModel.deleteOne({name: "Extraction 2"});

            const result = await movieModel.deleteMany({money: 60000});

            console.log(result);
            
        }
        catch(error){
            console.log(error);
        }
    }
export { updateMany };