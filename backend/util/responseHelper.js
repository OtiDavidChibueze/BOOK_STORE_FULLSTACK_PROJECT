// Response Helper

class ResponseHelper {
  /**
   * @description - send an error or success response to the client
   */

  static successResponse(res, statusCode, message, data) {
    return res.status(statusCode).json({ status: "success", message, data });
  }

  static errorResponse( res, statusCode, message, data) {
    return res.status(statusCode).json({ status: "error", message, data });
  }
}

export default ResponseHelper;
