import express from "express";
import {
  addItem,
  getItems,
  editAll,
  deleteAll,
} from "../controllers/tableController.js";

const router = express.Router();

router.route("/").get(getItems).post(addItem).patch(editAll).delete(deleteAll);

export default router;
