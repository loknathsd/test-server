const   mongoose  = require("mongoose");
const uri = "mongodb+srv://bookUser:bookUser1234@cluster0.vfsjf.mongodb.net/?retryWrites=true&w=majority"
 console.log(uri)
 const connection = async()=>{
  mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));
}
module.exports = {connection}