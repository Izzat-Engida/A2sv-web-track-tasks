import { useState, useEffect } from "react";

export function To_do_list() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedTask, setEditedTask] = useState<string>("");



  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const taskInput = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (task === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleRemoval = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleUpvote = (index: number) => {
    if (index > 0) {
      const temp = [...tasks];
      [temp[index], temp[index - 1]] = [temp[index - 1], temp[index]];
      setTasks(temp);
    }
  };

  const handleDownvote = (index: number) => {
    if (index < tasks.length - 1) {
      const temp = [...tasks];
      [temp[index], temp[index + 1]] = [temp[index + 1], temp[index]];
      setTasks(temp);
    }
  };

  const handleEditClick = (index: number) => {
    setEditingIndex(index);
    setEditedTask(tasks[index]);
  };

  const handleSaveClick = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask;
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditedTask("");
  };

  const button_style1 = {
    color: "white",
    backgroundColor: "green",
    fontSize: "1.2rem",
    fontWeight: "bold",
    padding: "5px 12px",
    marginLeft: "5px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };
  const button_style2 = { ...button_style1, backgroundColor: "red" };
  const button_style3 = { ...button_style1, backgroundColor: "lightblue", color: "black" };
  const button_style4 = { ...button_style1, backgroundColor: "orange" };

  return (
    <div
  style={{
    backgroundColor: "gray",
    height: "100vh",
    padding: "20px",
    maxWidth: "600px",
    width: "100%",     
    boxSizing: "border-box", 
  }}
>

      <div>
        <h1 style={{ fontSize: "4rem", color: "white" }}>To-Do-List</h1>
        <form onSubmit={taskInput}>
          <input
            style={{
              fontSize: "1.6rem",
              padding: "10px",
              border: "2px solid hsl(0,0%,80%,0.5)",
              borderRadius: "5px",
              color: "hsl(0,0%,0%,0.5)",
              marginRight: "10px",
            }}
            value={task}
            type="text"
            id="task"
            onChange={handleChange}
          />
          <button style={button_style1} type="submit">
            Add
          </button>
        </form>
      </div>
      <div>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              padding: "10px",
              backgroundColor: "hsl(0,0%,97%)",
              marginBottom: "10px",
              border: "3px solid hsl(0,0%,85%,0.75)",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <span style={{ flex: "1" }}>
              {editingIndex === index ? (
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                  style={{
                    fontSize: "1.5rem",
                    padding: "5px",
                    width: "100%",
                  }}
                />
              ) : (
                task
              )}
            </span>

            {editingIndex === index ? (
              <button style={button_style4} onClick={() => handleSaveClick(index)}>
                Save
              </button>
            ) : (
              <button style={button_style4} onClick={() => handleEditClick(index)}>
                Edit
              </button>
            )}

            <button style={button_style2} onClick={() => handleRemoval(index)}>
              Delete
            </button>
            <button style={button_style3} onClick={() => handleUpvote(index)}>
              ☝️
            </button>
            <button style={button_style3} onClick={() => handleDownvote(index)}>
              👇
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default To_do_list;
