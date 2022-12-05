import React from "react";
import { Card, Grid, Icon, Image } from "semantic-ui-react";

const ProfCards = () => (
  <Grid columns={4}>
    <Grid.Row style={{ padding: 20}}>
      <Grid.Column>
        <Image
          src="https://images.pokemontcg.io/swsh9/18_hires.png"
          className="card-content"
        ></Image>
      </Grid.Column>
      <Grid.Column>
        <Image
          src="https://images.pokemontcg.io/swsh9/18_hires.png"
          className="card-content"
        ></Image>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default ProfCards;
