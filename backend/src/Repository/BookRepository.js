import bookModel from "../model/books.js";

class BookRepository {
  static async fetchAllBook() {
    return await bookModel.find({});
  }

  static async fetchBookCount() {
    return await bookModel.countDocuments({});
  }

  static async fetchBookWithTheProvidedId(id) {
    return await bookModel.findById(id);
  }

  static async addANewBook(data) {
    return await new bookModel(data).save();
  }

  static async updateTheBook(id, data) {
    return await bookModel.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteBookWithTheProvidedId(id) {
    return await bookModel.findByIdAndDelete(id);
  }
}

export default BookRepository;
