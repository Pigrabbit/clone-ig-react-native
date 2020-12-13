import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = 3000;

app.get('/post/:id', (req, res) => {
  const { id } = req.params
  
})

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello TS express!");
});

app.listen(process.env.PORT || PORT, () =>
  console.log("Server running on port 3000!")
);
