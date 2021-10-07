let clicker;
currentAction = 'stop';
count = 0;


function onStartClick() {
    document.getElementById('status').innerHTML = "Started";
    // Prevent double instance of setInterval
    if(currentAction !== 'start') {
        currentAction = 'start';
        clicker = setInterval(doClick, 15000);
    }
}

function onStopClick() {
    document.getElementById('status').innerHTML = "Stopped";
    document.getElementById('countText').innerHTML = `Retriggers: 0`;
    currentAction = 'stop';
    clearInterval(clicker);
}
  
function doClick() {
    let focusElement = document.getElementById('trigger');
    
    addCount();

    if(document.activeElement !== focusElement) {
        focusElement.focus();
    } else {
        focusElement.blur();
    }
}

function addCount() {
    document.getElementById('countText').innerHTML = `Retriggers: ${count + 1}`;
    count += 1;
}
