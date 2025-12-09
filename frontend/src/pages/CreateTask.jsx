import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const CreateTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Low",
  });

  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/tasks", task, {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      navigate("/dashboard");
    } catch (err) {
      alert("Error creating task");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gray-100 dark:bg-gray-900 
                    text-gray-900 dark:text-gray-100">

      <form className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Create Task</h2>

        <input
          type="text"
          placeholder="Title"
          className="input-field"
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />

        <textarea
          placeholder="Description"
          className="input-field h-24"
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />

        <select
          className="input-field"
          onChange={(e) => setTask({ ...task, priority: e.target.value })}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button className="btn-primary w-full mt-3">Create Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
