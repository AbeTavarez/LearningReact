import NavBar from "../layout/NavBar";
import CreateTodo from "../forms/CreateTodo";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Home = ({ user }) => {
  const history = useHistory()
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
        headers: { "x-auth-token": String(localStorage.getItem("todosUser")) },
      })
      .then(setTodos([...todos.filter((t) => t._id !== todo._id)]));
  };

  const handleUpdate = (todo) => {
    history.push(`/update/${todo._id}`)
  }
  return (
    <div className="container">
      <NavBar user={user} />
      <h1>Home Page</h1>

      <CreateTodo user={user} todos={todos} setTodos={setTodos} />

      {todos &&
        todos.map((todo) => (
          <div key={todo._id} className="card">
            <div style={{ display: "flex", margin: "15px" }}>
              <div>
                <p style={{ marginRight: "10px" }}>{todo.title}</p>
                <p>{todo.details}</p>
              </div>

              <div style={{ marginLeft: "auto" }}>
                {todo.user === user._id && (
                  <span
                    className="btn btn-danger"
                    style={{ marginLeft: "auto", marginRight: '5px' }}
                    onClick={() => handleDelete(todo)}
                  >
                    x
                  </span>
                )}
                {todo.user === user._id && (
                  <span
                    className="btn btn-info"
                   
                    onClick={() => handleUpdate(todo)}
                  >
                    Update
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
