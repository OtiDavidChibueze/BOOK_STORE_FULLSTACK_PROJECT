// Schema Validations Helper

import logger from "../src/config/logger.js";
import ResponseHelper from "../util/responseHelper.js";

class SchemaValidationsHelper {
  /**
   * @description - helps validate schema objects and inputs
   */

  static validateSchema(schema, object) {
    try {
      const { error, value } = schema.validate(object);
      return { error, value };
    } catch (err) {
      return logger.error(
        `SchemaValidationHelper_validateSchema -> Error: ${err.message}`
      );
    }
  }

  static validateInput(schema) {
    try {
      return (req, res, next) => {
        const { error } = SchemaValidationsHelper.validateSchema(schema, {
          ...req.body,
          ...req.query,
        });

        if (!error) {
          return next();
        }

        return ResponseHelper.errorResponse(res, 422, error.details[0].message);
      };
    } catch (err) {
      return logger.error(
        `SchemaValidationHelper_validateInput -> Error: ${err.message}`
      );
    }
  }
}

export default SchemaValidationsHelper;
