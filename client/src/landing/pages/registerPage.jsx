import React from "react";
import { Form, Button, Message, Icon } from "semantic-ui-react";

import "../../App.css";

const RegistrationPage = () => {
  return (
    <div className="ui page-container">
      <Message
      className="ui register-header-text"
        attached
        justify-content="center"
        header="Welcome to the Larder!"
        content="Fill out the trainer form below to sign-up for a new account"
      />
      <Form className="attached fluid segment">
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="First Name"
            placeholder="Ash"
            type="text"
          />
          <Form.Input
            fluid
            label="Last Name"
            placeholder="Ketchum"
            type="text"
          />
        </Form.Group>
        <Form.Input label="Username" placeholder="Please enter your Trainer Name!" type="text" />
        <Form.Input label="Password" type="password" />
        <Form.Checkbox inline label="I agree to the terms and conditions" />
        <Button secondary>Submit</Button>
      </Form>
      <Message attached="bottom" warning>
        <Icon name="help" />
        Already signed up?&nbsp;<a href="#">Login here</a>&nbsp;instead.
      </Message>
    </div>
  );
};

export default RegistrationPage;
