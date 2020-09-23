import { greetName } from './stringUtils/greetName'

(document.getElementById('greetBtn') as HTMLButtonElement).onclick = (ev) => {
    var nameStr: string = (document.getElementById('nameInp') as HTMLInputElement).value
    const greetingStr = greetName(nameStr)
    document.getElementById('outDiv').innerHTML = greetingStr
}