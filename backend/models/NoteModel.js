import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// Membuat tabel "note"
const Note = db.define(
    "note", // Nama Tabel
    {
      judul: Sequelize.STRING,
      isi: Sequelize.STRING,
      kategori: Sequelize.STRING
    }
  );

db.sync().then(() => console.log("Database synced"));

export default Note;
