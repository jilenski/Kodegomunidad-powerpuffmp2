import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="././images/alumni-2.png" />
      <Card.Body>
        <Card.Title><b> Erica Caliuag </b></Card.Title>
        <Card.Text>
        <h6> Web Developer</h6>
          "What its like to work in top IT Company?"
        </Card.Text>
        <Button variant="primary">Get to know Erica</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;