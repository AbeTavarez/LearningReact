import { useState } from "react";
import RegisterForm from "../forms/RegisterForm";
import LoginForm from "../forms/LoginForm";

const Landing = ({ setUser }) => {
  const [hasAccount, setHasAccount] = useState(false);
  return (
    <div className="container-fluid">
      <h1>Landing Page</h1>
      
      {hasAccount === false ? (
        <div>
          <RegisterForm setUser={setUser} />
          <div className="container">
          <p>Already have an account? <span className="btn btn-outline-info" onClick={() => setHasAccount(true)}>Login</span></p>
          </div>
        </div>
      ) : (
        <LoginForm setUser={setUser}/>
      )}
    </div>
  );
};

export default Landing;
