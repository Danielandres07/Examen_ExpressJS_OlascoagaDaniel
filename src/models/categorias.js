db.createCollection("categories",  {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["code", "name", "active"],
      properties: {
        code: {
          bsonType: "string",
          maxLength: 10,
          description: "Código único de la categoría"
},
  name: {
    bsonType: "string",
    maxLength: 60,
    description: "Nombre de la categoría"
},

  active:{
    bsonType:"int",
    minimum:0,
    maximum:1,
    description:"indica si el registro esta activo(1) o inactivo (0)"
},
code: {
    bsonType: "string",
    maxLength: 10,
    description: "codigo unico de la categoria"
     }
    }
   }
  }
});

db.createCollection("warehouse",{

})