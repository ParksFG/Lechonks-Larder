import React from "react";
import { Segment, Container, Grid, Image, Header } from "semantic-ui-react";

const Home = () => {
  return (
    <div className="homepageDiv">
      <div className="homepageDiv" style={{ backgroundcolor: "Black" }}>
        <Segment textAlign="center" style={{ padding: "10em 0em" }} vertical>
          <Container text inverted>
            <Header
              classname="homepageHeader"
              style={{ fontSize: "2em", color: "White" }}
            >
              Welcome to LeChonks Larder!
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Welcome to the number one Pokemon card collector site! Here you
              can find and collect all the cards you have in your collection!
            </p>
          </Container>
        </Segment>
      </div>
      <Segment>
        <Container>
          <h2>Pokemon Cards of the Day</h2>
        </Container>
        <Container>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Image src="https://images.pokemontcg.io/swsh9/174.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://images.pokemontcg.io/swshp/SWSH262.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://images.pokemontcg.io/swsh9/18.png" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
};

export default Home;
