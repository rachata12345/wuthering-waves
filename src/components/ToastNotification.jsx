import React from 'react';

export default function ToastNotification({ toast }) {
  if (!toast) return null;

  return (
    <div className="sci-toast-container show">
      <div className="sci-toast-icon">✦</div>
      <div className="sci-toast-body">
        <div className="sci-toast-title">SOLARIS-3 NOTICE</div>
        <div className="sci-toast-message">{toast}</div>
      </div>
    </div>
  );
}
