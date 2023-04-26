import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="././images/alumni-3.png" />
      <Card.Body>
        <Card.Title>Elaine Dela Cruz</Card.Title>
        <Card.Text>
        <h6> UI/ UX Designer </h6>
          "How learning to code change my life."
        </Card.Text>
        <Button variant="primary">Read Elaine's Story</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;