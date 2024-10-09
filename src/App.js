import React, { useEffect } from 'react';

function App() {
  // Function to request notification permission
  const requestNotificationPermission = () => {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log('Notification permission granted.');
        } else {
          console.log('Notification permission denied.');
        }
      });
    }
  };

  // Function to send a notification
  const sendNotification = () => {
    if (Notification.permission === 'granted') {
      new Notification('Task Reminder', {
        body: 'You have a pending task to complete!',
        icon: 'https://via.placeholder.com/128', // Example icon, replace with your own
      });
      console.log("run")
    } else {
      console.log('Notifications are not allowed.');
    }
  };

  // Request permission on component mount
  useEffect(() => {
    requestNotificationPermission();
  }, []);

  return (
    <div>
      <h1>React Notifications</h1>
      <button onClick={sendNotification}>Send Notification</button>
    </div>
  );
}

export default App;
