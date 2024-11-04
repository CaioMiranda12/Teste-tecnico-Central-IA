import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider, useAuth } from '../hooks/authContext';
import Chat from '../pages/Chat';
import Home from '../pages/Home';
import Login from '../pages/Login';
import { Register } from '../pages/Register';

export default function AppRoutes() {
  const { user } = useAuth() || {};
  const userId = user ? user.uid : null;
  const aiModelId = 1;

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/chat"
            element={<Chat userId={userId} aiModelId={aiModelId} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
