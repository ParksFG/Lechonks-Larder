import React, { Component } from "react";
import { Divider, Header, Footer } from "semantic-ui-react";
import ProfTab from "../../components/profileTab";
import PageFoot from "../../components/pagefoot";

import "../../App.css";

const ProfilePage = () => (
  <div className="prof-page-container">
    <Header textAlign="center" className="profile-header">
      <h3>Profile</h3>
    </Header>
    <Divider />
    <ProfTab />
    <Divider section />

    <PageFoot />
  </div>
);

export default ProfilePage;
