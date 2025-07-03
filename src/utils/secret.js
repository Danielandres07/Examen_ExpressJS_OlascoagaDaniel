import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync(".env")) {
    dotenv.config({ path: ".env"});
} else {
    console.error("no existe el archivo .env");
}

export const ENVIRONMENT = process.env.ENVIRONMENT || 'development';
const prod = ENVIRONMENT === 'production';

export const PORT = process.env.APP_PORT || 4000;
export const HOSTNAME = process.env.APP_HOSTNAME || 'localhost';

export const MONGO_URL = prod
  ? process.env.MONGO_URL_PROD
  : process.env.MONGO_URL_LOCAL;

export const secret = process.env.SECRET || 'default_secret_key'; 

if (!MONGO_URL) {
  if (prod) {
    console.error('No hay cadena de conexión configurada para la base de datos.');
  } else {
    console.error('No hay cadena de conexión de desarrollo configurada para la base de datos.');
  }
  process.exit(1);
}
