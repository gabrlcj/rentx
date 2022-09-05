import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("User")
export class User {
  @PrimaryColumn()
  id?: string;

  @Column()
  name!: string;

  @Column()
  username!: string;

  @Column()
  password!: string;

  @Column()
  email!: string;

  @Column({ name: "driver_license" })
  driverLicense!: string;

  @Column()
  isAdmin!: boolean;

  @CreateDateColumn()
  created_at!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
