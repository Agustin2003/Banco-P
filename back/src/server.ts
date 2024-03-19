import cors from "cors"
import express from "express";
import indexRouter from "./routes/indexRouter";
import morgan from "morgan";
const server = express ();

server.use(cors());
server.use(express.json());
server.use(morgan("dev"))
server.use(indexRouter);

export default server;