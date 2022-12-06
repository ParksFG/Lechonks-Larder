import React from "react";
import { Tab, Card } from "semantic-ui-react";
import ProfCards from "./ProfileCards";
import ProfileBio from "./ProfileBio";
import ProfWishlist from "./ProfileWishlist";

const panes = [
  {
    menuItem: "Cards",
    render: () => (
      <Tab.Pane attached={false}>
        <Card>
          <ProfCards />
        </Card>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Bio",
    render: () => (
      <Tab.Pane attached={false}>
        <ProfileBio />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Wishlist",
    render: () => (
    <Tab.Pane attached={false}>
        <ProfWishlist />
    </Tab.Pane>
    ),
  },
];

const ProfTab = () => <Tab menu={{ secondary: true }} panes={panes} />;

export default ProfTab;