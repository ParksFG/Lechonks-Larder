import React from 'react'
import { Segment, Input, Container, Header, Grid, Image } from 'semantic-ui-react'

const Search = () => {

    return (
        <Segment inverted>
            <Header as='h1'>Search the DB</Header>
        </Segment>,
        
        <Segment>
            <Header as='h2'>Search Here</Header>
            <Container>
                <Input
                    label={{ basic: true, content: 'Search' }}
                    labelPosition='right'
                    placeholder='Enter pokemon name'
                />
            </Container>
        </Segment>,

        <Segment>
            <Header as='h2'>Test Result</Header>
            <Container>
                <Grid columns={3} divided>
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


export default Search