import { Request, Response } from "express";
import { Note } from "../model/Note";
import { RNote } from "../repository/RNote";

class NoteController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            const new_note = new Note();
            new_note.name = req.body.name;
            new_note.description = req.body.description;

            await new RNote().save(new_note);

            res.status(200).json({
                status: "Created",
                message: "Note successfully created",
                data: new_note,
            });
        } catch (err) {
            res.status(500).json({
                status: "Error",
                message: "Server error",
            });
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id, 10);
            const new_note = new Note();

            new_note.id = id;
            new_note.name = req.body.name;
            new_note.description = req.body.description;

            await new RNote().update(new_note);

            res.status(200).json({
                status: "Updated",
                message: "Note successfully updated",
                data: new_note,
            });
        } catch (err) {
            res.status(500).json({
                status: "Error",
                message: "Failed to update note",
            });
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id, 10);
            await new RNote().delete(id);

            res.status(200).json({
                status: "Deleted",
                message: "Note successfully deleted",
            });
        } catch (err) {
            res.status(500).json({
                status: "Error",
                message: "Failed to delete note",
            });
        }
    }

    async findAll(req: Request, res: Response): Promise<void> {
        try {
            const notes = await new RNote().get_notes();
            res.status(200).json({
                status: "OK",
                message: "Notes successfully retrieved",
                data: notes,
            });
        } catch (err) {
            res.status(500).json({
                status: "Error",
                message: "Failed to retrieve notes",
            });
        }
    }

    async find_by_Id(req: Request, res: Response): Promise<void | any> {
        try {
            const id = parseInt(req.params.id, 10);
            const note = await new RNote().get_note_id(id);

            if (!note) {
                return res.status(404).json({
                    status: "Error",
                    message: "Note not found",
                });
            }

            res.status(200).json({
                status: "OK",
                message: "Note successfully retrieved",
                data: note,
            });
        } catch (err) {
            res.status(500).json({
                status: "Error",
                message: "Failed to retrieve note",
            });
        }
    }
}

export default new NoteController();