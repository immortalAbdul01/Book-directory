const Book = require('./../models/Book')

exports.getAllBooks = async (req, res) => {

    const books = await Book.find()
    res.status(200).json({
        mssg: 'sucess',
        books
    })
}
exports.addBook = async (req, res) => {
    const book = await Book.create(req.body)
    res.status(201).json({
        mssg: 'sucess',
        book
    })
}
