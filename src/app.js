
function checkStatus() {
    fetch('/data/data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('status').innerHTML = 'Status: ' + data.statusTypes[0];
        });
}
