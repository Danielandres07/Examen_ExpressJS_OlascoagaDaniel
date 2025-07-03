import Warehouses from '../models/warehouses.models.js';
import { WarehouseDto } from '../dtos/Warehouses.dtos.js';

// Crear bodega
export const createWarehouse = async (req, res) => {
  try {
    const warehouse = new Warehouses(req.body);
    await warehouse.save();
    res.status(201).json({ message: 'Bodega creada exitosamente ', warehouse: new WarehouseDto(warehouse) });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todas las bodegas activas
export const getWarehouses = async (req, res) => {
  try {
    const warehouses = await Warehouses.find({ active: true });
    res.status(200).json(warehouses.map(w => new WarehouseDto(w)));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todas las bodegas
export const getAllWarehouses = async (req, res) => {
  try {
    const warehouses = await Warehouses.find();
    res.status(200).json(warehouses.map(w => new WarehouseDto(w)));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener bodega por ID
export const getWarehouseById = async (req, res) => {
  try {
    const warehouse = await Warehouses.findById(req.params.id);

    if (!warehouse || !warehouse.active) {
      return res.status(404).json({ message: 'Bodega no encontrada que mal...' });
    }

    res.status(200).json(new WarehouseDto(warehouse));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar bodega
export const updateWarehouse = async (req, res) => {
  try {
    const warehouse = await Warehouses.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    if (!warehouse) {
      return res.status(404).json({ message: 'Bodega no encontrada que mal...' });
    }

    res.status(200).json({ message: 'Bodega actualizada', warehouse: new WarehouseDto(warehouse) });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
