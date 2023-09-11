import fs from "fs";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function GET() {
  try {
    const dataDir = "./src/data/todo.json";
    const todosData = fs.readFileSync(`${dataDir}`, "utf-8");
    let todos = JSON.parse(todosData);

    return NextResponse.json({ payload: todos });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "An error occurred while getting user data." },
      { status: 500 }
    );
  }
}

export async function POST(req, res) {
  try {
    const dataDir = "./src/data/todo.json";
    const todosData = fs.readFileSync(`${dataDir}`, "utf-8");
    let todos = JSON.parse(todosData);

    const body = await req.json();

    const newTodo = {
      ...body,
      id: body.id ? body.id : uuidv4(),
      isComplete: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const existingTodoIndex = todos.findIndex((todo) => todo.id === newTodo.id);

    if (existingTodoIndex !== -1) {
      todos[existingTodoIndex] = newTodo;
    } else {
      todos.push(newTodo);
    }

    fs.writeFileSync(`${dataDir}`, JSON.stringify(todos, null, 2));

    return NextResponse.json(
      { message: "User data updated successfully." },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "An error occurred while updating user data." },
      { status: 500 }
    );
  }
}
