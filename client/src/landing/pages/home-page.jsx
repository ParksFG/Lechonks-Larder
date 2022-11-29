import React from "react";
import { Link } from "react-router-dom";
import { Menu, Item, Image } from "semantic-ui-react";

const homePage = () => {
    return (
        <Menu secondary>
            <Menu.Item position="right">Lechoncks Larder</Menu.Item>
            <Menu.Item position="left">Login</Menu.Item>
            <Menu.Item position="left">Logout</Menu.Item>
        </Menu>
    )
}

export default homePage;