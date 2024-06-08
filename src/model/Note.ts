import { Model } from "sequelize-typescript";
import { AutoIncrement, Column, DataType, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    tableName: "note",
})
export class Note extends Model {
    public static NOTE_TABLE_NAME = "note";
    public static NOTE_ID = "id";
    public static NOTE_NAME = "name";
    public static NOTE_DESCRIPTION = "description";

    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        field: Note.NOTE_ID
    })
    id!: number;

    @Column({
        type: DataType.STRING(100),
        field: Note.NOTE_NAME,
    })
    name!: string;

    @Column({
        type: DataType.STRING(250),
        field: Note.NOTE_DESCRIPTION,
    })
    description!: string;
}