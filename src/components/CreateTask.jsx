import { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

function CreateTask({ tasks, setTasks }) {
  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "todo", // also can be doing and done
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.name.length < 3) {
      setTask({
        id: "",
        name: "",
        status: "todo",
      });
      return toast.error("Task needs over 3 characters.");
    }

    if (task.name.length > 100) {
      setTask({
        id: "",
        name: "",
        status: "todo",
      });
      return toast.error("Task can't be over 100 characters.");
    }

    setTasks((prevTasks) => {
      // Initialize as an empty array if prevTasks is undefined
      const prev = Array.isArray(prevTasks) ? prevTasks : [];

      const updatedTasks = [...prev, task];


      localStorage.setItem("tasks", JSON.stringify(updatedTasks));

      return updatedTasks;
    });

    // SetTasks[...tasks, task]

    toast.success("Task Created");

    setTask({
      id: "",
      name: "",
      status: "todo",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="border-2 border-slate-300 bg-slate-100 rounded-md mr-4 h-12 w-64 px-1"
        value={task.name}
        onChange={(e) =>
          setTask({ ...task, id: uuidv4(), name: e.target.value })
        }
      />
      <button className="bg-cyan-500 rounded-md px-4 h-12 text-white">
        Create
      </button>
    </form>
  );
}

export default CreateTask;
