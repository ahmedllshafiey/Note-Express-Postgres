import { INote } from "../interface/INote";
import { Note } from "../model/Note";

export class RNote implements INote {
    async save(note: Note): Promise<void> {
        try {
            await Note.create({
                name: note.name,
                description: note.description,
            });
        } catch (err) {
            console.log(`Failed to create note: ${err}`);
        }
    }

    async update(note: Note): Promise<void> {
        try {
            const existingNote = await Note.findOne({
                where: {
                    id: note.id,
                },
            });

            if (!existingNote) {
                throw new Error("Note not found");
            }

            existingNote.name = note.name;
            existingNote.description = note.description;

            await existingNote.save();
        } catch (err) {
            console.log(`Failed to update note: ${err}`);
        }
    }

    async delete(noteId: number): Promise<void> {
        try {
            const noteToDelete = await Note.findOne({
                where: {
                    id: noteId,
                },
            });

            if (!noteToDelete) {
                throw new Error("Note not found");
            }

            await noteToDelete.destroy();
        } catch (err) {
            console.log(`Failed to delete note: ${err}`);
        }
    }

    async get_notes(): Promise<Note[]> {
        try {
            return await Note.findAll();
            
        } catch (err) {
            console.log(`Failed to get notes: ${err}`);
            return [];
        }
    }

    async get_note_id(noteId: number): Promise<Note | null> {
        try {
            const note = await Note.findOne({
                where: {
                    id: noteId,
                },
            });

            if (!note) {
                throw new Error("Note not found");
            }

            return note;
        } catch (err) {
            console.log(`Failed to get note: ${err}`);
            return null;
        }
    }
}
