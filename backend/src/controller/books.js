import ResponseHelper from "../../util/responseHelper.js";
import logger from "../config/logger.js";
import BookService from "../service/books.js";

class BookController {
  /**
   * @description - Book controllers
   */

  static async getBooks(req, res) {
    try {
      const response = await BookService.getBooks();

      if (response.statusCode == 409 || response.statusCode == 404)
        return ResponseHelper.errorResponse(
          res,
          response.statusCode,
          response.message,
          response.data
        );

      logger.info(
        `BookController_getBooks -> ${JSON.stringify(response.data)}`
      );

      return ResponseHelper.successResponse(
        res,
        response.statusCode,
        response.message,
        response.data
      );
    } catch (error) {
      logger.error(`BookController_getBooks -> Error: ${error.message}`);
      return ResponseHelper.errorResponse(
        res,
        500,
        "Oops something went wrong!"
      );
    }
  }

  static async getABookById(req, res) {
    try {
      const response = await BookService.getABookById(req.params.id);

      if (response.statusCode == 409 || response.statusCode == 404)
        return ResponseHelper.errorResponse(
          res,
          response.statusCode,
          response.message,
          response.data
        );

      logger.info(
        `BookController_getABookById -> ${JSON.stringify(response.data)}`
      );

      return ResponseHelper.successResponse(
        res,
        response.statusCode,
        response.message,
        response.data
      );
    } catch (err) {
      logger.error(`BookController_getABookById -> Error: ${error.message}`);
      return ResponseHelper.errorResponse(
        res,
        500,
        "Oops something went wrong!"
      );
    }
  }

  static async publishBook(req, res) {
    try {
      const response = await BookService.publishBook(req.body);

      if (response.statusCode == 409)
        return ResponseHelper.errorResponse(
          res,
          response.statusCode,
          response.message,
          response.data
        );

      logger.info(
        `BookController_publishBook -> ${JSON.stringify(response.data)}`
      );

      return ResponseHelper.successResponse(
        res,
        response.statusCode,
        response.message,
        response.data
      );
    } catch (error) {
      logger.error(`BookController_publicBook -> Error: ${error.message}`);
      return ResponseHelper.errorResponse(
        res,
        500,
        "Oops something went wrong!"
      );
    }
  }

  static async updateABookById(req, res) {
    try {
      const response = await BookService.updateABookById(
        req.params.id,
        req.body
      );

      if (response.statusCode == 409 || response.statusCode == 404)
        return ResponseHelper.errorResponse(
          res,
          response.statusCode,
          response.message,
          response.data
        );

      logger.info(
        `BookController_updateABookById -> ${JSON.stringify(response.data)}`
      );

      return ResponseHelper.successResponse(
        res,
        response.statusCode,
        response.message,
        response.data
      );
    } catch (error) {
      logger.error(`BookController_updateABookById -> Error: ${error.message}`);
      return ResponseHelper.errorResponse(
        res,
        500,
        "Oops something went wrong!"
      );
    }
  }

  static async deleteABookById(req, res) {
    try {
      const response = await BookService.deleteABookById(req.params.id);

      if (response.statusCode == 409 || response.statusCode == 404)
        return ResponseHelper.errorResponse(
          res,
          response.statusCode,
          response.message,
          response.data
        );

      logger.info(
        `BookController_deleteABookById -> ${JSON.stringify(response.data)}`
      );

      return ResponseHelper.successResponse(
        res,
        response.statusCode,
        response.message,
        response.data
      );
    } catch (error) {
      logger.error(`BookController_deleteABookById-> Error: ${error.message}`);
      return ResponseHelper.errorResponse(
        res,
        500,
        "Oops something went wrong!"
      );
    }
  }
}

export default BookController;
