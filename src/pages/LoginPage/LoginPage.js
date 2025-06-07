import React from "react";
import './LoginPage.css'; 
import Button from "../../components/Button";
//import { authService } from "../../services/authService"; 
//import { useNavigate } from "react-router-dom";

function LoginPage() {
  return (
    <div className="LoginPage">
      <h1>Login Page</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <Button type="submit"variant='primary'>Login</Button>
      </form>
    </div>
  );
}
export default LoginPage;