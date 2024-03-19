import { PORT } from "./config/envs";
import server from "./server";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected...")
        server.listen(PORT, () => {
            console.log(`Server listening on ${PORT}`)
        });
    })
    .catch((error) => console.log(error));
