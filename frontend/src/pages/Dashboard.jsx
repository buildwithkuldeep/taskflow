import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      const { data } = await api.get("/tasks", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setTasks(data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 
                    text-gray-900 dark:text-gray-100 p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">TaskFlow Dashboard</h1>

        <button
          className="btn-primary bg-red-600 hover:bg-red-700"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>

      <button
        className="btn-primary mb-4"
        onClick={() => navigate("/create-task")}
      >
        + Add Task
      </button>

      {loading && <p className="text-xl mt-6">Loading tasks...</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="p-5 rounded-xl shadow 
                       bg-white dark:bg-gray-800 
                       text-gray-900 dark:text-gray-100 
                       border-l-4"
            style={{
              borderColor:
                task.priority === "High"
                  ? "#dc2626"
                  : task.priority === "Medium"
                  ? "#f97316"
                  : "#16a34a",
            }}
          >
            <h3 className="text-xl font-bold">{task.title}</h3>
            <p className="opacity-80 mb-2">{task.description}</p>

            <p className="mb-1">
              <span className="font-bold">Priority:</span> {task.priority}
            </p>

            <p>
              <span className="font-bold">Status:</span>{" "}
              {task.completed ? "Completed" : "Pending"}
            </p>

            <button
              className="btn-primary mt-3"
              onClick={() => navigate(`/edit-task/${task._id}`)}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
