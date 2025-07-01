import React, { useState, useEffect } from "react";

const Main = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("task");
    if (storedTasks) {
      setTask(JSON.parse(storedTasks));
    }
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleTaskChange = () => {
    //firstly check if the input is empty
    if (input.empty === "") return alert("Please enter a task");
    //then check if the task already exists
    if (input.trim === "") return alert("Task already exists");

    const newTask = {
      task: input,
      id: Math.random() * 100 + 1,
      completed: false,
    };
    const updatedTask = [...task, newTask];
    setTask(updatedTask);
    localStorage.setItem("task", JSON.stringify(updatedTask));

    //have to empty the input
    setInput("");
  };
  const handleCompleteTask = (id) => {
    const updatedTask = task.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
    });
    setTask(updatedTask);
    localStorage.setItem("task", JSON.stringify(updatedTask));
  };

  const handleDeleteTask = (id) => {
    const updatedTask = task.filter((item) => item.id !== id);
    setTask(updatedTask);
    localStorage.setItem("task", JSON.stringify(updatedTask));
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-zinc-400 ">
      <div className="flex w-[60%] h-[40%] flex-col  items-center bg-zinc-200 rounded-2xl shadow-lg py-3 overflow-y-auto">
        <h2 className="text-xl font-serif mt-4">Todo List</h2>
        <div className="flex justify-center items-center w-[80%] gap-2 mt-4">
          <input
            type="text"
            value={input}
            className="py-1 border-2 border-zinc-800 w-[70%] px-2 rouned-md "
            placeholder="Enter Your Task"
            onChange={(e) => handleInputChange(e)}
          />
          <button
            className="px-3 py-1 bg-zinc-800 cursor-pointer font-serif text-white rounded-lg hover:bg-zinc-700"
            onClick={handleTaskChange}
          >
            Add Task
          </button>
        </div>
        {task &&
          task.map((item) => {
            return (
              <div
                className="flex justify-between items-center w-[80%] mt-4 bg-zinc-300 p-2 rounded-lg"
                key={item.id}
              >
                <div
                  className={`flex justify-between items-center w-full ${
                    item.completed ? " text-zinc-500" : ""
                  }`}
                >
                  <p className={`${item.completed ? "line-through" : ""}`}>
                    {item.task}
                  </p>
                  <div className="flex items-center space-x-2">
                    <button
                      className="text-sm px-2 py-1 bg-green-400 hover:bg-green-600 cursor-pointer "
                      onClick={() => handleCompleteTask(item.id)}
                    >
                      {item.completed ? "completed" : "complete"}
                    </button>
                    <button
                      className="text-sm px-2 py-1 bg-red-400 hover:bg-red-600 cursor-pointer"
                      onClick={() => handleDeleteTask(item.id)}
                    >
                      delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Main;
