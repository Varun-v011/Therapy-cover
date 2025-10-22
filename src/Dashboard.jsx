import React from "react";
import "./App.css"
import { BoxButton } from "./Components/components";
import { InfoBox } from "./Components/components";
import { FaRegCalendarCheck, FaUserCircle, FaHeart, FaChartLine } from "react-icons/fa";

function Dashboard(){

    return(
        <div className="dashboard-main">
      <div className="dashboard-row dashboard-row-top">
        <BoxButton
          icon={<FaRegCalendarCheck />}
          title="I'm Available to Cover"
          description="Set dates when you're available to provide coverage for other therapists"
          colorClass="blue"
          onClick={() => alert("Available to cover clicked")}
        />
        <BoxButton
          icon={<FaUserCircle />}
          title="I Need Coverage"
          description="Request coverage for dates when you'll be away from your practice"
          colorClass="green"
          onClick={() => alert("Need coverage clicked")}
        />
        <BoxButton
          icon={<FaHeart />}
          title="Messages"
          description="Chat with other therapists about coverage opportunities"
          colorClass="purple"
          onClick={() => alert("Messages clicked")}
        />
      </div>
      <div className="dashboard-row dashboard-row-bottom">
        <InfoBox title="Your Upcoming Coverage">
          <div>No upcoming coverage scheduled</div>
        </InfoBox>
        <InfoBox title="Recent Activity">
          <div style={{ textAlign: "center", color: "#666" }}>
            <FaChartLine style={{ fontSize: "24px", margin: "8px 0" }} />
            <div>No recent activity</div>
            <small>Your activities will appear here</small>
          </div>
        </InfoBox>
      </div>
    </div>
    );
}

export default Dashboard
