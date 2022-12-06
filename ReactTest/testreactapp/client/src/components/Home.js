import React from "react";
import { Segment, Container, Grid, Image } from "semantic-ui-react";

const Home = () => {

    return (
            
        <Segment>
            <Container >
            <h2>Pokemon Cards of the Day</h2>
            </Container>,
            <Container>
                <Grid columns={3}>
                    <Grid.Row>
                        <Grid.Column>
                            <Image src='https://images.pokemontcg.io/swsh9/174.png' />
                        </Grid.Column>
                        <Grid.Column>
                             <Image src='https://images.pokemontcg.io/swshp/SWSH262.png' />
                        </Grid.Column>
                        <Grid.Column>
                        <Image src='https://images.pokemontcg.io/swsh9/18.png' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>



    )

}

export default Home