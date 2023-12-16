const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const urlRoute = require("./routes/urlRoute");

dotenv.config(); // Load environment variables
const uri = process.env.Mongo_URL;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/url", urlRoute);


app.get('/', (req, res) => {
    res.send("hello world");
    console.log("start");
});

connect = async () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    try {
        await mongoose.connect(uri, connectionParams);
        console.log("connected to database successfully");
    } catch (error) {
        console.log("could not connect to database.", error);
    }
};

connect();

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
