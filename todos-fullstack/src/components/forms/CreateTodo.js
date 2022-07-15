import { useState } from "react";
import axios from "axios";

const CreateTodo = ({ user, todos, setTodos }) => {
  const [formData, setFormData] = useState({
    title: "",
    details: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = { ...formData, user: user._id };
    axios
      .post("http://localhost:5000/todos", todo, {
        headers: { "x-auth-token": String(localStorage.getItem("todosUser")) },
      })
      .then((res) => setTodos([...todos, res.data]))
      .catch((e) => console.log(e));
  };
  return (
    <form className="mb-5" onSubmit={handleSubmit}>
      <label htmlFor="title" className="form-label">
        Title
      </label>
      <input
        type="text"
        className="form-control"
        id="title"
        name="title"
        value={formData.title}
        onChange={(e) =>
          setFormData({ ...formData, [e.target.id]: e.target.value })
        }
      />

      <label htmlFor="details" className="form-label">
        Details
      </label>
      <input
        type="text"
        className="form-control mb-3"
        id="details"
        name="details"
        value={formData.details}
        onChange={(e) =>
          setFormData({ ...formData, [e.target.id]: e.target.value })
        }
      />

      <input type="submit" value="Create Todo" className="btn btn-success" />
    </form>
  );
};

export default CreateTodo;
