import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      reguired: true,
    },
    caption: {
      type: String,
      reguired: true,
    },
    image: {
      type: String,
      reguired: true,
    },
    rating: {
      type: Number,
      reguired: true,
      min: 1,
      max: 5,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;