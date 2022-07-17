import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
const UpdateTodo = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newDetails, setNewDetails] = useState("");
  const history = useHistory()

  useEffect(() => {
    axios
      .get(`http://localhost:5000/todos/${id}`, {
        headers: { "x-auth-token": String(localStorage.getItem("todosUser")) },
      })
      .then((res) => setTodo(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (todo) {
        console.log(todo);
    setNewTitle(todo.title);
    setNewDetails(todo.details);
    }
  }, [todo])

  const handleUpdate = (e) => {
    e.preventDefault()
    const updatedTodo = {...todo, title: newTitle, details: newDetails}
    axios.put(`http://localhost:5000/todos/${id}`, updatedTodo, {
        headers: { "x-auth-token": String(localStorage.getItem("todosUser")) },
      })
      .then(res => {
        console.log(res.data)
        history.push('/home')
      })
  }

  return (
    <div>
      <h3>Update Todo Form</h3>
      {todo && (
        <form className="mb-5" onSubmit={handleUpdate}>
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />

          <label htmlFor="details" className="form-label">
            Details
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="details"
            name="details"
            value={newDetails}
            onChange={(e) => setNewDetails(e.target.value)}
          />

          <input
            type="submit"
            value="Create Todo"
            className="btn btn-success"
          />
        </form>
      )}
    </div>
  );
};

export default UpdateTodo;
