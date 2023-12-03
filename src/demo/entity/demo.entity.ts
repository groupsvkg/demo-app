import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Demo {
    @PrimaryColumn()
    id: string;

    @Column()
    encrypted_value: string;
}
