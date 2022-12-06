import React from "react";
import { Segment, Header } from "semantic-ui-react";

const PokeHeader = ({ name }) => {
  return (
    <Segment inverted>
      <Header as="h1">Welcome to LeChonk's Larder</Header>
      <h4>A Personalized Pokemon Card Wallet!</h4>
    </Segment>
  );
};

export default PokeHeader;
