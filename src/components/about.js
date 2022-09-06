import React from 'react';
import Container from 'react-bootstrap/Container';

class About extends React.Component {
  render() {
    return (
      <Container className='outerAboutContainer'>
      <><h2>About VGS</h2></>
      <Container className='aboutContainer'>
        <h3>Services</h3>
        <p>Visual Gaging Services provides calibration, certification, repair, and servicing of optical comparators. We are ANAB accredited, with a current ISO certification.</p>
        <p>Our service area is western and central New York, as well as western Pennsylvania.</p>
      </Container>
      <Container className='aboutContainer'>
        <h4>History</h4>
        <p>VGS was founded in 1996 by Jeffrey Douglas with support from his father.</p>
      </Container>
      </Container>
    );
  }
}

export default About;
