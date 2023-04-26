import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="././images/alumni-1.png" />
      <Card.Body>
        <Card.Title> <b>Trishia Borbe </b> </Card.Title>
        <Card.Text>
          <h6> Software Engineer</h6>
          "Nervous about your first interview?"
          
        </Card.Text>
        <Button variant="primary">Ask Trishia</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;