const OfflinePage = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div className="offline-page" style={{ textAlign: "center" }}>
        <div
          className="offline-message"
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1 style={{ fontSize: "24px", color: "#333" }}>
            Oops! You're offline.
          </h1>
          <p style={{ fontSize: "16px", color: "#666" }}>
            Please check your internet connection and try again.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfflinePage;
