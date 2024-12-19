import { Router } from 'express';
import { addBooking, getBookings } from '../controllers/bookingController.js';
const router = Router();

router.post('/', addBooking);
router.get('/', getBookings);

export default router;
