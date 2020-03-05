import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/we-tube", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = () => console.log("connect to db");
const handleError = (error) => console.log(`error ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);