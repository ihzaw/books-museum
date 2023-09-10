import fs from "fs";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const dataDir = "./src/data/todo.json";
    const todosData = fs.readFileSync(`${dataDir}`, "utf-8");
    let todos = JSON.parse(todosData);

    const foundIndex = todos.findIndex((todo) => todo.id === params.id);
    todos.splice(foundIndex, 1);

    fs.writeFileSync(`${dataDir}`, JSON.stringify(todos, null, 2));

    return new Response(null, { status: 204 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred while deleting user data." },
      { status: 500 }
    );
  }
}

export async function PATCH(req, { params }) {
  try {
    const dataDir = "./src/data/todo.json";
    const todosData = fs.readFileSync(`${dataDir}`, "utf-8");
    let todos = JSON.parse(todosData);

    const foundIndex = todos.findIndex((todo) => todo.id === params.id);

    todos[foundIndex].isComplete = !todos[foundIndex].isComplete;

    fs.writeFileSync(`${dataDir}`, JSON.stringify(todos, null, 2));

    return new Response(null, { status: 204 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred while patching user data." },
      { status: 500 }
    );
  }
}
