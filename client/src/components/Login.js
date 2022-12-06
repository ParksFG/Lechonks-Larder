import React from 'react'
import { Segment, Input, Container, Header } from 'semantic-ui-react'

const Login = () => {

    return (
        <Segment inverted>
            <Header as='h1'>Login Page</Header>
        </Segment>,
        
        <Segment>
            <Header as='h2'>Login Here</Header>
            <Container>
                <Input placeholder='Username...' />
                <Input placeholder='Password...' />
            </Container>
        </Segment>

                 
    )

}

export default Login