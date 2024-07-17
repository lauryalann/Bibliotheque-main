module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("book", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING
        },
        author: {
            type: Sequelize.STRING
        },
        publicationDate: {
            type: Sequelize.STRING
        },
        available: {
            type: Sequelize.BOOLEAN
        }
    });

    return Book;
};
