import React from "react";

import "./style.scss";

const EmptyState = ({ icon, text }) => {
  return (
    <div className="empty-state">
      <img alt="Empty state icon" className="empty-state-icon" src={icon} />
      <span>{text}</span>
    </div>
  );
}

export default EmptyState;