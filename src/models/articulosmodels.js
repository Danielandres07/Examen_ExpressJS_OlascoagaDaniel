import mongoose from "mongoose";

const articulosSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true }
});

const Articulo = mongoose.model("Articulo", articulosSchema);

export default Articulo;
