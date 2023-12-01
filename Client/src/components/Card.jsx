import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent() {
  return (
    <Card style={{ padding:'5px', width: '250px', border: '2px solid #007BFF', borderRadius: '10px'}}>
      <Card.Img variant="top" src="https://i.ibb.co/XpSH7MZ/LAMP-001.jpg" style={{width: '100%', height: '300px', objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px'}}/>
      
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="row text-center" style={{marginTop:'25px'}}> 
        <a
                  href="/products"
                  className="btn btn-custom btn-md "
                >
                  Voir Plus
                </a>{" "}
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;