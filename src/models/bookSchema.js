const { Schema, default: mongoose } = require("mongoose");

const bookSchema = new Schema({
    
    name:{
        type:String,
       required:true
    },
    pname :{
        type:String,
        required:true
    },
    date:{type:Date},
    age:{type:Number,required:true},
    page:{type:Number},
    booktype:{type:String}
})

const Book = mongoose.model("Book",bookSchema);
module.exports=Book;