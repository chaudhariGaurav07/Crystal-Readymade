import mongoose from 'mongoose';

const brandSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Brand = mongoose.model('Brand', brandSchema);

export default Brand;
