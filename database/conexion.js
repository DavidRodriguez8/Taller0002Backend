import Sequelize  from "sequelize";

//const db = new Sequelize("<nombre_tabla>","<usuario>","<contraseña>")
const db = new Sequelize("mascotas","root","",{
    dialect: "mysql",
    host: "localhost"
});

export {db}