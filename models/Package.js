import { Schema, model } from 'mongoose';

const packageSchema = Schema({
  title: String,
  description: String,
  price: Number,
  availableDates: [String],
  image: String,
});

export default model('Package', packageSchema);
