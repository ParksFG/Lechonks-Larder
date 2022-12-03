import React, { Component } from "react";
import { Divider, Header } from "semantic-ui-react";
import ProfTab from "../../components/profileTab";

import "../../App.css";

const ProfilePage = () => (
  <div className="prof-page-container">
    <Header textAlign="center" className="profile-header">
      Your Profile
    </Header>
    <Divider />
    <ProfTab />
  </div>
);

export default ProfilePage;
