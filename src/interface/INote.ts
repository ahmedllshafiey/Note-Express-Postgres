import { Note } from "../model/Note";

export interface INote {
    save(note: Note): Promise<void>;
    update(note: Note): Promise<void>;
    delete(noteId: number): Promise<void>;
    get_notes(): Promise<Note[]>
    get_note_id(noteId: number): Promise<Note | null>
}