import fs from "fs";

export const POST = (req, res) => {
  try {
    // Read the existing JSON file
    const dataDir = "../data/todo.json";
    console.log("dataDir :", dataDir);
    const todosData = fs.readFileSync(`${dataDir}/users.json`, "utf-8");
    let todos = JSON.parse(todosData);

    // Add or edit the user data
    const newTodo = req.body; // Assuming the request body contains the user data to be added/edited
    const existingTodoIndex = users.findIndex((todo) => todo.id === newTodo.id);

    if (existingTodoIndex !== -1) {
      // If the user with the same ID exists, update it
      users[existingTodoIndex] = newTodo;
    } else {
      // If the user doesn't exist, add it
      users.push(newUser);
    }

    // Write the updated JSON data back to the file
    fs.writeFileSync(`${dataDir}/users.json`, JSON.stringify(users, null, 2));

    res.status(200).json({ message: "User data updated successfully." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while updating user data." });
  }
};

export const getTodos = () => {
  const data = fs.readFileSync("./src/data/todo.json", "utf-8");

  return JSON.parse(data);
};

// export default { handler, getTodos };
