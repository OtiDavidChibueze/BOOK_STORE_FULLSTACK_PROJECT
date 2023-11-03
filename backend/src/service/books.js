import HelperFunction from "../../util/helperFunction.js";
import BookRepository from "../Repository/BookRepository.js";
class BookService {
  /**
   * @description - Book services
   */

  static async getBooks() {
    const books = await BookRepository.fetchAllBook();

    const count = await BookRepository.fetchBookCount();

    if (count < 1)
      return {
        statusCode: 404,
        message: "no books available",
        data: { publishBooks: 0, count: 0 },
      };

    return {
      statusCode: 200,
      message: "fetched all books",
      data: { books, count },
    };
  }

  static async getABookById(bookId) {
    HelperFunction.mongooseIdValidation(bookId);

    const book = await BookRepository.fetchBookWithTheProvidedId(bookId);

    if (!book)
      return {
        statusCode: 404,
        message: "book with the provided id cannot be found",
      };

    return {
      statusCode: 200,
      message: "fetched successfully",
      data: book,
    };
  }

  static async publishBook(data) {
    const { author, title, yearReleased, content } = data;

    const publishBook = await BookRepository.addANewBook(data);

    return {
      statusCode: 201,
      message: "book publish successfully",
      data: publishBook,
    };
  }

  static async updateABookById(bookId, data) {
    HelperFunction.mongooseIdValidation(bookId);

    const { author, title, yearReleased, content } = data;

    const updateBook = await BookRepository.updateTheBook(bookId, data);

    if (!updateBook)
      return {
        statusCode: 404,
        message: "book with the provided id not found",
      };

    return {
      statusCode: 200,
      message: "book updated successfully",
      data: { updated: updateBook },
    };
  }

  static async deleteABookById(bookId) {
    HelperFunction.mongooseIdValidation(bookId);

    const book = await BookRepository.deleteBookWithTheProvidedId(bookId);

    if (!book)
      return {
        statusCode: 404,
        message: "book with the provided id not found",
      };

    return {
      statusCode: 200,
      message: "book deleted successfully",
      data: { title: book.title },
    };
  }
}

export default BookService;
