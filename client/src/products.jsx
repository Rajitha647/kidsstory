import { useEffect,useState } from "react";
import axios from 'axios'
import { Col, Container, Row,Card ,Button } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion'


function Products(){
    const [product,setProducts]=useState([])
    useEffect(()=>{
     const url="https://fakestoreapi.com/products";
     axios.get(url)
     .then((res)=>{
     setProducts(res.data)
     })
     .catch(err=>console.log(err))
    },[])
    return(
        <>
        <Container>
            <Row className="mt-3 pt-3">

        {
          product?
          product.map((items)=>{
                return(
              <Col lg={3} key={items.id} className="mt-3">
               <h3>{items.title}</h3>
               <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={items.image}  style={{height:"220px"}}/>
      <Card.Body>
      <Accordion defaultActiveKey="">
      <Accordion.Item eventKey="1">
        <Accordion.Header>
            
            <h5><i class="fa-solid fa-tag rd"></i>  
            <i class="fa-solid fa-indian-rupee-sign"></i>{items.price}
        
        </h5> 

        
        </Accordion.Header>
        <Accordion.Body>
            <h4>{items.title}</h4>
            

        {items.description}
         
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <h6>
      <i class="fa-solid fa-star"></i>
        
        {items.rating.rate}
        
      </h6>
       
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

              </Col>

                )
          })
         :
         "no data found"

        } 
         </Row>
        </Container>
        
        </>
    )
}

export default Products;