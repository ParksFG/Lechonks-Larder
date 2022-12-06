import React from 'react'
import { Segment, Grid, Form, Button, Divider } from 'semantic-ui-react'

const Login = () => {

    return (
        <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Form>
              <Form.Input
                icon="user"
                iconPosition="left"
                label="Username"
                placeholder="Username"
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="Password"
                type="password"
                placeholder="Password"
              />
              <Button content="Login" primary />
              <Divider />
              <Button content="Forget Your Info?" secondary />
            </Form>
          </Grid.Column>
    
          <Grid.Column verticalAlign="middle">
              <Button content="Sign up" icon="signup" size="big" a href='/Register'/>
          </Grid.Column>
        </Grid>
    
        <Divider vertical>Or</Divider>
      </Segment>
    )

}

export default Login