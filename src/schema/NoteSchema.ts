import { z } from "zod";

export const create_note_schema = z.object({
    body: z.object({
        name: z.string().min(1, { message: "Name must be greater than 1 character!" }),
        description: z.string().min(4, { message: "Description must be greater than 4 characters!" }),
    }),
});

export const update_note_schema = z.object({
    params: z.object({ id: z.string() }),
    body: z.object({
        name: z.string().min(1, { message: "Name must be greater than 1 character!" }).optional(),
        description: z.string().min(4, { message: "Description must be greater than 4 characters!" }).optional(),
    }),
});
