import Articulo from "../models/articulosmodels.js";
import { articulosDTO } from "../dtos/articulos.dtos.js";

// Crear un artículo
export const create = async (req, res) => {
  try {
    const articulo = new Articulo(req.body);
    await articulo.save();
    res.status(201).json(new articulosDTO(articulo));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los artículos
export const getAll = async (req, res) => {
  try {
    const articulos = await Articulo.find();
    res.json(articulos.map(s => new articulosDTO(s)));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener artículo por ID
export const getById = async (req, res) => {
  try {
    const articulo = await Articulo.findById(req.params.id);
    if (!articulo) return res.status(404).json({ error: "Artículo no encontrado" });
    res.json(new articulosDTO(articulo));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar artículo por ID
export const update = async (req, res) => {
  try {
    const articulo = await Articulo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!articulo) return res.status(404).json({ error: "Artículo no encontrado" });
    res.json(new articulosDTO(articulo));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
