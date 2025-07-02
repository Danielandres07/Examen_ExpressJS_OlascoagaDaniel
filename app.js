import express from "express"
import mongoose from "mongoose"
import  session from "express-session"
import { PORT, HOSTNAME, MONGO_URL, } from './src/utils/secret.js';
import articulosRoutes from './src/routes/articulosRoutes.js';
import { secret } from './src/utils/secret.js'; 



const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hola!');
});


app.use('/articulos', articulosRoutes);




// Conectar al MongoDB
mongoose.connect(MONGO_URL).then(async () => {
  console.log('Conectado a MongoDB');
}).catch(err => {
  console.error('Error al conectar a MongoDB:', err);
});


app.listen({
    hostname: HOSTNAME,
    port: PORT
}, () => console.log(`running on http://${HOSTNAME}:${PORT}`));