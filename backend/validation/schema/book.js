// Book inputs Validations
import joi from "joi";

const books = joi.object({
  author: joi.string().required().alphanum().messages({
    "string.empty": "Please enter the author name",
    "any.required": "author name is required",
  }),
  title: joi.string().required().messages({
    "string.empty": "Please enter the book title",
    "any.required": "The book title is required",
  }),
  publishYear: joi
    .number()
    .required()
    .default(new Date().getFullYear())
    .messages({
      "string.empty": "Please enter the book publish year",
      "any.required": "Book publish year is required",
    }),
});

export { books };
