import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import MainLayout from './components/layout/MainLayout';
// Import your placeholder pages
import RandomJoke from './pages/jokes/RandomJoke';
import MyJokes from './pages/jokes/MyJokes';
import AddJoke from './pages/jokes/AddJoke';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/random-joke" replace />} />
          <Route path="/random-joke" element={<RandomJoke />} />
          <Route path="/my-jokes" element={<MyJokes />} />
          <Route path="/add-joke" element={<AddJoke />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}