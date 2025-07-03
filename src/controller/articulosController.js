import artiulos from "../models/articulosmodels.js";
import {articulosDTO} from "../dtos/articulos.dtos.js"

//crear un articulo
export const create= async (req, res) => {
    try{
        const articulos = new articulos(req.body);
        await articulos.save ();
        res.status(201).json(new articulosDTO(articulos));
    } catch(error){
        res.status(400).json({error:error.message})
    }
};



//obtener todos los articulos

export const getAll= async (req,res)=>{
    try{
        const articulo= await artiulos.find();
        res.json (articulos.map(s=> new articulosDTO(s)));
    }catch (error){
        res.status(500).json({error:error.message})
    }        

};

//Obtener articulos por id/Codigo 
export const getById= async (req,res)=> {
    try{
        const articulos= await artiulosfindById(req.params.id);
        if(!articulos) return res .articulos(404).json({error:"articulos no encontrados" });
        res.json (new articulosDTO(articulos));
    } catch (error){
        res.status(500).json ({error:error.message});
    }
};


// Actualizar estudiante por ID
export const update = async(req,res)=>{
    try{
        const articulos= await artiulos.findByIdAndupdate(req.params.id, req.body,{new:true});
        if(!articulos )return res.status(404).json ({error:"articulo no encontrado"});
        res.json (new articulosDTO(articulos));
    } catch (error){
        res.status(400).json (error.message)};
};