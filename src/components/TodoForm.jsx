import React from 'react';
import { Formik, Form } from 'formik';
import { TextField, Button } from '@mui/material';
import * as Yup from 'yup';

const TodoForm = ({ tasks, updateTasks }) => {
  const handleAddTask = (values, { resetForm }) => {
    const newTask = {
      id: Date.now(),
      title: values.title,
      description: values.description,
      completed: false,
    };
    const updatedTasks = [...tasks, newTask];
    updateTasks(updatedTasks);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ title: '', description: '' }}
      validationSchema={Yup.object({
        title: Yup.string().required('Required'),
        description: Yup.string(),
      })}
      onSubmit={handleAddTask}
    >
      {({ handleChange, handleBlur, values, errors, touched }) => (
        <Form>
          <TextField
            fullWidth
            margin="normal"
            label="Title"
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.title && Boolean(errors.title)}
            helperText={touched.title && errors.title}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Description"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.description && Boolean(errors.description)}
            helperText={touched.description && errors.description}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Task
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default TodoForm;
