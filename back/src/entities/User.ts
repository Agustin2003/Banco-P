import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Appointment from "./Appointments";
import Credential from "./Credential";

@Entity({ name: "users"})
class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    birthdate: string

    @Column()
    nDni: string

    @OneToOne(() => Credential)
    @JoinColumn()
    credential: Credential

    @OneToMany(() => Appointment, (appointment) => appointment.user)
    appointments: Appointment[]

}

export default User;