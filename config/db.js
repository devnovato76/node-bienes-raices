import Sequelize from 'sequelize';
import dotenv from 'dotenv'

dotenv.config()

const db = new Sequelize(
  process.env.BD_NOMBRE,
  process.env.BD_USSER,
  process.env.BD_PASSWORD,
  {
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    dialect: "mysql",
    define: {
      timestamps: true,
    },
    pool: {
      max: 5, // maximo numero de conexiones en un pool
      min: 0, // minimo numero de coneciones en un pool, para 0 se cierra la conexion
      acquire: 30000, // tiempo maximo para que se establezca la conexion, si no se establece se rechaza la conexion
      idle: 10000, // tiempo maximo que una conexion puede estar inactiva antes de ser liberada por el pool
    },
    operatorAliases: false,
  }
);

export default db;

