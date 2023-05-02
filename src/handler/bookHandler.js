const Book = require("../models/bookSchema")


const addBook = async(req,res)=>{
    try {
        console.log(req.body)
        console.log('add book')
        const book = new Book(req.body);
        await book.save();
        res.status(200).json({ message: "Book is added Successfully !" });
        
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Book added failed" })
    }
}
const getBooks = async(req,res)=>{
    try {
        const data = await Book.find();
        res.status(200).json(data);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server Failed" })
    }
}
const getOne = async (req, res) => {
    try {
        const data = await Book.find({ _id: req.params.id });
        res.status(200).json({ result: data, message: "Success" })
    } catch (e) {
        console.log(e);
        throw new Error("Something went wrong")
    }
}
const updateBook = async (req,res) => {
    const bookId = req.params.id;
    const updatedData = req.body;
    try {
      const updatedBook = await Book.findOneAndUpdate({ _id: bookId }, updatedData);
      res.status(200).json({ message: 'Book updated successfully'});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to update book' });
    }
  };
//delete product
const deleteBook = async (req, res) => {
    try {
        await Book.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: "Book is deleted Successfully !!" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Book is not deleted . failed !" })
    }
}

module.exports={addBook,getBooks,getOne,updateBook,deleteBook}