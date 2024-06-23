// src/ToastExample.js
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ToastExample.css';

const ToastExample = () => {
  const [message, setMessage] = useState('This is a toast message!');
  const [type, setType] = useState('success');
  const [position, setPosition] = useState('top-right');
  const [duration, setDuration] = useState(3000);

  const handleShowToast = () => {
    const toastOptions = {
      position: position,
      autoClose: duration,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };

    switch (type) {
      case 'success':
        toast.success(message, toastOptions);
        break;
      case 'error':
        toast.error(message, toastOptions);
        break;
      case 'info':
        toast.info(message, toastOptions);
        break;
      default:
        toast(message, toastOptions);
        break;
    }
  };

  return (
    <div className="toast-example">
      <h1>Toast Popup Example</h1>
      <div className="form-group">
        <label>Message:</label>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="success">Success</option>
          <option value="error">Error</option>
          <option value="info">Info</option>
        </select>
      </div>
      <div className="form-group">
        <label>Position:</label>
        <select value={position} onChange={(e) => setPosition(e.target.value)}>
          <option value="top-right">Top Right</option>
          <option value="top-left">Top Left</option>
          <option value="top-center">Top Center</option>
          <option value="bottom-right">Bottom Right</option>
          <option value="bottom-left">Bottom Left</option>
          <option value="bottom-center">Bottom Center</option>
        </select>
      </div>
      <div className="form-group">
        <label>Duration (ms):</label>
        <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
      </div>
      <button className="show-toast-button" onClick={handleShowToast}>Show Toast</button>

      <ToastContainer />
    </div>
  );
};

export default ToastExample;
