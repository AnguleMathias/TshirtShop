import React from 'react';
import { Box, Text, Heading } from 'gestalt';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="around"
    height={70}
    color="midnight"
    padding={1}
    shape="roundedBottom"
  >

    {/* Link to login */}
    <NavLink to="/login">
      <Text size="x1" color="white">
        Log In
      </Text>
    </NavLink>

    {/* Link to Title and logo */}
    <NavLink to="/">
      <Heading size="xs" color="orange">
        Shop
      </Heading>
    </NavLink>

    {/* Link to sign up */}
    <NavLink to="/signup">
      <Text size="x1" color="white">
        Sign Up
      </Text>
    </NavLink>
  </Box>
);

export default Navbar;
