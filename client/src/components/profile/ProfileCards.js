import React from "react";
import { Grid, Image } from "semantic-ui-react";

const ProfCards = () => (
  <Grid columns={6} divided>
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
