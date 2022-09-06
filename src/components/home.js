import React from 'react';
import vgs from '../components/img/vgs-mock-logo.png';

class Home extends React.Component {
  render() {
    return (
    <>
      <div class="center">
      <img id="hero" src={vgs} alt ="vgs logo"/>
      </div>
    </>
    );
  }
}

export default Home;
