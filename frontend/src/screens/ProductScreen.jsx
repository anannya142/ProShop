import { useParams } from "react-router-dom"
import products from "../products";
import {Row,Col,Image,ListGroup,Card, ListGroupItem,Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Rating from "../components/Rating";

const ProductScreen = () => {
    const {id:productId}= useParams();
    const selctedProduct = products.find((p)=>p._id === productId);
    
  return (
    <div>
       
        <Link className="btn btn-light my-3" to="/"> Go Back</Link>
        <Row>
            <Col md={5}>
                <Image src={selctedProduct.image} alt={selctedProduct.name} fluid/>
            </Col>
            <Col md={4}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>{selctedProduct.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={selctedProduct.rating} text={`${selctedProduct.numReviews}reviews`}/>
                    </ListGroup.Item>
                    <ListGroupItem>
                        <ListGroupItem>Price${selctedProduct.price} </ListGroupItem>

                    </ListGroupItem>
                    <ListGroupItem>Description:{selctedProduct.description}</ListGroupItem>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <Row>
                                <Col>:Price:
                                </Col>
                                <Col><strong>:${selctedProduct.price}</strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>:Status:
                                </Col>
                                <Col><strong>:${selctedProduct.countInStock>0?'In Stock':'Out Of Stock'}</strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                           <Button className="btn-block" type="button" disabled={selctedProduct.countInStock===0}>
                            Add To Cart</Button>
                        </ListGroupItem>

                    </ListGroup>
                </Card>
            </Col>
            

        </Row>
    </div>
  )
        
}

export default ProductScreen;