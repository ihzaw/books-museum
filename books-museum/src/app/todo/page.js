import fs from "fs";

const getTodos = () => {
  const data = fs.readFileSync("./src/data/todo.json", "utf-8");

  return JSON.parse(data);
};

const TodoPage = () => {
  const todos = getTodos();

  console.log("=>", todos);

  const getTime = (isoTime) => {
    const parsedDate = new Date(isoTime);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    };

    const formattedDate = parsedDate.toLocaleString("en-US", options);
    return formattedDate;
  };

  return (
    <div className="py-8 w-full">
      <div className="w-full">
        <h1 className="text-xl text-left mb-8 border-b-2 border-yellow-600 font-semibold text-yellow-600">
          Your Todos
        </h1>
      </div>
      <div className="w-full">
        {todos.map((todo) => {
          return (
           <div className="p-4 bg-yellow-100 text-yellow-600 font-semibold rounded-xl flex justify-between gap-2 mb-4">
              <div className="w-3/4">
                <h3 className="text-lg">{todo.name}</h3>
                <p className="italic text-xs font-normal">
                  last updated at <span>{getTime(todo.updatedAt)}</span>
                </p>
              </div>
              <div className="w-1/4 flex justify-center items-center gap-2">
                <input type="checkbox" checked={todo.isComplete} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoPage;
