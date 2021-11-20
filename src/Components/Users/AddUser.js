import Card from "../UI/Card.js";
import style from "./AddUser.module.css";
import Button from "../UI/Button.js";

const AddUser = props => {

    const addUserHandler = (event) =>{
        event.preventDefault();
    }


    return (
        
        <Card className= {style.input}>
        <form onSubmit= {addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id= "username" type="text"></input>

            <label htmlFor="age">Age(Years)</label>
            <input id= "age" type="number"></input>

            <Button type="submit">Add User</Button>

        </form>
        </Card>
       
    )

}


export default AddUser;