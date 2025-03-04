import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("tugas_note", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
