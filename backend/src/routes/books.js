import express from "express";
const route = express.Router();
import SchemaValidationsHelper from "../../validation/schemaValidationHelper.js";
import { books } from "../../validation/schema/book.js";
import BookController from "../controller/books.js";

route.get("/", BookController.getBooks);
route.get("/:id", BookController.getABookById);
route.get("/content/:id", BookController.bookContent);

route.post(
  "/publish",
  SchemaValidationsHelper.validateInput(books),
  BookController.publishBook
);

route.put(
  "/update/:id",
  SchemaValidationsHelper.validateInput(books),
  BookController.updateABookById
);

route.delete("/delete/:id", BookController.deleteABookById);

export default route;
