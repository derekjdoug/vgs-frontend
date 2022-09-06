import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import contactPhoto from '../../src/components/img/jeff-calibration.jpg'


class Contact extends React.Component {
  render() {
    return (
      <Container className='contactContainer'>
      <Card style={{ width: '18rem' }} className='contactCard'>
      <Card.Img variant="top" src={contactPhoto} />
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">Jeffrey Douglas, Owner</Card.Subtitle>
        <Card.Text>
          <ul className='contactList'>
            <li>Cell: 555-555-5555</li>
            <li>Office: 555-555-5555</li>
            <li>Fax: 555-555-5555</li>
            <li>Email: example@vgs.com</li>
            <li>PO Box 100, Newfane, NY 14108-0100</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
    );
  }
}

export default Contact;
