# Foobar

Todo List made with React frontend and FastAPI Backend.

## Installation

Clone this repository first and cd into it.

### Setting up backend

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install libraries.

1. Install 'virtualenv' package if you do not have it already

```bash
pip install virtualenv
```

2. Create a virtualenv with any
   name, for instance

```bash
virtualenv todobackend
```

3. cd into this folder, todobackend

```bash
cd todobackend
```

4. Copy and paste app folder and requirements.txt in todobackend folder from the backend folder

5. Install the dependencies in the todobackend virtualenv

```bash
pip3 install -r requirements.txt
```

6. Run backend

```bash
uvicorn app.main:app --reload
```

It will run on http://localhost:8000

### Setting up frontend

1. cd into the frontend folder

```bash
cd frontend
```

2. Install dependencies

```bash
npm install
```

3. Run the server

```bash
npm run dev
```

It will the run the frontend and will give you a server URL, open that in the browser. It will either run on http://localhost:3000 or http://localhost:5173

## Usage

To load anything in the frontend, the backend should already be running.

Please make sure the backend is accessible on http://127.0.0.1:8000 before starting anything else.

Once you have both the frontend and the backend running, navigate to http://localhost:5173 or http://localhost:3000 where the frontend is running.

## Live Demo

Due to my current schedule, this is the most I can do at the moment.

I'm attaching a screenshot below so you have an idea on how it looks, but to use it, you will have to go through the installation procedure yourself.

Thanks.

![alt text](https://suyashagarwal.com/wp-content/uploads/2024/07/Screenshot-2024-07-18-at-10.36.21 PM.png "TodoList Image")
