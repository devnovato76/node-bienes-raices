import { DataTypes } from "sequelize";
import db  from "../config/db.js";

const Usiario = db.define("usuarios", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false, //no puede ser nulo o vacio
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false, //no puede ser nulo o vacio
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false, //no puede ser nulo o vacio
  },
  token: DataTypes.STRING,
  confirmado: DataTypes.BOOLEAN
});
export default Usiario;