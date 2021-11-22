import Card from "../UI/Card.js";
import style from "./AddUser.module.css";
import Button from "../UI/Button.js";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal.js";

const AddUser = props => {

    const [enteredUsername,setUsername] = useState("");
    const [enteredAge,setAge] = useState("");
    const [error,setError] = useState();

    const addUserHandler = (event) =>{
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title : "Invalid Input",
                messages : "Plase enter a valid name and age."
            })
            return
        }
        if (+enteredAge < 0){

            setError({
                title : "Invalid age",
                messages : "Plase enter a valid age."
            });
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

    const errorHandler = () =>{
        setError (null);
        
    }

    return (
        <div>
        {error && <ErrorModal title = {error.title} messages={error.messages} onConfirm= {errorHandler}/> }
        <Card className= {style.input}>
        <form onSubmit= {addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id= "username" type="text" value = {enteredUsername}onChange= {UsernameChangeHandler}></input>

            <label htmlFor="age">Age(Years)</label>
            <input id= "age" type="number" value = {enteredAge} onChange= {AgeChangeHandler}></input>

            <Button type="submit">Add User</Button>

        </form>
        </Card>
        </div>
       
    )

}


export default AddUser;