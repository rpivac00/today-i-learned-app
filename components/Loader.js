import "../style.css";

function Loader({ isUploading }) {
  return (
    <div className="loader-container">
      <p>{isUploading ? "Uploading..." : "Loading..."}</p>
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
