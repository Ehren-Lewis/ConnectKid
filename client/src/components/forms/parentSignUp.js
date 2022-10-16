import React, { useState } from "react";
import {CREATE_PARENT} from "../../utils/apollo/mutations";
import { useMutation } from "@apollo/client";
import AuthService from "../../utils/Auth"
const ParentSignUp = () => {

    const [ loginForm, setLoginForm ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        age: ""
    });

    const [createParent, { error}] = useMutation(CREATE_PARENT)

    const onChange = (e) => {
        const key = e.target.id
        setLoginForm({...loginForm, [key]: e.target.value});
    }

    const onSubmit = async (e) => {
    //     // apollo query

        e.preventDefault();
    //     // createParent({variables: {loginForm}})
        // const result = useMutation(CREATE_PARENT, {variables: {firstName: loginForm.firstName}});

        const { data } = await createParent({
            variables: {firstName: loginForm.firstName, lastName: loginForm.lastName, email: loginForm.email,
                password: loginForm.password, age: parseInt(loginForm.age)}
        })

        console.log(data);
        AuthService.setLogIn(data.createParent.token);


        // let value =e.target.type;
        // const name= e.target.name
        // createParent((prevState) => ({
        //     ...prevState,
        //     [name]: value
        // }))
        // console.log(data); 
        
    }




    return (

        <form className="border m-auto w-50" onSubmit={onSubmit}>
            <div className="form-group">
                {/* <div className="row">/ */}
                <label>First Name: </label>
                {/* </div> */}
                <input id="firstName" type="text" onChange={onChange}></input>
            <div className="form-group">
                <label>Last Name: </label>
                <input id="lastName" type="text" onChange={onChange}></input>
            </div>
            <div className="form-group">
                <label>Email: </label>
                <input id="email" type="text" onChange={onChange}></input>
            </div>
            <div className="form-group">
                <label>Password: </label>
                <input id="password" type="text" onChange={onChange}></input>
            </div>
            <div className="form-group">
                <label>Age: </label>
                <input type="number" maxLength={2} id="age" onChange={onChange}></input>
            </div>

            </div>

            <input type="submit" onSubmit={onSubmit} />

        </form>

       
    )
}

export default ParentSignUp;