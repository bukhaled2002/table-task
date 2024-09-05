import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
import path from "path";
import tableRoute from "./routes/tableRoute.js";
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["Get", "Post", "Patch", "Delete"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/api/v1/table", tableRoute);

// if (process.env.NODE_ENV !== "development") {
//   // app.use(express.static(path.join(__dirname, "/frontend/dist")));
//   // app.get("*", (req, res) => {
//   //   res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
//   // });
// }
app.use("*", (req, res, next) => {
  res.status(404).json("error");
});
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
