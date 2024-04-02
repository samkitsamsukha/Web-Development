import React from "react";

import Input from "./Input.jsx";

function Form(props) {
    return (
        <form className="form">
            <Input 
                type= "text"
                placeholder= "Username"
            />
            <Input 
                type= "password"
                placeholder= "Password"
            />
            {/* Since we can't include functions or if else statements inside this block of code we use ternatry operator which is interpreted as an expression */}
            {props.isRegistered === false && 
                <Input 
                    type="password" 
                    placeholder="Confirm Password"
                />
            }
            <button type="submit">
                { props.isRegistered? "Login" : "Register" }
            </button>
        </form>
    )
}

export default Form;