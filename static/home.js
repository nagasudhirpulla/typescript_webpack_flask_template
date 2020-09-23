document.getElementById('greetBtn').onclick = function() {
    var nameStr = document.getElementById('nameInp').value;
    var greetingStr = 'Hello ' + nameStr + " !!!";
    document.getElementById('outDiv').innerHTML = greetingStr;
}