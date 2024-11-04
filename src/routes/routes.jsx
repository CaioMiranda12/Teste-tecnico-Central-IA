import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from '../hooks/authContext';
import Chat from '../pages/Chat';
import Home from '../pages/Home';
import Login from '../pages/Login';
import { Register } from '../pages/Register';

export default function AppRoutes() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
