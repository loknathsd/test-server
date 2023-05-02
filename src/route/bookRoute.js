const express = require("express");
const { addBook, deleteBook, updateBook, getBooks, getOne } = require("../handler/bookHandler");
const bookRouter = express.Router();


// add product router
bookRouter.post("/add",addBook);
bookRouter.get("/",getBooks);
bookRouter.get("/:id",getOne);
bookRouter.delete("/:id",deleteBook);
bookRouter.put("/edit/:id",updateBook);

module.exports =  bookRouter ;