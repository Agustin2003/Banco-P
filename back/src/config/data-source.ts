import { DataSource } from "typeorm";
import Appointment from "../entities/Appointments";
import Credential from "../entities/Credential";
import User from "../entities/User";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./envs";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    logging: ["error"],
    entities: [User, Appointment, Credential],
    subscribers: [],
    migrations: [],
})