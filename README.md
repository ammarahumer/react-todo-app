# TaskBoard — React To-Do App

A clean, responsive To-Do application built with React. Add, complete, and manage your daily tasks with a modern UI and persistent Local Storage — no backend required.

**Live demo:** _add your deployed link here_

## Features

- ✅ Add new tasks
- ✅ Delete tasks
- ✅ Mark tasks as complete / incomplete
- ✅ Live pending & completed task counters
- ✅ Friendly empty state when no tasks exist
- ✅ Data persistence with Local Storage
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Modern card-based UI with soft shadows and hover effects

## Tech Stack

- **React 18** — Functional Components & Hooks
- **Context API** — global task state management
- **Vite** — fast dev server & build tool
- **CSS3** — custom properties, flexbox, responsive layout

## Project Structure

```
src/
├── assets/
├── components/
│   ├── TaskInput.jsx     # Input form for adding tasks
│   ├── TaskItem.jsx      # Single task row (checkbox + delete)
│   └── TaskList.jsx      # Renders task list / empty state
├── context/
│   └── TaskContext.jsx   # Global state (tasks, add/delete/toggle, counts)
├── styles/
│   ├── index.css         # Base reset & CSS variables
│   └── App.css           # Component styling
├── App.jsx
└── main.jsx
```

## Installation

```bash
git clone https://github.com/your-username/react-todo-app.git
cd react-todo-app
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Future Improvements

- Task categories / tags
- Due dates and reminders
- Drag-and-drop reordering
- Dark mode toggle
- Edit task text inline

## GitHub Upload Commands

```bash
git init
git add .
git commit -m "Initial commit: React To-Do App"
git branch -M main
git remote add origin https://github.com/your-username/react-todo-app.git
git push -u origin main
```

---

**GitHub description:** A responsive React To-Do app with Context API state management, Local Storage persistence, and a modern blue-and-white UI.
