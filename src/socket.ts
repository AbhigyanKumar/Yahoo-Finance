import { client, connection, IMessage } from "websocket";
import parse from "./parser";

const app = new client();

export default function streams(subscriptions: Array<string>, call: (data: IMessage) => void) {
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
					"subscribe": [...subscriptions]
				}));
			}
		}
		sendNumber();
	});
	app.connect('wss://streamer.finance.yahoo.com');
}
