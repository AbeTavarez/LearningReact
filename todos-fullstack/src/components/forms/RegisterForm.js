import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const RegisterForm = ({ setUser }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axios.post("http://localhost:5000/users", formData).then((res) => {
      console.log(res.data);
      if (res.data.token && res.data.user) {
        setUser(res.data.user);
        localStorage.setItem("todosUser", res.data.token);
        history.push("/home");
      } else {
        console.log(res.data);
      }
    }).catch(e => console.error(e))
  };

  return (
    <div className="container">
      <h3>Register</h3>
      <form onSubmit={handleSubmit} className="">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.id]: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.id]: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.id]: e.target.value })
            }
          />
        </div>

        <input type="submit" className="btn btn-primary mb-3" />
      </form>
    </div>
  );
};

export default RegisterForm;
