import { ProgressBar } from './ProgressBar';

// @TODO no.1
//    create new instance of ProgressBar.
//    Explore ProgressBar class, but the constructor does not need any parameter.
//    Take a body element (document.body) and append progress bar element to it.
//    Progress bar element was created in the constructor of PB
//    and it is available as a property "element" of the object you created.
//
//    code here:

const pbOne = new ProgressBar(3)
document.body.appendChild(pbOne.element)
const pbThree = new ProgressBar()
document.body.appendChild(pbThree.element)

const makeNewBar = (newBarName) => {
    newBarName = new ProgressBar()
    document.body.appendChild(newBarName.element)
}

makeNewBar("pbFour")
makeNewBar("pbFive")
makeNewBar("pbSix")
makeNewBar("pbSeven")

// @TODO no.2 once you have done TODO no.1 and you can see the progress bar,
//    fix missing icon on plus button
