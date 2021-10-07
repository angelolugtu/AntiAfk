let clicker;
currentAction = 'stop';
count = 0;


function onStartClick() {
    document.getElementById('status').innerHTML = "Started";
    // Prevent double instance of setInterval
    if(currentAction !== 'start') {
        currentAction = 'start';
        clicker = setInterval(doClick, 30000);
    }
}

function onStopClick() {
    document.getElementById('status').innerHTML = "Stopped";
    document.getElementById('countText').innerHTML = `Retriggers: 0`;
    currentAction = 'stop';
    clearInterval(clicker);
}
  
function doClick() {
    document.getElementById('trigger').click();
}

function addCount() {
    document.getElementById('countText').innerHTML = `Retriggers: ${count + 1}`;
    count += 1;
}
