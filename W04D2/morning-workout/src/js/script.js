import { ProgressBar } from './ProgressBar';

// @TODO no.1
//    create new instance of ProgressBar.
//    Explore ProgressBar class, but the constructor does not need any parameter.
//    Take a body element (document.body) and append progress bar element to it.
//    Progress bar element was created in the constructor of PB
//    and it is available as a property "element" of the object you created.
//
//    code here:


// start value is provided
const pbOne = new ProgressBar(3)
document.body.appendChild(pbOne.element)
//start valu is omited
const pbThree = new ProgressBar()
document.body.appendChild(pbThree.element)
// fx creates bar elemant and appends it to body
const makeNewBar = (newBarName, startValue) => {
    newBarName = new ProgressBar(startValue)
    document.body.appendChild(newBarName.element)
}
//bar with starttinf value created with fx
makeNewBar("pbFour", 3)
//bar without starttinf value created with fx
makeNewBar("pbFive")


// @TODO no.2 once you have done TODO no.1 and you can see the progress bar,
//    fix missing icon on plus button
