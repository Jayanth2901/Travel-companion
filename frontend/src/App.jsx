import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { SocketProvider } from './context/SocketContext';
import { UserProvider } from './context/UserContext';
import Navbar from './components/navbar/Navbar';
import AppRoutes from './routes/AppRoutes';
import './styles/index.css';

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <SocketProvider>
        <UserProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              <AppRoutes />
            </main>
          </div>
        </UserProvider>
      </SocketProvider>
    </AuthProvider>
  </BrowserRouter>
);
export default App;
