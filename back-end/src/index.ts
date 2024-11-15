import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(
  cors({
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({
    status: true,
    statusCode: 200,
    message: "Success",
    data: [
      {
        id: 1,
        name: "John Doe",
        age: 50,
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
