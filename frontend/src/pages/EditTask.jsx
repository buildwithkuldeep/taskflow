import { useState, useEffect } from "react";
import api from "../api/api";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const EditTask = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Low",
    completed: false,
  });

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await api.get(`/tasks/${id}`, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setTask(data);
      } catch {
        alert("Failed to fetch task");
      }
    };

    fetch();
  }, []);

  const updateTask = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/tasks/${id}`, task, {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      navigate("/dashboard");
    } catch {
      alert("Error updating task");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gray-100 dark:bg-gray-900 
                    text-gray-900 dark:text-gray-100">

      <form className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-96"
        onSubmit={updateTask}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Edit Task</h2>

        <input
          type="text"
          className="input-field"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />

        <textarea
          className="input-field h-24"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />

        <select
          className="input-field"
          value={task.priority}
          onChange={(e) => setTask({ ...task, priority: e.target.value })}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <label className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={(e) =>
              setTask({ ...task, completed: e.target.checked })
            }
          />
          <span>Completed</span>
        </label>

        <button className="btn-primary w-full">Update Task</button>
      </form>
    </div>
  );
};

export default EditTask;
