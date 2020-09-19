"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var websocket_1 = require("websocket");
var app = new websocket_1.client();
function streams(subscriptions, call) {
    app.on('connectFailed', function (error) {
        console.log('Connect Error: ' + error.toString());
    });
    app.on('connect', function (connection) {
        console.log('WebSocket Client Connected');
        connection.on('error', function (error) {
            console.log("Connection Error: " + error.toString());
        });
        connection.on('close', function () {
            console.log('echo-protocol Connection Closed');
        });
        connection.on('message', call);
        function sendNumber() {
            if (connection.connected) {
                connection.send(JSON.stringify({
                    "subscribe": __spreadArrays(subscriptions)
                }));
            }
        }
        sendNumber();
    });
    app.connect('wss://streamer.finance.yahoo.com');
}
exports["default"] = streams;
//# sourceMappingURL=socket.js.map