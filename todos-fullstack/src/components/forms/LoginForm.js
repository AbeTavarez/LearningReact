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
        if (res.data.token && res.data.user){
          setUser(res.data.user)
        localStorage.setItem('todosUser', res.data.token);
        history.push('/home')
        } else {
          console.log(res.data)
        }
    }).catch(e => console.error(e))
  }

  return (
    <>
      <h3>Login</h3>
      <form onSubmit={handleSubmit} className='container'>
        <label htmlFor="email" className="form-label">Email</label>
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

        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          className="form-control mb-3"
          id="password"
          name="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.id]: e.target.value })
          }
        />

        <input type="submit" className="btn btn-primary"/>
      </form>
    </>
  );
};

export default LoginForm;
