import mongoose from "mongoose"; // Erase if already required

// Declare the Schema of the Mongo model
var bookSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      index: true,
      trim: true,
    },
    title: {
      type: String,
      index: true,
      trim: true,
    },
    publishYear: {
      type: Number,
      default: function () {
        return new Date().getFullYear();
      },
    },
  },
  { timestamps: true }
);

//Export the model
const bookModel = mongoose.model("Book", bookSchema);
export default bookModel;
