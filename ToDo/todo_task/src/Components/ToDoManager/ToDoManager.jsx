import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Navbar, Button, Row,ListGroup,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const ToDoManager = (props) => {
  
  useEffect(()=>{
    console.log('data from store is',props.data)
  },[])
  return (
    <>
      <Navbar
        bg="light"
        style={{
          height: "50px",
          background: "#8B008B",
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Navbar.Text
          href="/"
          style={{ fontSize: "24px", color: "white", fontWeight: "600" }}
        >
          Home
        </Navbar.Text>
        <Link to="/Add">
        <Button style={{ height: "40px", width: "60px", marginRight: "8px" }}>
          Add
        </Button>
        </Link>
        {/* <Navbar.Collapse>
        <Button style={{ height: "40px", width: "60px", marginRight: "8px" }}>
          Add
        </Button>
        </Navbar.Collapse> */}
        
      </Navbar>
      <Row>
    <Col sm={4}>
      <ListGroup>
        
       
      </ListGroup>
    </Col>
  </Row>
    </>
  );
};

const mapStateToProps = (state)=>{
  return{
    data:state.data
  }
}
export default connect(mapStateToProps)(ToDoManager);
