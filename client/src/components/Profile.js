import React from "react";
import { Divider, Header } from "semantic-ui-react";
import ProfTab from "./profile/ProfileTab";
import PageFoot from "./page/PageFoot";


const Profile = () => {
  return (
    <div className="prof-page-container">
      <Header textAlign="center" className="profile-header">
        <h3>Trainer Profile</h3>
      </Header>
      <Divider />
      <ProfTab />
      <Divider section />

    </div>
  );
};

export default Profile;
