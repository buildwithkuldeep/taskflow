import { useState } from "react";
import api from "../api/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post("/auth/login", form);
      login(data);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 
                    text-gray-900 dark:text-gray-100 flex items-center justify-center">

      <form className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="input-field"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="input-field"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="btn-primary w-full mt-3">Login</button>

        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-500">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
