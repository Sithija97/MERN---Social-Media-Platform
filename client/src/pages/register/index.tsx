import { Link } from "react-router-dom";
import "./index.scss";

export const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left-section">
          <h1>Register</h1>
          <form>
            <input type="text" name="username" placeholder="Username" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <input type="text" name="name" placeholder="Name" />
            <button type="submit">Register</button>
          </form>
        </div>
        <div className="right-section">
          <h1>Hello World</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button type="submit">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
