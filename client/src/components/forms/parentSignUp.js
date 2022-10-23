import React, { useState } from "react";
import {CREATE_PARENT} from "../../utils/apollo/mutations";
import { useMutation } from "@apollo/client";
import AuthService from "../../utils/Auth";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import joinImage from "../../assets/images/join.jpg"
const ParentSignUp = () => {

    const [ signupForm, setsignupForm ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        age: ""
    });

    const [validated, setValidated] = useState(false)

    const [createParent] = useMutation(CREATE_PARENT);

    const navigate = useNavigate();

    const style = {
        backgroundImage: `url(${joinImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        overflow: "hidden", 
        paddingBottom: "300px"
    }

    const onChange = (e) => {
        const key = e.target.id
        setsignupForm({...signupForm, [key]: e.target.value});
    }

    const onSubmit = async (e) => {
    //     // apollo query


        e.preventDefault();

    //     // createParent({variables: {signupForm}})
        // const result = useMutation(CREATE_PARENT, {variables: {firstName: signupForm.firstName}});




        const { data } = await createParent({
            variables: {firstName: signupForm.firstName, lastName: signupForm.lastName, email: signupForm.email,
                password: signupForm.password, age: parseInt(signupForm.age)}
        })

        AuthService.setLogIn(data.createParent.token);


        navigate("../")
    }




    return (

        <div style={style}>
            <Row style={{marginTop: "100px"}}>
                <Col className="text-center">
                    <h2 className="text-light">Join ConnectKids Today!</h2>
                </Col>
            </Row>
        <Row style={{height: "100%", overflow: "hidden"}} className="align-items-center">
        <Col xs={11} xl={6} className="mx-auto" style={{marginTop: "75px"}}>


        <Form noValidate validated={validated} className="border shadow p-3 bg-light" onSubmit={onSubmit}>
            <Row>
            <Col>
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First Name: </Form.Label>
                    <Form.Control type="text" placeholder="First Name" onChange={onChange}/>
                </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name: </Form.Label>
                    <Form.Control type="text" placeholder="Last Name" onChange={onChange} />
                </Form.Group>
            </Col>
            </Row>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email: </Form.Label>
                <Form.Control type="email" placeholder="name@email.com" onChange={onChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password: </Form.Label>
                <InputGroup hasValidation>
                <Form.Control type="password" placeholder="password" onChange={onChange} />
                <Form.Control.Feedback type="invalid">
                    Please enter a valid password
                </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="age">
                <Form.Label>Age: </Form.Label>
                <Form.Control type="number" onChange={onChange} />
            </Form.Group>

            <Form.Group className="mb-3"></Form.Group>
            <Button variant="success" type="submit" onSubmit={onSubmit}>
                Submit
            </Button>

        </Form>
        </Col>
        </Row>

        <Row>
            <Col xs={3} className="mx-auto text-center">
                <p style={{display: "inline"}} className="text-light">Already have an account? </p>
                <Link to="../login" relative="path" className="text-light" >Login</Link>
            </Col>
        </Row>

        </div>
    )
}

export default ParentSignUp;