import { Router } from "express";
import appointmentsRouter from "./appointmentsRouter";
import usersRouter from "./usersRouter";
const indexRouter = Router();

indexRouter.use("/users", usersRouter);
indexRouter.use("/appointments", appointmentsRouter);

export default indexRouter;