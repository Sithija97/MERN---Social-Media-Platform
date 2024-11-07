import { Link } from "react-router-dom";
import "./index.scss";

export const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left-section">
          <h1>Login</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button type="submit">Register</button>
          </Link>
        </div>
        <div className="right-section">
          <h1>Login</h1>
          <form>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
