import React from "react";
import "./styles.css"

export default function SelectedDatesDisplay({ selectedDates, onRemove }) {
    function formatDate(date) {
      return date instanceof Date
        ? `${date.toLocaleString("default", { month: "short" })} ${date.getDate()}, ${date.getFullYear()}`
        : "";
    }
  
    if (!Array.isArray(selectedDates) || selectedDates.length === 0) {
      return <div>No dates selected.</div>;
    }  return (
        <div className="dates-container">
        <div className="availability-selected-dates">
          {selectedDates
            .sort((a, b) => a - b)
            .map((date, idx) => (
              <div
                key={date.toISOString() + idx}
              >
                <span>{formatDate(date)}</span>
                <button
                  onClick={() => onRemove && onRemove(date)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#E6673B",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
        </div>
        </div>
      );
    }