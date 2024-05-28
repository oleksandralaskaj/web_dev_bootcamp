import {AnswersBlock} from "./AnswersBlock.jsx";
import {questionsAndAnswers} from "./qestionsAndAnswers.js";
import {useState} from "react";

export const QandABlock = ({objQustionWithAnswers, keyQ}) => {
    const [QASet, setQASet] = useState(objQustionWithAnswers)
    const [newAnswer, setNewAnswer] = useState('');
    const handleNewAnswerChange = (e) => {
        setNewAnswer(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAnswers = QASet.answers.concat(newAnswer);
        const newQASet = {
            question: QASet.question,
            answers: newAnswers
        }
        setQASet(newQASet)
        setNewAnswer("")
    }


    return <div>
        <h2>Question # {keyQ}</h2>
        <h3>{QASet.question}</h3>
        <AnswersBlock objAnswers={QASet.answers} keyQ={keyQ}/>
        <form onSubmit={handleSubmit}>
            <label>
                Your answer:
                <br/>
                <input type="text" value={newAnswer} onChange={handleNewAnswerChange}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    </div>
}