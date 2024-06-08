import express, { Application, Request, Response } from "express";
import Database from "./config/database";
import NoteRoutes from "./routes/NoteRoutes";

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.plugins();
        this.database_sync();
        this.routes();
    }

    protected plugins(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    protected database_sync(): void {
        const db = new Database();
        db.sequelize?.sync();
    }

    protected routes(): void {
        this.app.route("/").get((req: Request, res: Response) => {
            res.send("Hello Server");
        });
        this.app.use("/api/v1/note", NoteRoutes);
    }
}

const PORT: number = 8080;
const app = new App().app;

app.listen(PORT, () => {
    console.log("Server is working!!");
});