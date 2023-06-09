const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, default: mongoose.Types.ObjectId() },
  layout_id: Number,
  name: String,
  msg: String,
  img_file: String,
  email: String,
});


const bookSchema = new Schema(
  {
    doc: {
      front: String,
      back: String,
    },
    rec_name: String,
    userID: { type: Schema.Types.ObjectId, ref: 'User' },
    messages: {
      type: Map,
      of: messageSchema,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
  