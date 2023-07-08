import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/users', {
        username,
        email,
        password,
      });
      console.log(response.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h1>Instagram Clone</h1>
      <Router>
        <Routes>
          <Route path="/signup" element={
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Sign Up</button>
            </form>
          }/>
          <Route path="/" element={
            <div>
              <p>Welcome to the Instagram Clone</p>
              <Link to="/signup">Sign Up</Link>
            </div>
          }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
