import React, { Component } from "react";
import {
  Image,
  Container,
  Divider,
  Menu,
  Grid,
  Segment,
  Form,
  Card,
  Header,
} from "semantic-ui-react";

import "../../App.css";

fetch = "https://api.pokemontcg.io/v2/cards/";

export default class ProfilePage extends Component {
  state = { activeItem: "bio" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="prof-page-container">
        <Header textAlign="center" className="profile-header">
          Your Profile
        </Header>
        <Divider />
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              <Menu.Item
                icon="address card"
                className="profile-btn"
                name="bio"
                active={activeItem === "bio"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                icon="archive"
                className="profile-btn"
                name="cards"
                active={activeItem === "cards"}
                onClick={this.handleItemClick}
              />
            </Menu>
          </Grid.Column>
          <Card.Group className="prof-card-group">
            <Card></Card>
            <Card></Card>
          </Card.Group>
          <Grid.Column stretched ></Grid.Column>
        </Grid>
      </div>
    );
  }
}

// {/* <Image src='' size="" rounded /> */}

// // const ProfilePage = () => (
// //     <div>
// //         <Container textAlign='center'>Your Profile</Container>
// //         <Divider />

// //     </div>
// // );
