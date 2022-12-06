import React from "react";
import { Divider, Header } from "semantic-ui-react";
import ProfTab from "./profile/ProfileTab";
import PageFoot from "./page/PageFoot";
import Cards from "./cards"


const Profile = () => {
  return (
    <div className="prof-page-container">
      <Header textAlign="center" className="profile-header">
        <h3>Trainer Profile</h3>
      </Header>
      <Divider />
      <ProfTab />
      <Divider section />
      <Header as= 'h3'>Cards</Header>
        <Cards />
      <PageFoot />
    </div>
  );
};

export default Profile;
