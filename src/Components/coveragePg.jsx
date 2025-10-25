import React, { useState } from "react";
import "react-multi-date-picker/styles/layouts/mobile.css";
import "react-multi-date-picker/styles/colors/teal.css";
import "./styles.css";
import { FaRegLightbulb, FaCheckCircle, FaRegClock } from "react-icons/fa";
import CustomCalendar from "./calendar";
import { Container } from "./components";
import SelectedDatesDisplay from "./selectedDateList";

export default function CoverPage(){
    
  const [CoverageDates, setCoverageDates] = useState([]);
  const [lastCoverageDatesPicked, setLastCoverageDatesPicked] = useState(null);

  function handleRemoveDate(dateToRemove) {
    setCoverageDates((dates) =>
      dates.filter((d) => d.getTime() !== dateToRemove.getTime())
    );
  }

  function handleConfirm() {
      alert(`Confirmed ${CoverageDates.length} dates!`);
    }

  return (
    <>
     <div className="title-box">
    <Container 
      title={"Request Coverage"}
      sub={"Select the dates when you need coverage for practice"}
      />
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
          <h2>Select Coverage Dates</h2>
          <p>Click on the calendar to add or remove dates below.</p>
          <CustomCalendar
              selectedDates={CoverageDates}
              setSelectedDates={setCoverageDates}
              lastPickedDate={lastCoverageDatesPicked}
              setLastPickedDate={setLastCoverageDatesPicked}
            />
          </section>
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
            <h3>Selected Dates({CoverageDates.length})</h3>
            <p>Review your selected coverage dates</p>
         
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
             Dates Selected
              </div>
              <div
                className="availability-selected-count"
                style={{ marginBottom: 16, color: "#666" }}
              >
                {`${CoverageDates.length} day(s) selected`}
              </div>

              {
                <SelectedDatesDisplay
                  selectedDates={CoverageDates}
                  onRemove={handleRemoveDate}
                />
              }
              </div>
              </div>
              <button
            className="confirm-btn"
            style={{
              width: "100%",
              marginTop: 24,
              backgroundColor: 
                CoverageDates.length > 0
                ? "#e6673b" // same active color when custom dates are chosen
                : "#ccc", // inactive gray when no dates
              color: "#fff",
              padding: "12px 0",
              fontWeight: "bold",
              border: "none",
              borderRadius: 6,
              cursor:
              CoverageDates.length === 0
                  ? "not-allowed"
                  : "pointer",
            }}
            onClick={handleConfirm}
          >
            Confirm{" "}
            {
                `Selected Dates (${CoverageDates.length})`}
          </button>
        </section>
          </div>
    </>

  );
  }
