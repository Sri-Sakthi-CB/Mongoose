// Inserting Document To DataBase


// Define a schema for a "user" collection
const userSchema = new mongoose.Schema({ name: String });


// Create a model for the "user" collection using the schema
const User = mongoose.model("User", userSchema);


// Create a new instance of the User model with the data you want to store in the document
const newUser = new User({ name: "John Doe" });


// Save the new user document to the database using the save() method
newUser.save((err) => (err ? console.log(err): console.log("User Saved")));
