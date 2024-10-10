import React from 'react';
// import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import InteractiveMap from '../components/About/InteractiveMap';

const Places = () => (
  <Main
    title="Places"
    description="Places I've been"
  >
    <InteractiveMap />
  </Main>
);

export default Places;
