// Helper Function Validations

import mongoose from "mongoose";
import logger from "../src/config/logger.js";

class HelperFunction {
  /**
   * @description - helps out in validating functions
   */

  static mongooseIdValidation(id) {
    try {
      const validId = mongoose.isValidObjectId(id);

      if (!validId) {
        throw new Error(`invalid mongoose Id -> ${id}`);
      }
    } catch (err) {
      logger.error(
        `HelperFunction_mongooseIdValidation -> Error: ${err.message}`
      );
    }
  }
}

export default HelperFunction;
