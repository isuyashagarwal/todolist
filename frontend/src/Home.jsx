import React, { useState, useEffect } from 'react';
import axiosInstance from './axiosInstance';
import CreateTask from './CreateTask';

function Home() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);
    
    const fetchTasks = async () => {
        try {
            const response = await axiosInstance.get('/tasks');
            setTodos(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const createTask = async (task) => {
        try {
            const response = await axiosInstance.post('/tasks', task);
            setTodos([...todos, response.data]);
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    const updateTaskStatus = async (taskId, status) => {
        try {
            const response = await axiosInstance.put(`/tasks/${taskId}`, { status });
            const updatedTodos = todos.map(todo => 
                todo.id === taskId ? { ...todo, status: response.data.status } : todo
            );
            setTodos(updatedTodos);
        } catch (error) {
            console.error('Error updating task status:', error);
        }
    };

    const deleteTask = async (taskId) => {
        try {
            await axiosInstance.delete(`/tasks/${taskId}`);
            const updatedTodos = todos.filter(todo => todo.id !== taskId);
            setTodos(updatedTodos);
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Todo List</h2>
            <CreateTask onCreateTask={createTask} />
            {todos.length === 0 ? (
                <div className="alert alert-info mt-4 text-center">
                    <h4>No records</h4>
                </div>
            ) : (
                <div className="list-group mt-4">
                    {todos.map(todo => (
                        <div key={todo.id} className="list-group-item">
                            <h4>{todo.title}</h4>
                            <p>{todo.description}</p>
                            <p>Status: <span className={`badge ${getStatusBadgeClass(todo.status)}`}>{todo.status}</span></p>
                            <div className="btn-group">
                                {todo.status !== 'in_progress' && (
                                    <button className="btn btn-warning" onClick={() => updateTaskStatus(todo.id, 'in_progress')}>
                                        In Progress
                                    </button>
                                )}
                                {todo.status !== 'done' && (
                                    <button className="btn btn-success" onClick={() => updateTaskStatus(todo.id, 'done')}>
                                        Done
                                    </button>
                                )}
                                <button className="btn btn-danger" onClick={() => deleteTask(todo.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

const getStatusBadgeClass = (status) => {
    switch (status) {
        case 'todo':
            return 'bg-secondary';
        case 'in_progress':
            return 'bg-warning';
        case 'done':
            return 'bg-success';
        default:
            return 'bg-secondary';
    }
};

export default Home;
