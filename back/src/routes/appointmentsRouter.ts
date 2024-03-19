import { Router } from "express";
import { cancel, getAllAppointments, getAppointmentsById, schedule } from "../controllers/appointmentsController";
const appointmentsRouter = Router();

appointmentsRouter.get("/", getAllAppointments);
appointmentsRouter.get("/:appid", getAppointmentsById);
appointmentsRouter.post("/schedule", schedule);
appointmentsRouter.put("/cancel/:appId", cancel);

export default appointmentsRouter;