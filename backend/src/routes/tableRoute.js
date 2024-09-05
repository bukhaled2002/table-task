import express from "express";
import { addItem, getItems, editAll } from "../controllers/tableController.js";

const router = express.Router();

router.route("/").get(getItems).post(addItem).patch(editAll);

export default router;
