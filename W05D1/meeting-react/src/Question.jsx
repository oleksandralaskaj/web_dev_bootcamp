import { Answer } from './Answer';

export const Question = (props) => {
    return (
        <div className="question">
            <h3 className="question__title">{props.title}</h3>
            <p className="question__definition">{props.text}</p>
            <Answer answer={props.answer}/>
            <Answer answer="BlaBlaBla BlaBlaBla BlaBlaBla BlaBlaBla BlaBlaBla?"/>
        </div>
    );
};