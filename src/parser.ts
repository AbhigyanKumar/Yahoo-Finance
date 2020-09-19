import * as schema from "./finance_pb";
import { toUint8Array } from "js-base64";

export default function parse(b64:string|undefined): Object {
	if (!b64) return {};
	var quote = schema.Message.deserializeBinary(toUint8Array(b64));
	return quote.toObject();
}
