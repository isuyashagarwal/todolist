import React, { useState } from 'react';

const CreateTask = ({ onCreateTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('todo');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const task = {
            title,
            description,
            status,
        };

        onCreateTask(task);
        setTitle('');
        setDescription('');
        setStatus('todo');
    };


    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <h2 className="mt-4">Create Task</h2>
                    <form>
                        <div className="form-group mb-3">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter task title"
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter task description"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="status">Status</label>
                            <select
                                className="form-control"
                                id="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value="todo">Todo</option>
                                <option value="in_progress">In Progress</option>
                                <option value="done">Done</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-primary mt-3 w-100" onClick={handleSubmit}>
                            Create Task
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateTask;
