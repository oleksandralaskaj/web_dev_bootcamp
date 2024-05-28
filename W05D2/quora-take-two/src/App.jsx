import './App.scss'
import {AnswersBlock} from "./AnswersBlock.jsx"
import {QandABlock} from "./QandABlock.jsx";
import {questionsAndAnswers} from "./qestionsAndAnswers.js";

function App() {
    return (questionsAndAnswers.map((qanda, index) => <QandABlock objQustionWithAnswers={qanda} keyQ={index}/>)
    )
}

export default App
