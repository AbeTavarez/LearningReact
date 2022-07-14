import { useState } from "react";
import RegisterForm from "../forms/RegisterForm";
import LoginForm from "../forms/LoginForm";

const Landing = ({ setUser }) => {
  const [hasAccount, setHasAccount] = useState(false);
  return (
    <>
      <h1>Landing Page</h1>
      
      {hasAccount === false ? (
        <div>
          <RegisterForm setUser={setUser} />
          <p>Already have an account? <button onClick={() => setHasAccount(true)}>Login</button></p>
        </div>
      ) : (
        <LoginForm setUser={setUser}/>
      )}
    </>
  );
};

export default Landing;
