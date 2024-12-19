import { Schema, model } from 'mongoose';

const bookingSchema = Schema({
  name: String,
  email: String,
  phone: String,
  travelers: Number,
  specialRequests: String,
  package: { type: Schema.Types.ObjectId, ref: 'Package' },
  totalPrice: Number,
});

export default model('Booking', bookingSchema);
