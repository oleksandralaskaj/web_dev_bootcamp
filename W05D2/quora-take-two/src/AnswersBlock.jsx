

export const AnswersBlock = ({objAnswers, keyQ}) => {
    return <div className="answers">
        {objAnswers.map((a, index) => <p key={keyQ + index}>A{index+1}: {a}</p>)}
    </div>
}