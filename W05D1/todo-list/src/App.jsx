import './App.scss'
import {CheckIcon} from "./CheckIcon.jsx";
import {ToDoItem} from "./ToDoItem.jsx";

function App() {
    return (
        <>
            <ToDoItem decription = "Unload a washing machine."/>
            <ToDoItem decription = "Buy groceries."/>
            <ToDoItem decription = "Mow the lawn."/>
            <ToDoItem decription = "Feed the cat."/>
            <ToDoItem decription = "Make dinner."/>

        </>
    )
}

export default App
