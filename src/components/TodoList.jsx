import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const TodoList = ({ tasks, updateTasks }) => {
  const handleToggle = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    updateTasks(updatedTasks);
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    updateTasks(updatedTasks);
  };

  return (
    <List>
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(task.id)}>
              <DeleteIcon/>
            </IconButton>
          }
        >
          <Checkbox
            edge="start"
            checked={task.completed}
            onChange={() => handleToggle(task.id)}
          />
          <ListItemText
            primary={
              <Typography
                variant="body1"
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              >
                {task.title}
              </Typography>
            }
            secondary={task.description}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
