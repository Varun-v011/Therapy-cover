import React from "react";
import "./App.css";
import { ProfileBox } from "./Components/components";
import {  FaEnvelope, FaPhoneAlt, FaUser, FaBriefcase, FaCertificate, FaInfoCircle, FaClinicMedical, FaArrowLeft, FaEdit} from "react-icons/fa";
import { Link } from "react-router-dom";


function Profile({ profile }) {
  if (!profile) {
    // Render loading or placeholder state when no profile data is available
    return (
      <div className="profile-main">
        <div className="profile-header">
          <button className="profile-back-btn">
            <FaArrowLeft /> <Link to="/"> Back to Dashboard</Link>
          </button>
          <button className="profile-edit-btn">
            <FaEdit /> Edit Profile
          </button>
        </div>
        <div className="profile-card">
          <FaUser className="profile-avatar" />
          <div>
            <div className="profile-name">Loading...</div>
            <div className="profile-roles"></div>
          </div>
        </div>
        <div className="profile-details-grid">
          <ProfileBox title="Contact Information" icon={<FaEnvelope />}>
            <div className="profile-contact-item">Contact info loading...</div>
          </ProfileBox>
          <ProfileBox title="License Information" icon={<FaCertificate />}>
            <div>License info loading...</div>
          </ProfileBox>
          <ProfileBox title="Practice Details" icon={<FaBriefcase />}>
            <div>Practice info loading...</div>
          </ProfileBox>
          <ProfileBox title="Clinical Information" icon={<FaClinicMedical />}>
            <div>Clinical info loading...</div>
          </ProfileBox>
        </div>
      </div>
    );
  }

  // Render the actual profile details when profile data is present
  return (
    <div className="profile-main">
      <div className="profile-header">
        <button className="profile-back-btn">
          <FaArrowLeft /> Back to Dashboard
        </button>
        <button className="profile-edit-btn">
          <FaEdit /> Edit Profile
        </button>
      </div>
      <div className="profile-card">
        <FaUser className="profile-avatar" />
        <div>
          <div className="profile-name">{profile.name}</div>
          <div className="profile-roles">{profile.roles}</div>
        </div>
      </div>
      <div className="profile-details-grid">
        <ProfileBox title="Contact Information" icon={<FaEnvelope />}>
          <div className="profile-contact-item">
            <FaEnvelope />
            <span>{profile.email}</span>
          </div>
          <div className="profile-contact-item">
            <FaPhoneAlt />
            <span>{profile.phone}</span>
          </div>
        </ProfileBox>
        <ProfileBox title="License Information" icon={<FaCertificate />}>
          <div><b>License Type:</b> {profile.licenseType}</div>
          <div><b>License Numbers:</b> {profile.licenseNumbers}</div>
          <div>
            <b>Liability Insurance:</b>{" "}
            <span className={profile.liabilityInsurance === "Yes" ? "profile-badge-yes" : "profile-badge-no"}>
              {profile.liabilityInsurance}
            </span>
          </div>
          <div>
            <b>Licensed States:</b>
            {profile.licensedStates && (
              <div className="profile-tag-list">{profile.licensedStates.map(state => (
                <span key={state} className="profile-tag">{state}</span>
              ))}</div>
            )}
          </div>
        </ProfileBox>
        <ProfileBox title="Practice Details" icon={<FaBriefcase />}>
          <div><b>Service Type:</b> {profile.serviceType}</div>
          <div><b>Session Fees:</b> {profile.sessionFees}</div>
          <div><b>Takes Insurance:</b>{" "}
            <span className={profile.takesInsurance === "Yes" ? "profile-badge-yes" : "profile-badge-no"}>
              {profile.takesInsurance}
            </span>
          </div>
        </ProfileBox>
        <ProfileBox title="Clinical Information" icon={<FaClinicMedical />}>
          <div><b>Populations:</b><br/>{profile.populations}</div>
          <div><b>Specialties:</b><br/>{profile.specialties}</div>
          <div><b>Approaches:</b><br/>{profile.approaches}</div>
        </ProfileBox>
      </div>
    </div>
  );
}

export default Profile;
