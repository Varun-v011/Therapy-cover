import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./styles.css"

export default function CustomCalendar({ selectedDates, setSelectedDates, lastPickedDate, setLastPickedDate }) {

  function addUniqueDates(baseDates, newDates) {
    const baseTimestamps = baseDates.map(d => d.getTime());
    return [
      ...baseDates,
      ...newDates.filter(d => !baseTimestamps.includes(d.getTime()))
    ];
  }

  // Select entire week (Sun-Sat) containing the given date, ADD to selection
  function selectWeek(date) {
    if (!date) return;
    const dayOfWeek = date.getDay(); // 0 for Sunday - 6 for Saturday
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - dayOfWeek);
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      weekDays.push(day);
    }
    setSelectedDates(existing => addUniqueDates(existing, weekDays));
  }

  // Select whole month of the given date, ADD to selection
  function selectMonth(date) {
    if (!date) return;
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = [];
    let day = new Date(year, month, 1);
    while (day.getMonth() === month) {
      days.push(new Date(day));
      day.setDate(day.getDate() + 1);
    }
    setSelectedDates(existing => addUniqueDates(existing, days));
  }

  // Handle date clicks (multiple selection and tracking last picked)
  function handleSelect(dates) {
    setSelectedDates(dates || []);
    if (Array.isArray(dates) && dates.length > 0) {
      setLastPickedDate(dates[dates.length - 1]);
    } else {
      setLastPickedDate(null);
    }
  }

  return (
    <div>
      <div style={{ marginBottom: "12px" }}>
        <button className="select-btn"
          onClick={() => selectWeek(lastPickedDate)}
          disabled={!lastPickedDate}
          style={{ marginRight: "10px" }}
        >
          Select Week
        </button>
        <button className="select-btn"
          onClick={() => selectMonth(lastPickedDate)}
          disabled={!lastPickedDate}
        >
          Select Month
        </button>
      </div>
      <DayPicker
        mode="multiple"
        selected={selectedDates}
        onSelect={handleSelect}
      />
    </div>
  );
}
