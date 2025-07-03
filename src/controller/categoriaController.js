import Category from "../models/categorias.js";
import { CategoryDTO } from "../dtos/categorias.dtos.js";

// Crear una categoría
export const create = async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        res.status(201).json(new CategoryDTO(category));
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todas las categorías
export const getAll = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories.map(c => new CategoryDTO(c)));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener una categoría por ID
export const getById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ error: "Categoría no encontrada" });
        }
        res.json(new CategoryDTO(category));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar una categoría por ID
export const update = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!category) {
            return res.status(404).json({ error: "Categoría no encontrada" });
        }
        res.json(new CategoryDTO(category));
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
