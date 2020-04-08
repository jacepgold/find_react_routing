import React, { Fragment } from 'react';
import FakeText from './FakeText';
import { Header, Image } from 'semantic-ui-react';

// Home Page
const Home = () => (
  <Fragment>
    <Header as='h1'>Home Page</Header>
    <Image src='https://ca.slack-edge.com/TK8TGFGJG-UMP932F6C-3e84da9f57f8-512' alt='Jace Gold' size='medium' circular />
    <FakeText />
  </Fragment>
);

export default Home;