import React, { createContext, useContext, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { AuthContext } from './AuthContext';

export const SocketContext = createContext(null);

export const SocketProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const socketRef = useRef(null);

  useEffect(() => {
    if (user) {
      socketRef.current = io(import.meta.env.VITE_SERVER_URL, {
        auth: { token: localStorage.getItem('token') }
      });
    }
    return () => socketRef.current?.disconnect();
  }, [user]);

  return <SocketContext.Provider value={socketRef.current}>{children}</SocketContext.Provider>;
};
