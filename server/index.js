import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import { getAll, create, remove, done } from "./controllers/TaskControllers.js";

const app = express();
app.use(express.json())
app.use(cors())


mongoose.connect(
  'mongodb+srv://admin:mongobasepass@cluster0.pryub.mongodb.net/tasks?retryWrites=true&w=majority')
  .then(() => {
    console.log('Подключение успешно')
  })
  .catch((err) => {
    console.log('ошибка подключения')
  }
)

app.post('/auth/login', (req, res) => {
  console.log(req.body)
  res.json( {
    message: 'регистрация прошла успешно'
  })
})

app.get('/tasks', getAll);
app.post('/tasks', create);
app.delete('/tasks/:id', remove);
app.patch('/tasks/:id', done)




app.listen(5555, (err) => {
  if(err) {
    return console.log(err, 'ошибка')
  }
  console.log('Работает!')
})