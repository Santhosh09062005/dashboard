import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  function handleClick() {
    alert("Request Submitted: " + text);
    setText("");
  }

  return (
    <div className="container">
      <div className="navbar">
        <img src="/images/logo.png" className="logo" alt="Logo" />
        <ul className="nav-links">
          <li>Dashboard</li>
          <li>Requests</li>
          <li>Profile</li>
        </ul>
      </div>

      <div className="main-content">
        <h2>Dashboard</h2>

        <div className="box">
          <p><b>Name:</b> aaaaaaaaaaaa</p>
          <p><b>Username:</b> aaaaaaaa</p>
          <p><b>College Mail:</b> aaaa@srmist.edu.in</p>
        </div>

        <div className="box">
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
