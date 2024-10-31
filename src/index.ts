import express, { Request, Response } from "express";
import createError from "http-errors";
import userRoutes from "./routes/userRoutes";
import cors from "cors";

const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use(cors({origin: "http://localhost:5173"}));

app.use((req: Request, res: Response, next: Function) => {
  next(createError(404));
});

app.listen(3000, () =>
  console.log(`⚡️[server]: Server is running at http://localhost:3000`)
);