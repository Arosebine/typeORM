import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "seyico09@",
    database: "project",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: ["src/entity/**/*"],
    subscribers: ["src/entity/**/*"],
})

export default AppDataSource;
