import React from "react";

function App() {
  const userName = "Prince";

  return <Dashboard userName={userName} />;
}

function Dashboard({ userName }) {
  return <Profile userName={userName} />;
}

function Profile({ userName }) {
  return <Greeting userName={userName} />;
}

function Greeting({ userName }) {
  return <h1>Hello, {userName}!</h1>;
}

export default App;