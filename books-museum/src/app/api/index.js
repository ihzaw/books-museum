import fs from "fs";

export const getTodos = () => {
  const data = fs.readFileSync("./src/data/todo.json", "utf-8");

  return JSON.parse(data);
};

// export default { handler, getTodos };
