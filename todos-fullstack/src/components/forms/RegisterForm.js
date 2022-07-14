import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios'

const RegisterForm = ({setUser}) => {
    const history = useHistory()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);

    axios.post('http://localhost:5000/users', formData)
    .then(res => {
        console.log(res.data);
        setUser(res.data.user)
        localStorage.setItem('todosUser', res.data.token);
        history.push('/home')
    })
  }

  return (
    <>
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.id]: e.target.value })
          }
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.id]: e.target.value })
          }
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.id]: e.target.value })
          }
        />

        <input type="submit" />
      </form>
    </>
  );
};

export default RegisterForm;
