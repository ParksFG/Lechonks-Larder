import React, { Component } from "react";
import { Image, Container, Divider, Menu, Grid, Segment, Form, Card } from 'semantic-ui-react';

import "../../App.css";

export default class ProfilePage extends Component {
    state = { activeItem: 'bio' }
    cards = Card.all()

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;

        return (
        <div>
            <Container textAlign='center'>Your Profile</Container>
            <Divider />
            <Grid>
                <Grid.Column width={4}>
                    <Menu fluid vertical tabular>
                        <Menu.Item
                        name='bio'
                        active={activeItem === 'bio'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='cards'
                        active={activeItem === 'cards'}
                        onClick={this.handleItemClick}
                        />
                    </Menu>
                </Grid.Column>

                <Grid.Column stretched width={12}>
                    
                </Grid.Column>
            </Grid>
        </div>
        )
    }
}



// {/* <Image src='' size="" rounded /> */}

// // const ProfilePage = () => (
// //     <div>
// //         <Container textAlign='center'>Your Profile</Container>
// //         <Divider />
        
// //     </div>
// // );