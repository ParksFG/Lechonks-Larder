import React, { Component } from "react";
import {
  Divider,
  Menu,
  Grid,
  Form,
  Header,
} from "semantic-ui-react";

import "../../App.css";

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
          <Grid.Column stretched width={50}>
            <div className="ui segment" style={{width: '585px', padding: '0'}}>
                <Form>

                </Form>
            </div>
          </Grid.Column>
          
        </Grid>
      </div>
    );
  }
}



{/* <Card.Group className="prof-card-group">
<Card>
    <Image src='https://images.pokemontcg.io/swsh9/18_hires.png' />
</Card>
<Card>
    <Image src='https://images.pokemontcg.io/swsh9/18_hires.png' />
</Card>
<Card>
    <Image src='https://images.pokemontcg.io/swsh9/18_hires.png' />
</Card>
</Card.Group> */}