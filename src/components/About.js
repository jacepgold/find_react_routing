import React, { Fragment } from 'react';
import FakeText from './FakeText';
import { Header } from 'semantic-ui-react';

// About Page
const About = () => (
  <Fragment>
    <Header as='h1'>About Us</Header>
    <FakeText />
  </Fragment>
);

export default About;