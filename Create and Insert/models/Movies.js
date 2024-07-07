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
// const createDoc = async () => {
//     try{
//         // Creating new Document
//         const m1 = new movieModel({
//             name: "Extraction 2",
//             ratings: 8,
//             money: 60000,
//             genre: ['action', 'adventure'],
//             isActive: true,
//             comments: [{ value: "Amazing Movie."}]
//         })
//         const result = await m1.save();
//         console.log(result);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

const insertManyDoc = async () => {
        try{
            // Creating new Document
            const m1 = new movieModel({
                name: "Extraction 2",
                ratings: 8,
                money: 60000,
                genre: ['action', 'adventure'],
                isActive: true,
                comments: [{ value: "Amazing Movie."}]
            })
            
            const m2 = new movieModel({
                name: "5 Feet Apart",
                ratings: 8,
                money: 75000,
                genre: ['Romance', 'Fiction'],
                isActive: true,
                comments: [{ value: "Beautiful and Good Movie."}]
            })
            const m3 = new movieModel({
                name: "Soorarai Potru",
                ratings: 7,
                money: 70000,
                genre: ['action', 'Commercial'],
                isActive: true,
                comments: [{ value: "Movie Based on True Story."}]
            })
            const m4 = new movieModel({
                name: "Ok Kanmani",
                ratings: 9,
                money: 80000,
                genre: ['Romance'],
                isActive: true,
                comments: [{ value: "Amazing and Beautifully created Movie."}]
            })
            const m5 = new movieModel({
                name: "Avengers",
                ratings: 5,
                money: 30000,
                genre: ['action', 'adventure'],
                isActive: true,
                comments: [{ value: "Sci-Fi Movie."}]
            });

            const result = await movieModel.insertMany([m1, m2, m3, m4, m5]);
            console.log(result);
        }
        catch(error){
            console.log(error);
        }
    }
export { insertManyDoc };