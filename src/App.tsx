import "./App.css";

function App() {
  return (
    <>
      <header>
        <a href="#">
          <img src="./src/assets/logo.png" alt="Company Logo" />
        </a>
        <nav>
          <a href="#">Dashboard</a>
          <a href="#">Projects</a>
          <a href="#">Team</a>
          <a href="#">Calendar</a>
        </nav>
        <div>
          <img src="./src/assets/avatar.jpg" alt="User" />
          <div>
            <a href="#">Profile</a>
            <a href="#">Settings</a>
            <a href="#">Logout</a>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
