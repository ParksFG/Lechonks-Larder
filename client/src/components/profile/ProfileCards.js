import React from "react";
import {
  Grid,
  Image,
  Segment,
  Container,
  Header,
  Button,
  Divider,
} from "semantic-ui-react";

const ProfCards = () => (
  <div className="user-card-container">
  <Segment.Group>
    <Segment>
      <Header as="h2">Your Cards</Header>
    </Segment>

    <Segment>
      <Container className="card-container">
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              <Image
                size="big"
                src="https://tcg.pokemon.com/assets/img/expansions/celebrations/cards/en-us/SWSH25TH_EN_40-2x.jpg"
              />
              <Divider />
              <Button
                content="Remove From Wallet"
                icon="remove"
                size="small"
                a
                href="#"
              />
            </Grid.Column>
            <Grid.Column>
              <Image src="https://tcg.pokemon.com/assets/img/expansions/vivid-voltage/cards/en-us/SWSH4_EN_22-2x.jpg" />
              <Divider />
              <Button
                content="Remove From Wallet"
                icon="remove"
                size="small"
                a
                href="#"
              />
            </Grid.Column>
            <Grid.Column>
              <Image src="https://tcg.pokemon.com/assets/img/expansions/fusion-strike/cards/en-us/SWSH08_EN_6-2x.jpg" />
              <Divider />
              <Button
                content="Remove From Wallet"
                icon="remove"
                size="small"
                a
                href="#"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Image src="https://tcg.pokemon.com/assets/img/expansions/vivid-voltage/cards/en-us/SWSH4_EN_22-2x.jpg" />
              <Divider />
              <Button
                content="Remove From Wallet"
                icon="remove"
                size="small"
                a
                href="#"
              />
            </Grid.Column>
            <Grid.Column>
              <Image src="https://tcg.pokemon.com/assets/img/expansions/silver-tempest/cards/en-us/SWSH12_EN_15-2x.jpg" />
              <Divider />
              <Button
                content="Remove From Wallet"
                icon="remove"
                size="small"
                a
                href="#"
              />
            </Grid.Column>
            <Grid.Column>
              <Image src="https://tcg.pokemon.com/assets/img/expansions/silver-tempest/cards/en-us/SWSH12_EN_24-2x.jpg" />
              <Divider />
              <Button
                content="Remove From Wallet"
                icon="remove"
                size="small"
                a
                href="#"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </Segment.Group>
  </div>
);

export default ProfCards;
