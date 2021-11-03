import React from 'react';
import { Link } from 'react-router-dom';
import { StyleButton } from '../../Styles/GlobalStyles';

const Home = () => {
  return (
    <div>
      <Link to="/beerlist">
        <StyleButton>리스트</StyleButton>
      </Link>
    </div>
  );
};

export default Home;
