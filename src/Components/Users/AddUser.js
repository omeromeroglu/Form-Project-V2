import Card from "../UI/Card.js";
import style from "./AddUser.module.css";
import Button from "../UI/Button.js";
import { useState } from "react";

const AddUser = props => {

    const [enteredUsername,setUsername] = useState("");
    const [enteredAge,setAge] = useState("");

    const addUserHandler = (event) =>{
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return
        }
        if (+enteredAge < 0){
            return
        }
        props.onAddUser(enteredUsername,enteredAge);
        setUsername ("");
        setAge ("");
    }
    const UsernameChangeHandler = (event) =>{
        setUsername (event.target.value);

    }
    const AgeChangeHandler = (event) =>{
        setAge (event.target.value);

    }

    return (
        
        <Card className= {style.input}>
        <form onSubmit= {addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id= "username" type="text" value = {enteredUsername}onChange= {UsernameChangeHandler}></input>

            <label htmlFor="age">Age(Years)</label>
            <input id= "age" type="number" value = {enteredAge} onChange= {AgeChangeHandler}></input>

            <Button type="submit">Add User</Button>

        </form>
        </Card>
       
    )

}


export default AddUser;