import React, { Fragment } from 'react';
import FakeText from './FakeText';
import { Header, Image } from 'semantic-ui-react';

/* Instructions
  1. Replace image with an image of yourself
  2. Create a page with a gallery from Semantic UI (react.semantic-ui.com)
  3. Create a Git Repository of your own
  4. Upload this to that repository and slack Jace the link


  https://react.semantic-ui.com/views/card/

*/
// Home Page
const Home = () => (
  <Fragment>
    <Header as='h1'>Home Page</Header>
    <Image src='https://ca.slack-edge.com/TK8TGFGJG-UMP932F6C-3e84da9f57f8-512' alt='Jace Gold' size='medium' circular />
    <FakeText />
  </Fragment>
);

export default Home;