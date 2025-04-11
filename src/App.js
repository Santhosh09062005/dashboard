import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  function handleClick() {
    alert("Submitted: " + text);
    setText("");
  }

  return (
    <div className="container">
      <div className="sidebar">
        <img src="/images/logo.png" alt="College Logo" className="logo" />
        <h2>QR Dashboard</h2>
        <ul>
          <li>Dashboard</li>
          <li>Requests</li>
          <li>Profile</li>
        </ul>
      </div>

      <div className="main-content">
        <h1>Dashboard</h1>
        <div className="user-box">
          <p><strong>Name:</strong> aaaaaaaaaaaa</p>
          <p><strong>User Id:</strong> aaaaaaaa</p>
          <p><strong>College Mail:</strong> aaaa@srmist.edu.in</p>
        </div>

        <div className="request-box">
          <h3>Request Certificate</h3>
          <input
            type="text"
            placeholder="Enter certificate name"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleClick}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
