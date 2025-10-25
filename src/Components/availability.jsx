import React, { useState } from "react";
import "react-multi-date-picker/styles/layouts/mobile.css";
import "react-multi-date-picker/styles/colors/teal.css";
import "./styles.css";
import { FaRegLightbulb, FaCheckCircle, FaRegClock } from "react-icons/fa";
import CustomCalendar from "./calendar";
import SelectedDatesDisplay from "./selectedDateList";
import { Container } from "./components";

export default function Availability() {
  const [alwaysAvailable, setAlwaysAvailable] = useState(true);
  const [availabilityDates, setAvailabilityDates] = useState([]);
  const [lastAvailabilityPicked, setLastAvailabilityPicked] = useState(null);

  function handleRemoveDate(dateToRemove) {
    setAvailabilityDates((dates) =>
      dates.filter((d) => d.getTime() !== dateToRemove.getTime())
    );
  }

  function handleConfirm() {
    if (alwaysAvailable) {
      alert("Confirmed always available!");
    } else {
      alert(`Confirmed ${availabilityDates.length} dates!`);
    }
  }

  return (
    <>
    <div className="title-box">
    <Container 
      title={"Add your Availability"}
      sub={"Select the dates when you're available to provide covarage for other therapists"}
      />
      <div className="availability-banner success" style={{ marginBottom: 20 }}>
        <FaCheckCircle /> &nbsp; You currently have <b>365 dates saved</b>{" "}
        (Always Available mode)
      </div>
      </div>
      <div className="availability-grid" style={{ display: "flex", gap: 40 }}>
        <section
          className="availability-box"
          style={{
            flex: 1,
            minWidth: 300,
            background: "#f5f5f5",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <h2>Select Available Dates</h2>
          <p>Click on the calendar to add or remove dates below.</p>

          <div
            className="availability-mode-card"
            style={{
              background: "#e0e7ff",
              padding: 10,
              borderRadius: 10,
              marginBottom: 20,
            }}
          >
            <div
              className="availability-mode-header"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <FaRegClock className="availability-mode-icon" />
              <span>Always Available</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={alwaysAvailable}
                  onChange={() => setAlwaysAvailable(!alwaysAvailable)}
                />
                <span className="slider"></span>
              </label>
            </div>
            <div className="availability-mode-desc" style={{ fontSize: 14 }}>
              Toggle this to be available the entire year, or turn it off to
              select specific days manually.
            </div>
          </div>

          {!alwaysAvailable && (
            <CustomCalendar
              selectedDates={availabilityDates}
              setSelectedDates={setAvailabilityDates}
              lastPickedDate={lastAvailabilityPicked}
              setLastPickedDate={setLastAvailabilityPicked}
            />
          )}

          {alwaysAvailable && (
            <div
              className="availability-info-card success"
              style={{
                padding: 20,
                background: "#d1e7dd",
                borderRadius: 8,
                color: "#0f5132",
                marginTop: 20,
              }}
            >
              <FaRegClock className="availability-mode-icon" />
              <span>Always Available Mode</span>
              <div>You're set as available for all dates in the next year!</div>
            </div>
          )}
        </section>
        

        {/* Right side selected dates panel */}
        <section
          className="availability-box"
          style={{
            flex: 1,
            minWidth: 300,
            background: "#fff",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <h3>
            Selected Dates ({alwaysAvailable ? 365 : availabilityDates.length})
          </h3>
          <p>
            {alwaysAvailable
              ? "You're set as always available for the next year!"
              : "Your selected dates are below."}
          </p>

          <div
            className="availability-selected-card"
            style={{
              backgroundColor: "#f9f9f9",
              borderRadius: 10,
              padding: 16,
            }}
          >
            <FaRegClock className="availability-selected-icon" />
            <div style={{ marginTop: 8 }}>
              <div
                className="availability-selected-title"
                style={{ fontWeight: "bold", marginBottom: 6 }}
              >
                {alwaysAvailable ? "Always Available" : "Custom Dates Selected"}
              </div>
              <div
                className="availability-selected-count"
                style={{ marginBottom: 16, color: "#666" }}
              >
                {alwaysAvailable
                  ? "365 days selected"
                  : `${availabilityDates.length} day(s) selected`}
              </div>

              {!alwaysAvailable && (
                <SelectedDatesDisplay
                  selectedDates={availabilityDates}
                  onRemove={handleRemoveDate}
                />
              )}

              {alwaysAvailable && (
                <div
                  className="availability-selected-dates"
                  style={{ fontSize: 14, color: "#444" }}
                >
                  {new Date().toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  -{" "}
                  {new Date(
                    new Date().setFullYear(new Date().getFullYear() + 1)
                  ).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              )}
            </div>
          </div>

          <button
            className="confirm-btn"
            style={{
              width: "100%",
              marginTop: 24,
              backgroundColor: alwaysAvailable
                ? "#e6673b" // active color for always available
                : availabilityDates.length > 0
                ? "#e6673b" // same active color when custom dates are chosen
                : "#ccc", // inactive gray when no dates
              color: "#fff",
              padding: "12px 0",
              fontWeight: "bold",
              border: "none",
              borderRadius: 6,
              cursor:
                availabilityDates.length === 0 && !alwaysAvailable
                  ? "not-allowed"
                  : "pointer",
            }}
            disabled={!alwaysAvailable && availabilityDates.length === 0}
            onClick={handleConfirm}
          >
            Confirm{" "}
            {alwaysAvailable
              ? "Always Available"
              : `Selected Dates (${availabilityDates.length})`}
          </button>
        </section>
      </div>
      </>
  );
}
