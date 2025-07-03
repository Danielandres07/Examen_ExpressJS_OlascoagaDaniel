import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    maxlength: 10,
    trim: true
  },
  name: {
    type: String,
    required: true,
    maxlength: 60,
    trim: true
  },
  active: {
    type: Number,
    required: true,
    enum: [0, 1],
  }
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
