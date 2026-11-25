// App.jsx
import { Link, Routes, Route, useParams } from "react-router";

function Home() {
  return <h1>Home page</h1>;
}

function About() {
  return <h1>About page</h1>;
}

function UserProfile() {
  const { userId } = useParams();
  return <h1>Profile for user {userId}</h1>;
}

function NotFound() {
  return <h1>Page not found</h1>;
}

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/users/42">Example profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:userId" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}