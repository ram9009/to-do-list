import React from "react";
import { connect } from "react-redux";
import { Form, Col, Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const ToDoForm = (props) => {
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

       <Link to="/">
        <h2 >
          Go Back
        </h2>
        </Link>
      </Navbar>

      <Col sm={12}>
        <Form onSubmit={(e)=>{
            e.preventDefault()
            console.log('called adding')
        }} >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <br />
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <br />
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <br />
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: () => {},
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);
