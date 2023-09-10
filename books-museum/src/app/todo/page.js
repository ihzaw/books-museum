// import { getTodos } from "@/app/api";
import CreateTodoButton from "./CreateTodo";
import { getTodos } from "../api";
import Card from "./Card";

const TodoPage = async () => {
  const todos = await getTodos();
  // const [todos, setTodos] = useState([]);
  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <Modal show={showModal} toggle={() => setShowModal(!showModal)} /> */}
      <div className="py-8 w-full">
        <div className="w-full">
          <h1 className="text-xl text-left mb-8 border-b-2 border-yellow-600 font-semibold text-yellow-600">
            Your Todos
          </h1>
        </div>
        <div className="w-full">
          {todos?.map((todo) => {
            return (
              <Card todo={todo}/>
            );
          })}
          {todos?.length < 1 && (
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
