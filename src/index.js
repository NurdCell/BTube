import { app } from "./app.js";
import connectDB from "./db/index.js";
const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server  is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Mongobd connection error`, err);
  });
