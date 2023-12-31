import CreateTodoButton from "./CreateTodo";
import Card from "./Card";
import { getTodos } from "../actions";
import SearchBar from './SearchBar';

const TodoPage = async () => {
  const todos = await getTodos();

  return (
    <>
      <div className="py-8 w-full">
        <div className="w-full justify-between mb-8 border-b-2 border-yellow-600 font-semibold text-yellow-600">
          <h1 className="text-xl text-left mb-2">
            Your Todos
          </h1>
          <SearchBar />
        </div>
        <div className="w-full">
          {todos.payload?.map((todo) => {
            return <Card todo={todo} />;
          })}
          {todos.payload?.length < 1 && (
            <div className="text-center mb-4">
              <h3 className="text-xl">
                Looks like you don't have anything yet!
              </h3>
            </div>
          )}
          <CreateTodoButton />
        </div>
      </div>
    </>
  );
};

export default TodoPage;
