import express from "express";
import { 
    getNote, 
    createNote, 
    updateNote, 
    deleteNote,
    getNoteById } 
    from "../controllers/NoteController.js";

const router = express.Router();

router.get("/notes", getNote);
router.get("/notes/:id", getNoteById);
router.post("/add-notes", createNote);
router.put("/note/:id", updateNote);
router.delete("/note/:id", deleteNote);

export default router;
