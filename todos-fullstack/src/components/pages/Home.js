import NavBar from "../layout/NavBar";
import CreateTodo from "../forms/CreateTodo";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ user }) => {
  const [todos, setTodos] = useState(null);
  // axios.get(`http://localhost:5000/todos`, {
  // axios.get(`http://localhost:5000/todos/${user._id}`, {
  useEffect(() => {
    axios
      .get(`http://localhost:5000/todos`, {
        headers: {
          "x-auth-token": String(localStorage.getItem("todosUser")),
        },
      })
      .then((res) => {
        console.log(res.data);
        setTodos(res.data);
      })
      .catch((e) => console.error(e));
  }, []);

  const handleDelete = (todo) => {
    axios
      .delete(`http://localhost:5000/todos/${todo._id}`, {
        headers: { "x-auth-token": String(localStorage.getItem("todosUser")) } })
      .then(setTodos([...todos.filter((t) => t._id !== todo._id)]));
  };
  return (
    <div>
      <NavBar user={user} />
      <h1>Home Page</h1>

      <CreateTodo user={user} todos={todos} setTodos={setTodos}/>

      {todos &&
        todos.map((todo) => (
          <div key={todo._id}>
            <div className="mb-3">
              {todo.title}{" "}
              <div
                className="btn btn-danger"
                onClick={() => handleDelete(todo)}
              >
                x
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
