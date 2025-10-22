import React from "react";
import './styles.css';

export function BoxButton({ icon, title, description, onClick, colorClass }) {
    return (
      <button className={`dashboard-box ${colorClass}`} onClick={onClick}>
        <div className="dashboard-box-icon">{icon}</div>
        <div>
          <div className="dashboard-box-title">{title}</div>
          <div className="dashboard-box-description">{description}</div>
        </div>
      </button>
    );
  }

  
export function InfoBox({ title, children }) {
    return (
      <div className="dashboard-infobox">
        <div className="dashboard-infobox-title">{title}</div>
        <div>{children}</div>
      </div>
    );
  }
  export function ProfileBox({ title, icon, children }) {
    return (
      <section className="profile-box">
        <div className="profile-box-title">
          {icon && <span className="profile-box-icon">{icon}</span>} {title}
        </div>
        <div className="profile-box-content">{children}</div>
      </section>
    );
  }



