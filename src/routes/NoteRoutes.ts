import { Router } from "express";
import NoteController from "../controllers/NoteController";
import validate from "../helpers/validation";
import { create_note_schema, update_note_schema } from "../schema/NoteSchema";
import Routes from "./Routes";

class NoteRoutes extends Routes {
    public routes(): void {
        this.router.post("", validate(create_note_schema), NoteController.create);
        this.router.patch("/:id", validate(update_note_schema), NoteController.update);
        this.router.delete("/:id", NoteController.delete);
        this.router.get("/:id", NoteController.find_by_Id);
        this.router.get("", NoteController.findAll);
    }
}

export default new NoteRoutes().router;