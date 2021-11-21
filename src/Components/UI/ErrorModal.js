import Card from "./Card";
import Button from "./Button";
import style from "./ErrorModal.module.css";

const ErrorModal = props => {

    return(
        <Card className= {style.modal}>
            <header className= {style.header}>
                <h2>
                    {props.title}
                </h2>
            </header>
            <div className= {style.content}>
                <p>
                    {props.messages}
                </p>
            </div>
            <footer className= {style.actions}>
                <Button>Okay</Button>
            </footer>
        </Card>

    )
}

export default ErrorModal;