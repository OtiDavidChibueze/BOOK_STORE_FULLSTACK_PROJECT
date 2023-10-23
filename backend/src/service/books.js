import HelperFunction from "../../util/helperFunction.js";
import logger from "../config/logger.js";
import bookModel from "../model/books.js";

class BookService {
  /**
   * @description - Book services
   */

  static async getBooks() {
    try {
      const books = await bookModel.find({});

      const count = books.length;

      if (count < 1) {
        return {
          statusCode: 404,
          message: "no books available",
          data: { publishBooks: 0, count: 0 },
        };
      } else {
        return {
          statusCode: 200,
          message: "fetched all books",
          data: { books, count },
        };
      }
    } catch (error) {
      logger.error(`BookService_getBooks -> Error: 
            ${err.message}`);
    }
  }

  static async getABookById(bookId) {
    try {
      HelperFunction.mongooseIdValidation(bookId);

      const book = await bookModel.findById(bookId);

      if (!book) {
        return {
          statusCode: 404,
          message: "book with the provided id cannot be found",
        };
      } else {
        return {
          statusCode: 200,
          message: "fetched successfully",
          data: book,
        };
      }
    } catch (error) {
      logger.error(`BookService_getABookById -> Error: 
            ${err.message}`);
    }
  }

  static async publishBook(data) {
    try {
      const { author, title, publishYear } = data;

      const publishBook = await new bookModel(data).save();

      return {
        statusCode: 201,
        message: "book publish successfully",
        data: publishBook,
      };
    } catch (err) {
      logger.error(`BookService_publishBook -> Error: 
            ${err.message}`);
    }
  }

  static async updateABookById(bookId, data) {
    try {
      HelperFunction.mongooseIdValidation(bookId);

      const { author, title, publishYear } = data;

      const updateBook = await bookModel.findByIdAndUpdate(bookId, data, {
        new: true,
      });

      if (!updateBook) {
        return {
          statusCode: 404,
          message: "book with the provided id not found",
        };
      } else {
        return {
          statusCode: 200,
          message: "book updated successfully",
          data: { updated: updateBook },
        };
      }
    } catch (err) {
      logger.error(`BookService_updateABookById -> Error: 
            ${err.message}`);
    }
  }

  static async deleteABookById(bookId) {
    try {
      HelperFunction.mongooseIdValidation(bookId);

      const book = await bookModel.findByIdAndDelete(bookId);

      if (!book) {
        return {
          statusCode: 404,
          message: "book with the provided id not found",
        };
      } else {
        return {
          statusCode: 200,
          message: "book deleted successfully",
          data: { title: book.title },
        };
      }
    } catch (error) {
      logger.error(`BookService_deleteABookById -> Error: 
            ${err.message}`);
    }
  }
}

export default BookService;
