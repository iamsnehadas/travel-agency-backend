import Booking from '../models/Booking.js';
import Package from '../models/Package.js';

export async function addBooking(req, res) {
  try {
    const { name, email, phone, travelers, specialRequests, packageId } = req.body;

    // Find the selected package by ID
    const selectedPackage = await Package.findById(packageId);
    if (!selectedPackage) {
      return res.status(404).json({ message: 'Package not found' });
    }

    // Calculate total price
    const totalPrice = selectedPackage.price * travelers;

    // Create a new booking
    const newBooking = await Booking.create({
      name,
      email,
      phone,
      travelers,
      specialRequests,
      package: packageId,
      totalPrice,
    });

    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create booking', error });
  }
}

export async function getBookings(req, res) {
  try {
    // Fetch all bookings and populate the associated package details
    const bookings = await Booking.find().populate('package');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve bookings', error });
  }
}
