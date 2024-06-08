import { Sequelize } from "sequelize-typescript";
import * as dotenv from 'dotenv';
import { Note } from "../model/Note";

dotenv.config();

class Database {
    public sequelize: Sequelize;

    private POSTGRES_DB = process.env.POSTGRES_DB as string;
    private POSTGRES_HOST = process.env.POSTGRES_HOST as string;
    private POSTGRES_PORT = parseInt(process.env.POSTGRES_PORT as string, 10);
    private POSTGRES_USER = process.env.POSTGRES_USER as string;
    private POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD as string;

    constructor() {
        this.sequelize = this.connect_to_database();
    }

    private connect_to_database() {
        const sequelize = new Sequelize({
            database: this.POSTGRES_DB,
            username: this.POSTGRES_USER,
            password: this.POSTGRES_PASSWORD,
            host: this.POSTGRES_HOST,
            port: this.POSTGRES_PORT,
            dialect: "postgres",
            models: [Note], // This is valid with sequelize-typescript
        });

        sequelize.authenticate().then(() => {
            console.log("Connected to DB");
        }).catch((err) => {
            console.log("Connection Error:", err);
        });

        return sequelize;
    }
}

export default Database;