import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios'

const LoginForm = ({setUser}) => {
    const history = useHistory()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);

    axios.post('http://localhost:5000/auth', formData)
    .then(res => {
        console.log(res.data);
        setUser(res.data.user)
        localStorage.setItem('todosUser', res.data.token);
        history.push('/home')
    })
  }

  return (
    <>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
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

export default LoginForm;
