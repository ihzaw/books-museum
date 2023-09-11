"use client"

import CreateTodoButton from "./CreateTodo";
import Card from "./Card";
import useSWR from "swr";

const TodoPage = () => {
  const fetcher = (url) => fetch(url).then(res => res.json())
  const todos = useSWR('/api/todos', fetcher);

  return (
    <>
      <div className="py-8 w-full">
        <div className="w-full">
          <h1 className="text-xl text-left mb-8 border-b-2 border-yellow-600 font-semibold text-yellow-600">
            Your Todos
          </h1>
        </div>
        <div className="w-full">
          {todos.data?.payload?.map((todo) => {
            return (
              <Card todo={todo}/>
            );
          })}
          {todos.data?.payload?.length < 1 && (
            <div className="text-center mb-4">
              <h3 className="text-xl">Looks like you don't have anything yet!</h3>
            </div>
          )}
          <CreateTodoButton />
        </div>
      </div>
    </>
  );
};

export default TodoPage;
