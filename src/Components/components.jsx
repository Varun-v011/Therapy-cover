import React from "react";
import './styles.css'

function Box(){
    return (
        <div className="box-container" style={{ border: "1px solid #eee", padding: "20px", borderRadius: "8px", width: "250px", textAlign: "center" }}>
          <div className="icon" style={{ fontSize: "24px", marginBottom: "10px" }}>{icon}</div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      );
    }
export default Box