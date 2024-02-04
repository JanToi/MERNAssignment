import express from 'express'
import mongoose from 'mongoose'
import { Todos } from './models/todo.js'
import 'dotenv/config'
import * as todoRoutes from "./routes/todoRoutes.js";
import cors from 'cors'

const app = express()

app.use(express.json())


// CORS POLICY käsittely jotta data liikkuu
// Tapa 1: Allow All origins with Default of cors(*)
app.use(cors('*'))



app.get('/', (req, res) => {
    res.send("HALOO")
})


app.use("/", todoRoutes.PostNew);
app.use("/", todoRoutes.GetAll);
app.use("/", todoRoutes.DeleteTask);
app.use("/", todoRoutes.UpdateTodo);

mongoose.connect(process.env.MONGO_URL)
.then( () => {
  app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));
})
.catch((e) => {
  console.log("Error connecting to MongoDB:", e);
});

