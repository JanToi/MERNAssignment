import { Todos } from "../models/todo.js";
import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';


const app = express();


//create a new todo
export const PostNew = app.post("/todos/new", async (req,res) => {
    try {
        const { todo_name } = req.body;
        const newTodo = new Todos({ todo_name });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Get the todos
export const GetAll = app.get("/todos", async (req, res) => {
    try {
        const todos = await Todos.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});

//delete task

export const DeleteTask = app.delete("/todos/delete/:id", async (req, res) => {
    try {
      const deletedTodo = await Todos.findByIdAndDelete(req.params.id);
      if (!deletedTodo) {
        return res.status(404).json({ message: "Todo not found" });
      }
      res.json(deletedTodo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

//update todo by name
export const UpdateTodo = app.put("/todos/update/:name", async (req, res) => {
    try {
        const {todo_name} = req.body;
        const updatedTodo = await Todos.findAndUpdate(
            {todo_name: req.params.name}, {todo_name}, {new: true}
        );
        if (!updatedTodo) {
            return res.status(404).json({message: "todo not found"})
        }
        res.json(updatedTodo)
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})