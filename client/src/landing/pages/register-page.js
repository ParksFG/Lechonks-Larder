import React from 'react';
import { Form } from 'semantic-ui-react';

import '../../App.css';

const RegistrationPage = () => (
    <Form>
    <Form.Input
      error={{ content: 'Please enter your first name', pointing: 'below' }}
      fluid
      label='First name'
      placeholder='First name'
      id='form-input-first-name'
    />
    <Form.Input
      error='Please enter your last name'
      fluid
      label='Last name'
      placeholder='Last name'
    />
    <Form.Checkbox
      label='I agree to the Terms and Conditions'
      error={{
        content: 'You must agree to the terms and conditions',
        pointing: 'left',
      }}
    />
  </Form>
);

export default RegistrationPage;