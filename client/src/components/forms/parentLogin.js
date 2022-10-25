import React, { useState } from "react";
import {PARENT_LOGIN} from "../../utils/apollo/mutations";
import { useMutation } from "@apollo/client";
import AuthService from "../../utils/Auth"
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import joinImage from "../../assets/images/join.jpg";

const ParentLogIn = () => {

    const [ loginForm, setLoginForm ] = useState({
        email: "",
        password: "",
    });


    const [createParent] = useMutation(PARENT_LOGIN)

    const navigate = useNavigate();

    const onChange = (e) => {
        const key = e.target.id
        setLoginForm({...loginForm, [key]: e.target.value});
    }

    const style = {
        backgroundImage: `url(${joinImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        overflow: "hidden", 
        paddingBottom: "550px"
    }

    const onSubmit = async (e) => {
     // apollo query

        e.preventDefault();


        const { data } = await createParent({
            variables: {email: loginForm.email, password: loginForm.password}
        })

        AuthService.setLogIn(data.logIn.token);

        navigate("../")
        
    }




    return (
        <div style={style}>
            <Row style={{marginTop: "100px"}}>
                <Col className="text-center">
                    <h2 className="text-light">Welcome Back!</h2>
                </Col>
            </Row>
        <Row style={{height: "100%", overflow: "hidden"}} className="align-items-center">
        <Col xs={11} xl={6} className="mx-auto" style={{marginTop: "200px"}}>
        <Form className="border shadow p-3 bg-light" onSubmit={onSubmit}>
            
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email: </Form.Label>
                <Form.Control type="email" placeholder="name@email.com" onChange={onChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password: </Form.Label>
                <Form.Control type="password" placeholder="password" onChange={onChange} />
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
                <p style={{display: "inline"}} className="text-light">Don't have an account? </p>
                <Link to="../signup" relative="path" className="text-light">Sign Up</Link>
            </Col>
        </Row>

        </div>
       
    )
}

export default ParentLogIn;