import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Demo {
    @PrimaryColumn()
    id: string;

    @Column()
    value: string;
}
