const mongoose = require("mongoose").set("strictQuery", true);

/* Connecting to the database. */
mongoose.Promise = global.Promise;
const DB_URI =
  process.env.DATABASE_URL ||
  "mongodb+srv://jeisonadmincloud:Reyes9910@proyecto.aczh8lc.mongodb.net/?retryWrites=true&w=majority";

module.exports = () => {
  const connect = () => {
    mongoose.connect(
      DB_URI,
      {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) {
          console.log("Error al conectar a la base de datos", err);
        } else {
          console.log("Conectado a la base de datos");
        }
      }
    );
  };

  connect();
};