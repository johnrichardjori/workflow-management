import { useState } from "react";
import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import "./work-flow.css";

const statuses = ["Pending", "In Progress", "Completed"];

export default function WorkflowApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  // const [selectedStatus, setSelectedStatus] = useState("Pending");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), name: newTask, status: "Pending" }]);
    setNewTask("");
  };

  const updateStatus = (id, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="container">
      <Typography variant="h4" className="title">
        Workflow Management
      </Typography>
      <div className="input-container">
        <TextField
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task..."
          className="input"
          variant="outlined"
        />
        <Button
          onClick={addTask}
          className="button"
          variant="contained"
          color="primary"
        >
          Add Task
        </Button>
      </div>
      <div className="task-list">
        {tasks.map((task) => (
          <Card key={task.id} className="task-card">
            <CardContent className="task-content">
              <Typography>{task.name}</Typography>
            </CardContent>
            <CardActions>
              <Select
                value={task.status}
                onChange={(e) => updateStatus(task.id, e.target.value)}
                className="select"
                variant="outlined"
              >
                {statuses.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </Select>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
