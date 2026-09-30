import { useState, useEffect } from 'react';
import { notificationService } from '../services/notificationService';

export const useNotification = () => {
  const [notifications, setNotifications] = useState([]);
  const [unread, setUnread]               = useState(0);

  const fetchNotifications = async () => {
    const data = await notificationService.getAll();
    setNotifications(data);
    setUnread(data.filter(n => !n.read).length);
  };

  useEffect(() => { fetchNotifications(); }, []);

  return { notifications, unread, refetch: fetchNotifications };
};
