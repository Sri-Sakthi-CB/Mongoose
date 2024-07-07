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
            // UpdateOne(filter, whatToChnage? )
            
            // const result = await movieModel.updateMany({ratings: 5 }, {name: "Avengers"});

            const result = await movieModel.updateOne({_id: id}, {name: "Sri Sakthi Fav Movie"})

            console.log(result);
            
        }
        catch(error){
            console.log(error);
        }
    }
export { updateMany };