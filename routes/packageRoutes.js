import { Router } from 'express';
import { getPackages, getPackage, addPackage, updatePackage, deletePackage } from '../controllers/packageController.js';
const router = Router();

router.get('/', getPackages);
router.get('/:id', getPackage);
router.post('/', addPackage);
router.put('/:id', updatePackage);
router.delete('/:id', deletePackage);

export default router;
