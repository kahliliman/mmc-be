const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4100;

const uri = `mongodb+srv://marvelmoviescountdown:${process.env.MONGODB_PASSWORD}@cluster0.ja6iqpg.mongodb.net/?retryWrites=true&w=majority`;
const dbName = process.env.MONGODB_DATABASE;

async function connect() {
  try {
    await mongoose.connect(uri, {
      dbName,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB, database ${dbName}`);
  } catch (error) {
    console.log(error);
  }
}

connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello World!</h1>");
});

app.use("/api", routes);

app.use((req, res, next) => {
  res.status(404).send("<h1>404</h1>");
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
