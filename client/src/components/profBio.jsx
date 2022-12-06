import React from "react";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";

const genderOptions = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

const ProfileBio = () => (
  <Form className="ui bio-form">
    <Form.Group widths="equal">
      <Form.Field
        className="first-name"
        id="form-input-control-first-name"
        control={Input}
        label="First name"
        placeholder="First name"
      />
      <Form.Field
        className="last-name"
        id="form-input-control-last-name"
        control={Input}
        label="Last name"
        placeholder="Last name"
      />
      <Form.Field
        id="form-input-control-last-name"
        control={Input}
        label="Favorite Pokemon?"
        placeholder="Charizard"
      />
      <Form.Field
        control={Select}
        options={genderOptions}
        label={{ children: "Gender", htmlFor: "form-select-control-gender" }}
        placeholder="Gender"
        search
        searchInput={{ id: "form-select-control-gender" }}
      />
    </Form.Group>
    <Form.Field
      id="form-textarea-control-opinion"
      control={TextArea}
      label="About"
      placeholder="What drives you to catch them all?"
    />
    <Form.Field
      id="form-input-control-error-email"
      control={Input}
      label="Email"
      placeholder="ash@ketchum.com"
    />
    <Form.Group widths="equal">
      <Form.Field
        id="form-button-control-public"
        control={Button}
        content="Confirm"
      />
      <Form.Field
        id="form-button-control-public"
        control={Button}
        content="Edit Info"
      />
    </Form.Group>
  </Form>
);

export default ProfileBio;
