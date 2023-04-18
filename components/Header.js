import "../style.css";

function Header({ showForm, setShowForm }) {
  return (
    <header>
      <div className="logo">
        <img src="logo.png" height="68" width="68" alt="Today I Learned Logo" />
        <h1>Today I learned</h1>
      </div>
      <div className="button-container">
        <button
          className="btn btn-large btn-open"
          onClick={() => setShowForm((show) => !show)}
        >
          {showForm ? "Close" : "Share a Fact"}
        </button>
      </div>
    </header>
  );
}

export default Header;
