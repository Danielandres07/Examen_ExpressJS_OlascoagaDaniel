import { Router } from 'express';
import {
  createWarehouse,
  getWarehouses,
  getAllWarehouses,
  getWarehouseById,
  updateWarehouse,
} from '../controller/warehousesController.js';

const router = Router();

router.get('/', getWarehouses);
router.get('/all', getAllWarehouses);
router.get('/:id', getWarehouseById);
router.post('/', createWarehouse);
router.put('/:id', updateWarehouse);

export default router;