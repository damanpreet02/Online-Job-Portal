const mongoose = require("mongoose");

mongoose.set("strictQuery" , true);

mongoose.connect('mongodb+srv://daman:daman@cluster0.umdgkzv.mongodb.net/?retryWrites=true&w=majority', { tls: true, ssl: true })
.then(() => {
    console.log("Connection Successful!");
}).catch((err) => {
    console.log(err);
}); 