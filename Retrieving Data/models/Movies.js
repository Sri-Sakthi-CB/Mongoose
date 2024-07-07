import mongoose from "mongoose";

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


const singleDoc = async () => {
        try{
            // Creating new Document

            // const result = await movieModel.find(); //All Data
            
            // const result = await movieModel.findById('668a696f5ba2f315fdc561c0', "name"); 

            // const result = await movieModel.find().limit(3);

            // const result = await movieModel.find().skip(5);
            // const result = await movieModel.find().countDocuments();
            // const result = await movieModel.find().sort({ name: -1 });
            // const result = await movieModel.find({ money: {$gt: 60000}});

            // const result = await movieModel.find({money: {$ne: 60000}});

            const result = await movieModel.find({ $and: [{money: 75000, ratings: 8}],
            });


            console.log(result);
            // console.log(result.name);
            // console.log(result.ratings);
            // console.log(result.comments);


            // Iterating Over
            // result.forEach((movie) => {
            //     console.log(movie.name);
            // });
        }
        catch(error){
            console.log(error);
        }
    }
export { singleDoc };