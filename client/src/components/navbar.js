import React from "react";
import { List, Segment } from "semantic-ui-react";

const NavBar = () => {
  return (
    <div>
    <Segment textAlign="center">
      <List horizontal size="massive">
        <List.Item>
          <List.Content>
            <List.Header a href="/" color="white">
              Home
            </List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header a href="/Search">
              Search
            </List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header a href="/Login">
              Login
            </List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header a href="/Profile">
              Profile
            </List.Header>
          </List.Content>
        </List.Item>
      </List>
    </Segment>
  </div>
  );
};

export default NavBar;
