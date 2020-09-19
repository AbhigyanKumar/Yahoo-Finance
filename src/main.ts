import parse from './parser';
import { IMessage } from "websocket";
import boot from "./socket";

async function doThis(msg:IMessage) {
	console.log("New data arrived\n");
	console.log(parse(msg.utf8Data));
	
	console.log("\n\n\n");
}

boot(["CL=F", "YM=F"], doThis);
