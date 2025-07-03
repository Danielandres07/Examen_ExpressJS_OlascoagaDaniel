import mongoose from "mongoose";

const Schema = mongoose.Schema;

const WarehouseSchema = new Schema({
  code: { type: String },
  name: { type: String, required: true },
  active: { type: Boolean, default: true }
}, { timestamps: true });

const Warehouses = mongoose.models.Warehouses || mongoose.model('Warehouses', WarehouseSchema);

export default Warehouses;