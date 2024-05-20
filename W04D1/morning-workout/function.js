const constructMessage = (objMessage, container) => {
    const outerDiv = document.createElement("div")
    outerDiv.className = `message message--${objMessage.side}`
    outerDiv.innerHTML = `<div class="message__text">${objMessage.text}</div>`
    container.appendChild(outerDiv)
}

const showNMessages = (n, arrayOfMessages, container) => {
    for (let i = 0; i < n; i++) {
        setTimeout(() => constructMessage(arrayOfMessages[i], container), 800 * i)
    }
}
const showPartOfConversation = (startIndex, endIndex, arrayOfMessages, container) => {
    for (let i = startIndex; i < endIndex; i++) {
        setTimeout(() => constructMessage(arrayOfMessages[i], container), 800 * (i-startIndex))
    }
}

export {constructMessage, showNMessages, showPartOfConversation}