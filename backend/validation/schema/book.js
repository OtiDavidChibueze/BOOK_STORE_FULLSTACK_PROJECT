// Book inputs Validations
import joi from "joi";

const books = joi.object({
  author: joi.string().required().trim().messages({
    "string.empty": "Please enter the author name",
    "any.required": "author name is required",
  }),
  title: joi.string().required().trim().messages({
    "string.empty": "Please enter the book title",
    "any.required": "The book title is required",
  }),
  bookContent: joi.string().min(0).required(),
  yearReleased: joi
    .number()
    .required()
    .messages({
      "string.empty": "Please enter the book publish year",
      "any.required": "Book publish year is required",
    })
    .min(4),
});

export { books };
