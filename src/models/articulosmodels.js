import mongoose from"mongoose";


const artiulosShema= new mongoose.Shema({
    code: {type: String,required:true,unique: true},
    name:{ type: String,requiered :true,unique:true}
});

export const articulos= mongoose.model("articulos",artiulosShema);
export default articulos;