const db = require("../model/livre");
const Book = db.books;

exports.findAll = () => {
    return Book.findAll();
};

exports.findById = (id) => {
    return Book.findByPk(id);
};

exports.create = (newBook) => {
    return Book.create(newBook);
};

exports.update = (id, updatedBook) => {
    return Book.update(updatedBook, {
        where: { id: id }
    });
};

exports.delete = (id) => {
    return Book.destroy({
        where: { id: id }
    });
};
