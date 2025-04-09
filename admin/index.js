
import React, { useState } from 'react';

const AdminPanel = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (password === "elgamesadmin") {
      setLoggedIn(true);
    } else {
      setError("Falsches Passwort.");
    }
  };

  if (!loggedIn) {
    return (
      <div className="login-container">
        <input
          type="password"
          placeholder="Admin Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p>{error}</p>}
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {/* Hier kommt der Rest des Dashboards mit Funktionen */}
    </div>
  );
};

export default AdminPanel;
