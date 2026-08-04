import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { useTaskContext } from "./context/TaskContext";
import "./styles/App.css";

function App() {
  const { pendingCount, completedCount } = useTaskContext();

  return (
    <div className="app">
      <div className="app__container">
        <header className="app__header">
          <h1 className="app__title">TaskBoard</h1>
          <p className="app__subtitle">Stay on top of your day, one task at a time.</p>
        </header>

        <main className="app__card">
          <TaskInput />

          <div className="app__stats">
            <div className="stat-pill stat-pill--pending">
              <span className="stat-pill__count">{pendingCount}</span>
              <span className="stat-pill__label">Pending</span>
            </div>
            <div className="stat-pill stat-pill--completed">
              <span className="stat-pill__count">{completedCount}</span>
              <span className="stat-pill__label">Completed</span>
            </div>
          </div>

          <TaskList />
        </main>

        <footer className="app__footer">
          <p>Built with React &middot; Data saved locally in your browser</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
