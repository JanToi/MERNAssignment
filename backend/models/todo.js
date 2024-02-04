import mongoose from "mongoose"

const todoSchema = mongoose.Schema(
    {
        todo_name: {
            type: String
        }
    }
)

export const Todos = mongoose.model('datateltta', todoSchema, "datateltta")


