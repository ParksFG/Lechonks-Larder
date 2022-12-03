import React from "react";
import {
  Button,
  Divider,
  Form,
  Grid,
  Segment,
} from "semantic-ui-react";

import "../../App.css";

const SignInPage = () => (
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
        <a href="./landing/pages/registerPage">
          <Button content="Sign up" icon="signup" size="big" href='./landing/pages/registerPage'/>
        </a>
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
);

export default SignInPage;
