import express from "express";

const app = express();
const PORT = 3000;

const router = express.Router();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, welcome to the Classroom API!");
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})

app.use("/api/v1", router)