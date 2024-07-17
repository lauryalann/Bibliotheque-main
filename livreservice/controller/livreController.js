const BookService = require("../service/livreService");

exports.findAll = (req, res) => {
    BookService.findAll()
        .then((books) => {
            res.status(200).json(books);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving books."
            });
        });
};

exports.findById = (req, res) => {
    const id = req.params.id;
    BookService.findById(id)
        .then((book) => {
            if (!book) {
                res.status(404).send({ message: `Book with id ${id} not found` });
            } else {
                res.status(200).json(book);
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || `Error retrieving book with id ${id}`
            });
        });
};

exports.create = (req, res) => {
    const newBook = {
        title: req.body.title,
        author: req.body.author,
        publicationDate: req.body.publicationDate,
        available: req.body.available
    };

    BookService.create(newBook)
        .then((book) => {
            res.status(201).json(book);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the book."
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    const updatedBook = {
        title: req.body.title,
        author: req.body.author,
        publicationDate: req.body.publicationDate,
        available: req.body.available
    };

    BookService.update(id, updatedBook)
        .then((result) => {
            if (result == 1) {
                res.status(200).send({ message: "Book updated successfully." });
            } else {
                res.status(404).send({ message: `Book with id ${id} not found` });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || `Error updating book with id ${id}`
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    BookService.delete(id)
        .then((result) => {
            if (result == 1) {
                res.status(200).send({ message: "Book deleted successfully." });
            } else {
                res.status(404).send({ message: `Book with id ${id} not found` });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || `Error deleting book with id ${id}`
            });
        });
};
