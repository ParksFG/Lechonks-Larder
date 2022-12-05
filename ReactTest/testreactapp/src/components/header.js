import React from 'react';
import {
    Segment,
    Header
} from 'semantic-ui-react'

const PokeHeader = ({ name }) => {
    return (
        <Segment inverted>
            <Header as='h1'>Welcome to LeChonk's Larder</Header>


        </Segment>


    )

}

export default PokeHeader