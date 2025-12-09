import { useState } from "react";
import api from "../api/api";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", form);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 
                    text-gray-900 dark:text-gray-100 flex items-center justify-center">

      <form className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

        <input
          type="text"
          placeholder="Name"
          className="input-field"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

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

        <button className="btn-primary w-full mt-3">Register</button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
